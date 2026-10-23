/**
 * Browser Speech Synthesis Utility with English, Hindi, and Tamil Voice Detection
 */

export function isSpeechSupported() {
  return typeof window !== 'undefined' && 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
}

export function getAvailableVoices() {
  if (!isSpeechSupported()) return [];
  return window.speechSynthesis.getVoices() || [];
}

/**
 * Finds the best matching voice for a given language code ('en', 'hi', 'ta')
 */
export function getVoiceForLanguage(langCode = 'en') {
  if (!isSpeechSupported()) return null;
  const voices = window.speechSynthesis.getVoices();

  const langMap = {
    hi: ['hi-IN', 'hi', 'hindi'],
    ta: ['ta-IN', 'ta', 'tamil'],
    en: ['en-IN', 'en-GB', 'en-US', 'en']
  };

  const targets = langMap[langCode] || langMap.en;

  for (const target of targets) {
    const match = voices.find(v => 
      v.lang.toLowerCase().includes(target.toLowerCase()) || 
      v.name.toLowerCase().includes(target.toLowerCase())
    );
    if (match) return match;
  }

  // Fallback to any voice if language specific not found
  return voices[0] || null;
}

export function speakText(text, langCode = 'en', onEnd = null) {
  if (!isSpeechSupported() || !text) return false;

  try {
    window.speechSynthesis.cancel(); // Stop any ongoing speech

    const utterance = new SpeechSynthesisUtterance(text);
    const voice = getVoiceForLanguage(langCode);
    if (voice) {
      utterance.voice = voice;
      utterance.lang = voice.lang;
    } else {
      utterance.lang = langCode === 'hi' ? 'hi-IN' : langCode === 'ta' ? 'ta-IN' : 'en-IN';
    }

    utterance.rate = 0.95; // Slightly slower for clarity
    utterance.pitch = 1.0;

    if (onEnd) {
      utterance.onend = onEnd;
      utterance.onerror = onEnd;
    }

    window.speechSynthesis.speak(utterance);
    return true;
  } catch (e) {
    console.warn('Speech synthesis error:', e);
    return false;
  }
}

export function stopSpeaking() {
  if (isSpeechSupported()) {
    try {
      window.speechSynthesis.cancel();
    } catch (e) {
      // ignore
    }
  }
}
