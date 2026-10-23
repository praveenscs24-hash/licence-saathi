import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const SYSTEM_PROMPT = `You are Licence Saathi (लाइसेंस साथी), an empathetic, trustworthy AI assistant helping everyday citizens in India navigate the driving licence (LL and DL) process under mParivahan guidelines.

CRITICAL INSTRUCTIONS & SAFETY RULES:
1. Speak in plain, simple words that a Class 8 student can easily understand.
2. Reply in the EXACT language used by the user (Hindi, Tamil, or English).
3. Plain terms: Explain LL (Learner's Licence - 6 month learner permit), DL (Permanent Driving Licence card), RTO (Regional Transport Office), and Form 1A (Doctor's medical certificate for age 40+).
4. If a rule depends on the specific state, politely ask which state or Union Territory the applicant is in.
5. Reference rules:
   - Minimum age 16 for gearless scooter up to 50cc (parental consent required).
   - Minimum age 18 for motorcycle with gear (MCWG) and car (LMV).
   - Minimum age 20 for commercial transport vehicles.
   - Learner test: 15 questions, 9 to pass (60%), 30 seconds per question.
   - Learner licence validity: 6 months. Minimum waiting period before permanent DL test: 30 days.
   - Sample fees: ₹150 LL per class + ₹50 test fee = approx ₹200.
6. ABSOLUTE PRIVACY & SAFETY MANDATE:
   - NEVER ask for, accept, or record Aadhaar numbers, PAN numbers, mobile numbers, passwords, OTPs, or payment card details.
   - If a user mentions or inputs an Aadhaar or sensitive credential, warn them immediately: "For your safety, please never share Aadhaar or private credentials. Licence Saathi never asks for private details."
7. NEVER claim to access live government databases or claim to have submitted a real application.
8. State clearly that rules and fees are prototype sample guidelines and advise users to verify on https://parivahan.gov.in/ or their local RTO office.
9. Keep responses concise, warm, helpful, and under 150 words.`;

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'Licence Saathi AI Backend',
    configured: Boolean(process.env.AI_API_KEY)
  });
});

// Chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message, history = [], language = 'en', userState = {} } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message is required' });
    }

    const trimmedMsg = message.trim().slice(0, 500);

    // Explicit Safety Filter: Reject / Warn against Aadhaar numbers (12 digits) or sensitive patterns
    const aadhaarRegex = /\b\d{4}\s?\d{4}\s?\d{4}\b/;
    if (aadhaarRegex.test(trimmedMsg)) {
      return res.json({
        reply: language === 'hi'
          ? "सुरक्षा चेतावनी: कृपया अपना 12 अंकों का आधार नंबर कभी साझा न करें! लाइसेंस साथी आपकी निजता की रक्षा करता है और किसी भी व्यक्तिगत पहचान संख्या की मांग नहीं करता।"
          : language === 'ta'
          ? "பாதுகாப்பு எச்சரிக்கை: தயவுசெய்து உங்கள் 12 இலக்க ஆதார் எண்ணை பகிர வேண்டாம்! லைசென்ஸ் சாரதி உங்கள் தனிப்பட்ட ரகசிய விவரங்களை ஒருபோதும் கேட்காது."
          : "Safety Warning: Please never share your 12-digit Aadhaar number! Licence Saathi strictly protects your privacy and will never request or record sensitive identity credentials.",
        isSafetyIntervention: true
      });
    }

    const apiKey = process.env.AI_API_KEY || process.env.OPENAI_API_KEY;
    const baseUrl = (process.env.AI_API_BASE_URL || 'https://api.openai.com/v1').replace(/\/+$/, '');
    const model = process.env.AI_MODEL || 'gpt-4o-mini';

    // If API key is not configured, inform client cleanly so it uses instant local keyword fallback
    if (!apiKey || apiKey === 'your_openai_or_compatible_api_key_here') {
      return res.status(503).json({
        error: 'API_KEY_NOT_CONFIGURED',
        message: 'AI server key not configured. Using client fallback.'
      });
    }

    // Format last 10 messages for conversation context
    const cleanHistory = (Array.isArray(history) ? history : [])
      .slice(-10)
      .map(h => ({
        role: h.role === 'user' ? 'user' : 'assistant',
        content: String(h.content || '').slice(0, 500)
      }));

    // Contextual system prompt with current user state (stage & state)
    let stateContext = "";
    if (userState.currentStage) {
      stateContext += ` The applicant is currently at step: ${userState.currentStage}.`;
    }
    if (userState.selectedState) {
      stateContext += ` The applicant's state is: ${userState.selectedState}.`;
    }

    const messages = [
      { role: 'system', content: SYSTEM_PROMPT + stateContext },
      ...cleanHistory,
      { role: 'user', content: trimmedMsg }
    ];

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), Number(process.env.AI_TIMEOUT_MS) || 8000);

    const apiResponse = await fetch(`${baseUrl}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model,
        messages,
        max_tokens: 350,
        temperature: 0.4
      }),
      signal: controller.signal
    });

    clearTimeout(timeout);

    if (!apiResponse.ok) {
      const errText = await apiResponse.text();
      console.error('Upstream AI API error:', apiResponse.status, errText);
      return res.status(apiResponse.status).json({
        error: 'UPSTREAM_API_ERROR',
        details: errText
      });
    }

    const data = await apiResponse.json();
    const reply = data?.choices?.[0]?.message?.content || "";

    return res.json({ reply, model });
  } catch (error) {
    console.error('Server error in /api/chat:', error.message);
    return res.status(500).json({
      error: 'SERVER_EXCEPTION',
      message: error.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`Licence Saathi AI Server running on port ${PORT}`);
});
