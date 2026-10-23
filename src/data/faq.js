/**
 * 27 Official RTO Frequently Asked Questions in English, Hindi, and Tamil
 * Includes keyword-based fallback matching for offline / AI fallback
 */

export const QUICK_REPLIES = [
  { id: 'qr_age', labelKey: 'qr_age_text', query: 'minimum age' },
  { id: 'qr_docs', labelKey: 'qr_docs_text', query: 'documents required' },
  { id: 'qr_fee', labelKey: 'qr_fee_text', query: 'licence fee' },
  { id: 'qr_pass_mark', labelKey: 'qr_pass_mark_text', query: 'pass mark' },
  { id: 'qr_validity', labelKey: 'qr_validity_text', query: 'validity' },
  { id: 'qr_tracks', labelKey: 'qr_tracks_text', query: 'driving test tracks' }
];

export const FAQS = [
  {
    id: 'faq_what_is_ll',
    keywords: ['ll', 'learner', 'learning licence', 'learner licence', 'लर्नर', 'लर्निंग', 'பழகுநர்'],
    en: {
      question: "What is a Learner's Licence (LL)?",
      answer: "A Learner's Licence (LL) is an official temporary permit issued by the RTO that allows you to learn driving on public roads for 6 months while accompanied by an experienced permanent licence holder."
    },
    hi: {
      question: "लर्नर लाइसेंस (LL) क्या होता है?",
      answer: "लर्नर लाइसेंस (LL) आरटीओ द्वारा दिया गया 6 महीने का अस्थाई परमिट है, जिससे आप किसी स्थायी लाइसेंस धारक के साथ सार्वजनिक सड़क पर गाड़ी चलाना सीख सकते हैं।"
    },
    ta: {
      question: "பழகுநர் உரிமம் (LL) என்றால் என்ன?",
      answer: "பழகுநர் உரிமம் (LL) என்பது 6 மாதங்கள் செல்லுபடியாகும் தற்காலிக அனுமதிச் சீட்டாகும். இதன் மூலம் நிரந்தர உரிமம் வைத்திருப்பவரின் துணையுடன் சாலையில் வாகனம் ஓட்டப் பழகலாம்."
    }
  },
  {
    id: 'faq_what_is_dl',
    keywords: ['dl', 'driving licence', 'permanent licence', 'ड्राइविंग लाइसेंस', 'स्थायी लाइसेंस', 'நிரந்தர உரிமம்'],
    en: {
      question: "What is a Permanent Driving Licence (DL)?",
      answer: "A Permanent Driving Licence (DL) is the official government card proving you have passed the practical driving test and are legally qualified to drive your vehicle class anywhere in India."
    },
    hi: {
      question: "स्थायी ड्राइविंग लाइसेंस (DL) क्या होता है?",
      answer: "स्थायी ड्राइविंग लाइसेंस (DL) वह आधिकारिक सरकारी कार्ड है जो प्रमाणित करता है कि आपने ड्राइविंग टेस्ट पास कर लिया है और पूरे भारत में कानूनी रूप से गाड़ी चलाने के योग्य हैं।"
    },
    ta: {
      question: "நிரந்தர ஓட்டுநர் உரிமம் (DL) என்றால் என்ன?",
      answer: "நிரந்தர ஓட்டுநர் உரிமம் என்பது நீங்கள் செய்முறைத் தேர்வில் தேர்ச்சி பெற்று, இந்தியாவில் எங்கும் வாகனம் ஓட்ட அரசு வழங்கிய அதிகாரப்பூர்வ அட்டையாகும்."
    }
  },
  {
    id: 'faq_what_is_rto',
    keywords: ['rto', 'regional transport office', 'parivahan', 'आरटीओ', 'ஆர்டிஓ'],
    en: {
      question: "What does RTO mean?",
      answer: "RTO stands for Regional Transport Office. It is the state government department responsible for vehicle registration, driver testing, and issuing learner and driving licences."
    },
    hi: {
      question: "आरटीओ (RTO) का क्या मतलब है?",
      answer: "RTO का पूरा नाम रीजनल ट्रांसपोर्ट ऑफिस (क्षेत्रीय परिवहन कार्यालय) है। यह वह सरकारी कार्यालय है जो वाहनों का पंजीकरण, ड्राइविंग टेस्ट और लाइसेंस जारी करने का काम करता है।"
    },
    ta: {
      question: "RTO என்றால் என்ன?",
      answer: "RTO என்பது வட்டாரப் போக்குவரத்து அலுவலகம் (Regional Transport Office). இது வாகனப் பதிவு மற்றும் ஓட்டுநர் உரிமங்களை வழங்கும் அரசு அலுவலகமாகும்."
    }
  },
  {
    id: 'faq_what_is_form_1a',
    keywords: ['form 1a', 'medical certificate', 'doctor certificate', 'फॉर्म 1a', 'मेडिकल', 'படிவம் 1a'],
    en: {
      question: "What is Form 1A and who needs it?",
      answer: "Form 1A is a medical fitness certificate signed by an authorized MBBS doctor. It is required if you are 40 years of age or older, or if applying for a commercial transport licence. Applicants under 40 for private vehicles only fill Form 1 (self-declaration)."
    },
    hi: {
      question: "फॉर्म 1A क्या है और इसकी जरूरत किसे होती है?",
      answer: "फॉर्म 1A एमबीबीएस डॉक्टर द्वारा प्रमाणित मेडिकल फिटनेस प्रमाणपत्र है। यदि आपकी आयु 40 वर्ष या उससे अधिक है, या आप कमर्शियल वाहन का लाइसेंस बनवा रहे हैं, तभी यह आवश्यक है। 40 से कम उम्र के निजी वाहन आवेदकों को केवल सेल्फ-डिक्लेरेशन (फॉर्म 1) देना होता है।"
    },
    ta: {
      question: "படிவம் 1A என்றால் என்ன, யாருக்கு தேவை?",
      answer: "படிவம் 1A என்பது மருத்துவரால் கையொப்பமிடப்பட்ட மருத்துவ சான்றிதழ். 40 வயது அல்லது அதற்கு மேற்பட்டவர்கள் மற்றும் வணிக வாகன உரிமம் கோருபவர்களுக்கு இது கட்டாயம் தேவை."
    }
  },
  {
    id: 'faq_min_age_bike',
    keywords: ['age', 'bike with gear', 'mcwg', 'minimum age', 'उम्र', 'आयु', 'வயது'],
    en: {
      question: "What is the minimum age for a motorcycle with gear or a car?",
      answer: "You must be at least 18 years old to apply for a motorcycle with gear (MCWG) or a personal car (LMV)."
    },
    hi: {
      question: "गियर वाली बाइक या कार के लिए न्यूनतम उम्र क्या है?",
      answer: "गियर वाली मोटरसाइकिल (MCWG) या कार (LMV) के लिए आपकी उम्र कम से कम 18 वर्ष पूरी होनी चाहिए।"
    },
    ta: {
      question: "கியர் பைக் அல்லது காருக்கு குறைந்தபட்ச வயது என்ன?",
      answer: "கியர் உள்ள பைக் (MCWG) அல்லது கார் (LMV) ஓட்டுநர் உரிமத்திற்கு குறைந்தபட்சம் 18 வயது முடிந்திருக்க வேண்டும்."
    }
  },
  {
    id: 'faq_min_age_scooter',
    keywords: ['scooter', 'gearless', '50cc', '16 years', 'स्कूटर', 'बिना गियर', 'கியர் இல்லாத'],
    en: {
      question: "Can a 16-year-old apply for a driving licence?",
      answer: "Yes, an applicant who is 16 or 17 can apply for a gearless two-wheeler up to 50cc (MCWOG), provided their parent or guardian provides written signed consent."
    },
    hi: {
      question: "क्या 16 साल का युवा ड्राइविंग लाइसेंस के लिए आवेदन कर सकता है?",
      answer: "हाँ, 16 से 18 वर्ष के युवा 50cc तक के बिना गियर वाले दोपहिया वाहन के लिए आवेदन कर सकते हैं, बशर्ते माता-पिता या अभिभावक का लिखित सहमति पत्र संलग्न हो।"
    },
    ta: {
      question: "16 வயதில் உரிமத்திற்கு விண்ணப்பிக்க முடியுமா?",
      answer: "ஆம், 16 முதல் 18 வயதுடையவர்கள் பெற்றோரின் எழுத்துப்பூர்வ ஒப்புதலுடன் 50cc வரையிலான கியர் இல்லாத இருசக்கர வாகனத்திற்கு விண்ணப்பிக்கலாம்."
    }
  },
  {
    id: 'faq_documents_needed',
    keywords: ['documents', 'proof', 'aadhaar', 'checklist', 'दस्तावेज', 'कागजात', 'சான்றிதழ்கள்'],
    en: {
      question: "What documents are required for a Learner's Licence?",
      answer: "You need: 1. Proof of Age (e.g. 10th marksheet, birth certificate, passport, or Aadhaar), 2. Proof of Address (e.g. Aadhaar, voter ID, electricity bill), 3. Passport size photo, 4. Specimen signature, and 5. Medical Form 1 (self-declaration)."
    },
    hi: {
      question: "लर्नर लाइसेंस के लिए कौन-कौन से दस्तावेज चाहिए?",
      answer: "आपको चाहिए: 1. आयु प्रमाण (10वीं की मार्कशीट, जन्म प्रमाण पत्र, आधार), 2. पते का प्रमाण (आधार कार्ड, वोटर कार्ड, बिजली बिल), 3. पासपोर्ट फोटो, 4. सफेद कागज पर हस्ताक्षर, और 5. मेडिकल फॉर्म 1 (स्व-घोषणा)।"
    },
    ta: {
      question: "பழகுநர் உரிமத்திற்கு தேவையான ஆவணங்கள் என்ன?",
      answer: "1. வயதுச் சான்று (10ம் வகுப்பு மதிப்பெண் சான்றிதழ், பிறப்புச் சான்று), 2. முகவரிச் சான்று (ஆதார், வாக்காளர் அட்டை), 3. பாஸ்போர்ட் அளவு புகைப்படம், 4. கையொப்பம் மற்றும் 5. உடற்தகுதி சுய அறிவிப்புப் படிவம்."
    }
  },
  {
    id: 'faq_online_from_home',
    keywords: ['online', 'from home', 'contactless', 'घर बैठे', 'வீட்டில் இருந்து'],
    en: {
      question: "Can I take the Learner's Licence test online from home?",
      answer: "In many Indian states with Aadhaar-authenticated 'Contactless Services', you can take the computer test from home using a mobile or laptop with a camera. In other states, you visit the RTO office for the computer test."
    },
    hi: {
      question: "क्या लर्नर टेस्ट घर बैठे ऑनलाइन दिया जा सकता है?",
      answer: "कई राज्यों में आधार प्रमाणीकरण के साथ 'कॉन्टैक्टलेस सेवा' के जरिए आप मोबाइल या कैमरे वाले लैपटॉप से घर बैठे टेस्ट दे सकते हैं। कुछ राज्यों में टेस्ट के लिए आरटीओ जाना होता है।"
    },
    ta: {
      question: "பழகுநர் தேர்வை வீட்டிலிருந்தே எழுத முடியுமா?",
      answer: "ஆதார் அடிப்படையிலான சேவை உள்ள மாநிலங்களில் மடிக்கணினி அல்லது கேமரா உள்ள மொபைல் மூலம் வீட்டிலிருந்தே எழுதலாம். மற்ற மாநிலங்களில் ஆர்.டி.ஓ அலுவலகம் செல்ல வேண்டும்."
    }
  },
  {
    id: 'faq_ll_fee',
    keywords: ['fee', 'cost', 'price', 'charges', 'फीस', 'खर्चा', 'शुल्क', 'கட்டணம்'],
    en: {
      question: "What is the fee for a Learner's Licence?",
      answer: "Under sample central rules: ₹150 for the learner licence per vehicle class, plus ₹50 for the computer test. For one vehicle (like MCWG), the total fee is approximately ₹200. Check with your state RTO for exact state rates."
    },
    hi: {
      question: "लर्नर लाइसेंस की सरकारी फीस कितनी है?",
      answer: "सैंपल नियमों के अनुसार: ₹150 प्रति वाहन वर्ग लाइसेंस शुल्क + ₹50 कंप्यूटर टेस्ट शुल्क। यानी एक वाहन (जैसे बाइक) के लिए लगभग ₹200। सटीक शुल्क अपने राज्य के आरटीओ से जांचें।"
    },
    ta: {
      question: "பழகுநர் உரிமத்திற்கான கட்டணம் எவ்வளவு?",
      answer: "மாதிரி விதிகளின்படி: ஒரு வாகனப் பிரிவுக்கு உரிமக் கட்டணம் ₹150 + தேர்வுக் கட்டணம் ₹50 = மொத்தம் சுமார் ₹200. உங்கள் மாநில RTO விதிகளையும் சரிபார்க்கவும்."
    }
  },
  {
    id: 'faq_ll_validity',
    keywords: ['validity', 'expiry', 'months', 'वैधता', 'कितने दिन', 'செல்லுபடியாகும்'],
    en: {
      question: "How long is a Learner's Licence valid?",
      answer: "A Learner's Licence is valid for exactly 6 months (180 days) from the date of issuance across all states in India."
    },
    hi: {
      question: "लर्नर लाइसेंस कितने समय तक वैध रहता है?",
      answer: "लर्नर लाइसेंस जारी होने की तारीख से ठीक 6 महीने (180 दिन) तक पूरे भारत में मान्य होता है।"
    },
    ta: {
      question: "பழகுநர் உரிமம் எவ்வளவு காலம் செல்லும்?",
      answer: "பழகுநர் உரிமம் வழங்கப்பட்ட தேதியிலிருந்து 6 மாதங்கள் (180 நாட்கள்) வரை மட்டுமே செல்லும்."
    }
  },
  {
    id: 'faq_when_apply_dl',
    keywords: ['when apply', '30 days', 'permanent dl', 'स्थायी कब', 'எப்போது விண்ணப்பிக்கலாம்'],
    en: {
      question: "When can I apply for a permanent driving licence after getting LL?",
      answer: "You can apply for the permanent licence test after completing a mandatory waiting period of 30 days from the date your Learner's Licence was issued, and before it expires at 6 months."
    },
    hi: {
      question: "लर्नर लाइसेंस मिलने के बाद पक्का (स्थायी) लाइसेंस कब बनवा सकते हैं?",
      answer: "लर्नर लाइसेंस जारी होने के कम से कम 30 दिन पूरे होने के बाद और 6 महीने खत्म होने से पहले आप पक्के लाइसेंस के ड्राइविंग टेस्ट के लिए आवेदन कर सकते हैं।"
    },
    ta: {
      question: "பழகுநர் உரிமம் பெற்று எத்தனை நாட்களுக்குப் பின் நிரந்தர உரிமம் பெறலாம்?",
      answer: "பழகுநர் உரிமம் பெற்று 30 நாட்கள் கழித்து, 6 மாத காலத்திற்குள் எப்போது வேண்டுமானாலும் நிரந்தர உரிமத் தேர்விற்கு விண்ணப்பிக்கலாம்."
    }
  },
  {
    id: 'faq_ll_expired',
    keywords: ['expired', 'expire', 'renew', 'तारीख निकल गई', 'காலாவதி'],
    en: {
      question: "What happens if my Learner's Licence expires before I get a permanent licence?",
      answer: "If your LL expires after 6 months, you cannot take the permanent driving test. You must re-apply for a fresh Learner's Licence and pass the computer test again."
    },
    hi: {
      question: "यदि 6 महीने में लर्नर लाइसेंस की अवधि समाप्त हो जाए तो क्या होगा?",
      answer: "यदि 6 महीने बीत जाएं तो पुराना LL बेकार हो जाता है। आपको नए सिरे से लर्नर लाइसेंस का आवेदन करके कंप्यूटर टेस्ट दोबारा देना होगा।"
    },
    ta: {
      question: "6 மாதத்திற்குள் நிரந்தர உரிமம் எடுக்காவிட்டால் என்னவாகும்?",
      answer: "பழகுநர் உரிமத்தின் 6 மாத காலம் முடிந்துவிட்டால், நீங்கள் மீண்டும் புதிதாக பழகுநர் உரிமத்திற்கு விண்ணப்பித்து தேர்வு எழுத வேண்டும்."
    }
  },
  {
    id: 'faq_test_questions_count',
    keywords: ['questions', 'how many questions', 'कितने प्रश्न', 'வினாக்கள்'],
    en: {
      question: "How many questions are asked in the online learner's test?",
      answer: "In the sample RTO exam format, there are 15 multiple-choice questions on road safety, signs, and traffic rules. You have 30 seconds to answer each question."
    },
    hi: {
      question: "लर्नर टेस्ट में कितने सवाल पूछे जाते हैं?",
      answer: "सैंपल आरटीओ परीक्षा में 15 बहुविकल्पीय प्रश्न पूछे जाते हैं। प्रत्येक प्रश्न का उत्तर देने के लिए 30 सेकंड का समय मिलता है।"
    },
    ta: {
      question: "பழகுநர் தேர்வில் எத்தனை கேள்விகள் கேட்கப்படும்?",
      answer: "மாதிரி தேர்வில் 15 கொள்குறி வினாக்கள் கேட்கப்படும். ஒவ்வொரு கேள்விக்கும் 30 வினாடிகள் அவகாசம் அளிக்கப்படும்."
    }
  },
  {
    id: 'faq_pass_mark',
    keywords: ['pass mark', 'passing marks', 'score', 'पास मार्क', 'தேர்ச்சி மதிப்பெண்'],
    en: {
      question: "What is the pass mark for the learner's test?",
      answer: "The pass mark is 9 correct answers out of 15 questions (60%). As soon as you reach 9 correct answers, you pass."
    },
    hi: {
      question: "लर्नर टेस्ट में पास होने के लिए कितने नंबर चाहिए?",
      answer: "पास होने के लिए 15 में से कम से कम 9 सही उत्तर (60%) देने होते हैं। 9 सही होते ही आप पास हो जाते हैं।"
    },
    ta: {
      question: "பழகுநர் தேர்வில் தேர்ச்சி பெற எத்தனை மதிப்பெண்கள் தேவை?",
      answer: "15 வினாக்களில் குறைந்தபட்சம் 9 கேள்விகளுக்கு (60%) சரியான பதிலளிக்க வேண்டும்."
    }
  },
  {
    id: 'faq_fail_test',
    keywords: ['fail', 'failed', 'retest', 'फेल', 'தோல்வி'],
    en: {
      question: "What happens if I fail the learner's test?",
      answer: "Don't worry. You can re-book the learner test after paying a nominal re-test fee (approx ₹50). You can practice with Licence Saathi mock tests and try again."
    },
    hi: {
      question: "यदि कोई लर्नर टेस्ट में फेल हो जाए तो क्या होगा?",
      answer: "घबराने की बात नहीं है। आप पुनः टेस्ट शुल्क (लगभग ₹50) जमा करके दोबारा टेस्ट स्लॉट बुक कर सकते हैं। लाइसेंस साथी पर मॉक टेस्ट से अभ्यास करें।"
    },
    ta: {
      question: "பழகுநர் தேர்வில் தோல்வியடைந்தால் என்ன செய்வது?",
      answer: "கவலைப்பட வேண்டாம். மறுதேர்வுக் கட்டணம் (சுமார் ₹50) செலுத்தி மீண்டும் தேர்வு எழுதலாம்."
    }
  },
  {
    id: 'faq_broker_agent',
    keywords: ['broker', 'agent', 'dalal', 'दलाल', 'एजेंट', 'தரகர்'],
    en: {
      question: "Do I need a broker or agent to get a licence?",
      answer: "No! The entire Parivahan service is digital and transparent. By using Licence Saathi to understand steps, documents, and rules, you can easily apply directly on parivahan.gov.in and save agent commissions."
    },
    hi: {
      question: "क्या लाइसेंस बनवाने के लिए किसी दलाल या एजेंट की जरूरत होती है?",
      answer: "बिल्कुल नहीं! परिवहन विभाग की पूरी प्रक्रिया ऑनलाइन और पारदर्शी है। लाइसेंस साथी की मदद से आप स्वयं सीधे parivahan.gov.in पर आवेदन करके दलालों के अतिरिक्त खर्च से बच सकते हैं।"
    },
    ta: {
      question: "உரிமம் பெற புரோக்கர் அல்லது ஏஜென்ட் அவசியமா?",
      answer: "தேவையே இல்லை! அரசு இணையதளம் மூலம் நீங்களே சுலபமாக விண்ணப்பிக்கலாம். இடைத்தரகர்களுக்கு பணம் கொடுத்து ஏமாற வேண்டாம்."
    }
  },
  {
    id: 'faq_driving_test_vehicle',
    keywords: ['vehicle', 'test vehicle', 'bike for test', 'गाड़ी', 'வாகனம்'],
    en: {
      question: "What vehicle should I bring for the permanent driving test?",
      answer: "Bring a roadworthy vehicle matching the applied class (e.g., geared motorcycle for MCWG). Ensure it has a valid Registration Certificate (RC), active Insurance, and a Pollution Under Control (PUC) certificate."
    },
    hi: {
      question: "ड्राइविंग टेस्ट के दिन कौन-सी गाड़ी लेकर जानी होती है?",
      answer: "जिस श्रेणी (जैसे गियर वाली बाइक) के लिए आवेदन किया है, वही चालू हालत की गाड़ी ले जाएं। गाड़ी की वैध आरसी, बीमा (Insurance) और प्रदूषण प्रमाण पत्र (PUC) साथ होना आवश्यक है।"
    },
    ta: {
      question: "ஓட்டுநர் செய்முறைத் தேர்விற்கு எந்த வாகனத்தை கொண்டு செல்ல வேண்டும்?",
      answer: "விண்ணப்பித்த பிரிவிற்கான வாகனத்தை நல்ல நிலையில் எடுத்துச் செல்ல வேண்டும். அத்துடன் ஆர்.சி புக், இன்சூரன்ஸ், புகை சான்றிதழ் அவசியம் வைத்திருக்க வேண்டும்."
    }
  },
  {
    id: 'faq_driving_test_tracks',
    keywords: ['track', 'figure 8', 'h track', 'driving test', 'ट्रैक', 'தேர்வு தளம்'],
    en: {
      question: "What tracks are used in the practical driving test?",
      answer: "For two-wheelers, applicants usually navigate an automated Figure of '8' track without touching the ground or hitting cones. For cars, an 'H' track, parallel parking, and uphill stop-and-start ramp tests are common."
    },
    hi: {
      question: "ड्राइविंग टेस्ट में कौन-से ट्रैक पर गाड़ी चलवाई जाती है?",
      answer: "दोपहिया वाहन के लिए आमतौर पर अंग्रेजी के '8' के आकार वाले ट्रैक पर बिना पैर जमीन पर टिकाए चलाना होता है। कार के लिए 'H' ट्रैक, समानांतर पार्किंग और चढ़ाई पर रोककर उठाने का टेस्ट होता है।"
    },
    ta: {
      question: "செய்முறைத் தேர்வில் எந்த வடிவப் பாதையில் வாகனம் ஓட்ட வேண்டும்?",
      answer: "இருசக்கர வாகனத்திற்கு '8' வடிவப் பாதையிலும், காருக்கு 'H' வடிவப் பாதை மற்றும் ஏறுமுகப் பாதையிலும் சோதனை செய்யப்படும்."
    }
  },
  {
    id: 'faq_drive_alone_ll',
    keywords: ['drive alone', 'solo', 'अकेले चलाना', 'தனியாக ஓட்டுவது'],
    en: {
      question: "Can I drive alone on the road with a Learner's Licence?",
      answer: "No. With an LL, you cannot drive alone. You must be accompanied by someone who holds a valid permanent driving licence sitting next to you (or as pillion on a bike), and the vehicle must display red 'L' plates."
    },
    hi: {
      question: "क्या लर्नर लाइसेंस होने पर अकेले गाड़ी चला सकते हैं?",
      answer: "नहीं। लर्नर लाइसेंस पर अकेले चलाना मना है। आपके साथ एक स्थायी ड्राइविंग लाइसेंस धारक का होना अनिवार्य है और गाड़ी पर आगे-पीछे लाल 'L' बोर्ड लगा होना चाहिए।"
    },
    ta: {
      question: "பழகுநர் உரிமத்துடன் சாலையில் தனியாக செல்லலாமா?",
      answer: "கூடாது. நிரந்தர ஓட்டுநர் உரிமம் வைத்துள்ள ஒருவருடன் மட்டுமே செல்ல வேண்டும் மற்றும் வாகனத்தில் 'L' போர்டு பொருத்தப்பட்டிருக்க வேண்டும்."
    }
  },
  {
    id: 'faq_l_board',
    keywords: ['l board', 'l plate', 'लाल बोर्ड', 'L பலகை'],
    en: {
      question: "What is an 'L' board and why is it necessary?",
      answer: "An 'L' board is a white square displaying a bold red letter 'L' (at least 9cm tall). It must be displayed on the front and back of the vehicle to alert other motorists that a learner is driving."
    },
    hi: {
      question: "'L' बोर्ड क्या होता है और इसे लगाना क्यों जरूरी है?",
      answer: "'L' बोर्ड सफेद पृष्ठभूमि पर लाल रंग का 'L' अक्षर होता है। यह गाड़ी के आगे और पीछे इसलिए लगाया जाता है ताकि अन्य वाहन चालक सतर्क रहें कि गाड़ी कोई शिक्षार्थी चला रहा है।"
    },
    ta: {
      question: "'L' பலகை என்றால் என்ன, ஏன் பொருத்த வேண்டும்?",
      answer: "வெள்ளை பின்னணியில் சிவப்பு நிற 'L' எழுத்து கொண்ட பலகை. பிற வாகன ஓட்டிகளுக்கு எச்சரிக்கை செய்வதற்காக வாகனத்தின் முன்பும் பின்பும் பொருத்தப்பட வேண்டும்."
    }
  },
  {
    id: 'faq_aadhaar_mandatory',
    keywords: ['aadhaar', 'uidai', 'आधार', 'ஆதார்'],
    en: {
      question: "Is an Aadhaar card mandatory for applying for a driving licence?",
      answer: "Aadhaar is not strictly compulsory, but Aadhaar authentication enables faceless, contactless online testing from home. Without Aadhaar, you can use other valid IDs (like voter ID or passport) and visit the RTO office directly."
    },
    hi: {
      question: "क्या ड्राइविंग लाइसेंस के लिए आधार कार्ड अनिवार्य है?",
      answer: "आधार कार्ड बिल्कुल अनिवार्य नहीं है। यदि आपके पास आधार है तो आप घर बैठे ऑनलाइन टेस्ट दे सकते हैं। बिना आधार के आप वोटर आईडी या पासपोर्ट लेकर सीधे आरटीओ जाकर प्रक्रिया पूरी कर सकते हैं।"
    },
    ta: {
      question: "ஓட்டுநர் உரிமத்திற்கு ஆதார் அட்டை கட்டாயமா?",
      answer: "ஆதார் கட்டாயமில்லை; ஆனால் ஆதார் இருந்தால் வீட்டிலிருந்தே தேர்வு எழுதலாம். இல்லையெனில் பிற சான்றிதழ்களுடன் ஆர்.டி.ஓ அலுவலகம் செல்ல வேண்டும்."
    }
  },
  {
    id: 'faq_track_delivery',
    keywords: ['speed post', 'delivery', 'dispatch', 'स्पीड पोस्ट', 'அஞ்சல்'],
    en: {
      question: "How is the permanent driving licence delivered?",
      answer: "After passing the driving test, your smart card licence is printed and dispatched to your registered address via India Post Speed Post. You can track the consignment number online."
    },
    hi: {
      question: "स्थायी ड्राइविंग लाइसेंस घर कैसे पहुंचता है?",
      answer: "टेस्ट पास करने के बाद स्मार्ट कार्ड लाइसेंस प्रिंट होकर भारतीय डाक की स्पीड पोस्ट सेवा द्वारा आपके पंजीकृत पते पर भेजा जाता है, जिसे ऑनलाइन ट्रैक किया जा सकता है।"
    },
    ta: {
      question: "நிரந்தர ஓட்டுநர் உரிம அட்டை எவ்வாறு கிடைக்கும்?",
      answer: "தேர்வில் வென்ற பிறகு அஞ்சல் துறையின் ஸ்பீட் போஸ்ட் (Speed Post) மூலம் பதிவு செய்யப்பட்ட முகவரிக்கு அனுப்பி வைக்கப்படும்."
    }
  },
  {
    id: 'faq_commercial_direct',
    keywords: ['commercial', 'truck', 'taxi', 'कमर्शियल', 'வணிக உரிமம்'],
    en: {
      question: "Can I apply for a commercial transport licence directly?",
      answer: "No. You must be at least 20 years old and typically hold a valid Light Motor Vehicle (LMV) driving licence for at least one year before applying for a commercial transport vehicle endorsement."
    },
    hi: {
      question: "क्या पहली बार में ही कमर्शियल (व्यावसायिक) लाइसेंस बन सकता है?",
      answer: "नहीं। कमर्शियल लाइसेंस के लिए न्यूनतम आयु 20 वर्ष होनी चाहिए और पहले से कम से कम 1 वर्ष पुराना एलएमवी (कार) का स्थायी लाइसेंस होना आवश्यक होता है।"
    },
    ta: {
      question: "நேரடியாக வணிக வாகன உரிமம் (Commercial DL) பெற முடியுமா?",
      answer: "முடியாது. குறைந்தது 20 வயது நிரம்பியிருக்க வேண்டும் மற்றும் ஒரு வருடமாவது கார் (LMV) உரிமம் வைத்திருக்க வேண்டும்."
    }
  },
  {
    id: 'faq_dress_code',
    keywords: ['dress', 'shoes', 'clothes', 'कपड़े', 'जूते', 'ஆடை'],
    en: {
      question: "What should I wear on the practical driving test day?",
      answer: "Wear comfortable formal or casual clothing and enclosed sturdy shoes or sports sneakers. Slippers, sandals, or high heels are strictly discouraged as they can slip on pedals."
    },
    hi: {
      question: "ड्राइविंग टेस्ट के दिन कैसे कपड़े और जूते पहनने चाहिए?",
      answer: "पक्के जूते (स्नीकर्स या स्पोर्ट्स शूज) पहनकर जाएं। चप्पल या सैंडल पहनकर गाड़ी चलाने पर टेस्ट में मना किया जा सकता है क्योंकि चप्पल पैडल से फिसल सकती है।"
    },
    ta: {
      question: "செய்முறைத் தேர்வு அன்று என்ன உடை அணிய வேண்டும்?",
      answer: "முறையான ஆடை மற்றும் கட்டாயம் ஷூ (Shoes) அணிந்து வர வேண்டும். செருப்பு அணிந்து வந்தால் அனுமதிக்கப்பட மாட்டாது."
    }
  },
  {
    id: 'faq_other_state_aadhaar',
    keywords: ['address', 'other state', 'rent', 'किराया', 'दूसरा राज्य', 'வேறு மாநிலம்'],
    en: {
      question: "Can I apply for a driving licence if my permanent address on Aadhaar is in another state?",
      answer: "Yes. You can apply at your current city's RTO by providing a registered rent agreement or utility bill as proof of present residence."
    },
    hi: {
      question: "यदि मेरे आधार कार्ड पर दूसरे राज्य का पता है, तो क्या मैं यहां लाइसेंस बनवा सकता हूं?",
      answer: "हाँ। आप वर्तमान निवास के पते के लिए पंजीकृत रेंट एग्रीमेंट या बिजली/गैस बिल देकर अपने मौजूदा शहर के आरटीओ में आवेदन कर सकते हैं।"
    },
    ta: {
      question: "ஆதாரில் வேறு மாநில முகவரி இருந்தால் இங்கு விண்ணப்பிக்க முடியுமா?",
      answer: "ஆம். தற்போதைய முகவரிக்கான வாடகை ஒப்பந்தம் அல்லது மின் கட்டண ரசீதை இணைத்து உள்ளூர் RTO-வில் விண்ணப்பிக்கலாம்."
    }
  }
];

/**
 * Robust Keyword Matching Fallback
 * Returns matching FAQ answer or null
 */
export function matchFaq(query, language = 'en') {
  if (!query || typeof query !== 'string') return null;
  const qLower = query.toLowerCase().trim();

  // Score each FAQ based on matched keywords
  let bestFaq = null;
  let maxScore = 0;

  for (const faq of FAQS) {
    let score = 0;
    // Check keywords
    for (const kw of faq.keywords) {
      if (qLower.includes(kw.toLowerCase())) {
        score += 3;
      }
    }
    // Check question text in chosen language
    const langData = faq[language] || faq.en;
    if (langData) {
      const qWords = langData.question.toLowerCase().split(/\s+/);
      for (const w of qWords) {
        if (w.length > 3 && qLower.includes(w)) {
          score += 1;
        }
      }
    }

    if (score > maxScore) {
      maxScore = score;
      bestFaq = faq;
    }
  }

  // Minimum threshold to prevent false positives
  if (maxScore >= 2 && bestFaq) {
    const langData = bestFaq[language] || bestFaq.en;
    return {
      faqId: bestFaq.id,
      question: langData.question,
      answer: langData.answer,
      isFallback: true
    };
  }

  return null;
}
