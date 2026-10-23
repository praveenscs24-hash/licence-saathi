/**
 * 42 Standard Official RTO Question Bank in English, Hindi, and Tamil
 * Categorized by topics: Signs, Traffic Rules, Safety, Emergencies, Documentation
 */

export const QUESTIONS = [
  // 1. Pedestrian Crossing
  {
    id: 1,
    topic: 'safety',
    topicKey: 'topic_pedestrian',
    signId: 'sign_pedestrian_crossing',
    en: {
      question: "Near a pedestrian crossing, when pedestrians are waiting to cross the road, what should you do?",
      options: [
        "Sound horn and proceed without stopping",
        "Slow down, sound horn and pass through",
        "Stop the vehicle and wait until pedestrians cross the road",
        "Speed up to pass before they step on the road"
      ],
      explanation: "You must always stop before the pedestrian crossing and give way to waiting pedestrians."
    },
    hi: {
      question: "पैदल पार-पथ (जेब्रा क्रॉसिंग) के पास जब लोग सड़क पार करने की प्रतीक्षा कर रहे हों, तो आपको क्या करना चाहिए?",
      options: [
        "हॉर्न बजाएं और बिना रुके आगे बढ़ें",
        "गति धीमी करें, हॉर्न बजाएं और निकल जाएं",
        "वाहन रोकें और पैदल यात्रियों के पार होने तक प्रतीक्षा करें",
        "पैदल यात्रियों के कदम रखने से पहले तेजी से निकल जाएं"
      ],
      explanation: "जेब्रा क्रॉसिंग पर पैदल यात्रियों को हमेशा पहला रास्ता (राइट ऑफ वे) देना अनिवार्य है।"
    },
    ta: {
      question: "பாதசாரிகள் கடக்கும் கோட்டிற்கு (ஜீப்ரா கிராசிங்) அருகில் பாதசாரிகள் காத்திருக்கும்போது என்ன செய்ய வேண்டும்?",
      options: [
        "ஹார்ன் அடித்து நிற்காமல் செல்ல வேண்டும்",
        "வேகத்தைக் குறைத்து, ஹார்ன் அடித்து கடக்க வேண்டும்",
        "வாகனத்தை நிறுத்தி, பாதசாரிகள் கடக்கும் வரை காத்திருக்க வேண்டும்",
        "அவர்கள் கடக்கும் முன் வேகமாக செல்ல வேண்டும்"
      ],
      explanation: "பாதசாரிகள் கடக்கும் பகுதியில் எப்போதும் அவர்களுக்கு முன்னுரிமை கொடுத்து வாகனத்தை நிறுத்த வேண்டும்."
    },
    correctAnswer: 2
  },

  // 2. Stop Sign
  {
    id: 2,
    topic: 'signs',
    topicKey: 'topic_signs',
    signId: 'sign_stop',
    en: {
      question: "What does an octagonal red sign with the word 'STOP' mean?",
      options: [
        "Slow down if other vehicles are coming",
        "Stop completely, check both sides, and proceed only when clear",
        "Stop only if a police officer is present",
        "Parking is permitted here"
      ],
      explanation: "A STOP sign demands a complete vehicle halt before the line. Proceed only when the junction is clear."
    },
    hi: {
      question: "अष्टकोणीय लाल 'STOP' (रुकिए) संकेत का क्या अर्थ है?",
      options: [
        "यदि अन्य गाड़ियां आ रही हों तो गति धीमी करें",
        "वाहन को पूरी तरह रोकें, दोनों तरफ देखें और सुरक्षित होने पर ही आगे बढ़ें",
        "केवल तभी रुकें जब पुलिसकर्मी मौजूद हो",
        "यहाँ वाहन पार्क करने की अनुमति है"
      ],
      explanation: "STOP संकेत पर स्टॉप लाइन से पहले पूरी तरह रुकना अनिवार्य है। दोनों तरफ सुरक्षित देखकर ही आगे बढ़ें।"
    },
    ta: {
      question: "எண்கோண வடிவ சிவப்பு 'STOP' (நிறுத்து) குறியீட்டின் பொருள் என்ன?",
      options: [
        "பிற வாகனங்கள் வந்தால் மட்டும் மெதுவாக செல்லவும்",
        "வாகனத்தை முழுமையாக நிறுத்தி, இருபுறமும் பார்த்து பாதுகாப்பாக செல்லவும்",
        "போக்குவரத்து காவலர் இருந்தால் மட்டுமே நிற்க வேண்டும்",
        "இங்கு வாகனம் நிறுத்தலாம்"
      ],
      explanation: "'STOP' குறியீட்டில் வாகனத்தை முழுமையாக நிறுத்த வேண்டும். பாதை தெளிவாக உள்ளதா என உறுதிசெய்த பின்னரே செல்ல வேண்டும்."
    },
    correctAnswer: 1
  },

  // 3. Keep Left
  {
    id: 3,
    topic: 'rules',
    topicKey: 'topic_road_rules',
    en: {
      question: "On Indian roads, on which side of the road should a driver normally drive?",
      options: [
        "On the extreme right side",
        "On the left side of the road",
        "In the exact centre of the road",
        "On whichever side has fewer potholes"
      ],
      explanation: "In India, traffic moves on the left. The driver must always keep to the left side of the road."
    },
    hi: {
      question: "भारतीय सड़कों पर चालक को सामान्यतः सड़क के किस तरफ चलना चाहिए?",
      options: [
        "सड़क के बिल्कुल दाईं तरफ",
        "सड़क के बाईं तरफ",
        "सड़क के बिल्कुल बीचों-बीच",
        "जिस तरफ गड्ढे कम हों उस तरफ"
      ],
      explanation: "भारत में यातायात बाईं ओर चलता है। चालक को हमेशा सड़क के बाईं ओर वाहन चलाना चाहिए।"
    },
    ta: {
      question: "இந்திய சாலைகளில் ஓட்டுநர் பொதுவாக சாலையின் எந்தப் பக்கத்தில் செல்ல வேண்டும்?",
      options: [
        "சாலையின் வலது புறம்",
        "சாலையின் இடது புறம்",
        "சாலையின் நடுப்பகுதி",
        "குழிகள் இல்லாத பக்கம்"
      ],
      explanation: "இந்தியாவில் வாகனங்கள் சாலையின் இடது புறமாகவே செல்ல வேண்டும்."
    },
    correctAnswer: 1
  },

  // 4. Ambulance Priority
  {
    id: 4,
    topic: 'emergencies',
    topicKey: 'topic_emergency',
    en: {
      question: "When an ambulance or fire service vehicle approaches with sirens or flashing lights, what must you do?",
      options: [
        "Speed up to stay ahead of the emergency vehicle",
        "Immediately draw to the side of the road and provide a clear passage",
        "Apply emergency brakes in the middle of the road",
        "Sound horn continuously to alert others"
      ],
      explanation: "Every driver must immediately steer to the side of the road and allow emergency vehicles unobstructed passage."
    },
    hi: {
      question: "जब कोई एम्बुलेंस या दमकल गाड़ी सायरन या बत्ती के साथ पीछे से आ रही हो, तो आपको क्या करना चाहिए?",
      options: [
        "आपातकालीन वाहन से आगे रहने के लिए गति बढ़ाएं",
        "तुरंत सड़क के किनारे वाहन दबाकर रास्ता साफ कर दें",
        "सड़क के बीच में ही अचानक ब्रेक लगा दें",
        "दूसरों को सचेत करने के लिए लगातार हॉर्न बजाएं"
      ],
      explanation: "एम्बुलेंस और अग्निशमन वाहनों को तुरंत रास्ता देना कानूनी और मानवीय दायित्व है।"
    },
    ta: {
      question: "ஆம்புலன்ஸ் அல்லது தீயணைப்பு வாகனம் சைரன் ஒலியுடன் வரும்போது என்ன செய்ய வேண்டும்?",
      options: [
        "அந்த வாகனத்தை விட வேகமாக முன்னேறி செல்ல வேண்டும்",
        "உடனடியாக சாலையின் ஓரமாக ஒதுங்கி தடையற்ற வழிவிட வேண்டும்",
        "சாலையின் நடுவிலேயே பிரேக் போட வேண்டும்",
        "தொடர்ந்து ஹார்ன் அடிக்க வேண்டும்"
      ],
      explanation: "அவசரக்கால வாகனங்களுக்கு உடனடியாக சாலையோரமாக ஒதுங்கி வழிவிடுவது சட்டபூர்வ கடமையாகும்."
    },
    correctAnswer: 1
  },

  // 5. Overtaking
  {
    id: 5,
    topic: 'rules',
    topicKey: 'topic_road_rules',
    en: {
      question: "Overtaking a vehicle in front is generally permitted only from which side?",
      options: [
        "From the left side",
        "From the right side",
        "From any side having enough space",
        "From the pavement side"
      ],
      explanation: "In India, overtaking must be done from the right-hand side of the vehicle being overtaken."
    },
    hi: {
      question: "आगे चल रहे वाहन से आगे निकलने (ओवरटेक करने) की अनुमति सामान्यतः किस तरफ से होती है?",
      options: [
        "बाईं तरफ से",
        "दाईं तरफ से",
        "किसी भी तरफ से जहाँ जगह मिले",
        "फुटपाथ की तरफ से"
      ],
      explanation: "भारत में ओवरटेक हमेशा आगे वाले वाहन के दाईं ओर से ही किया जाना चाहिए।"
    },
    ta: {
      question: "முன்னால் செல்லும் வாகனத்தை முந்திச் செல்ல (ஓவர்டேக்) பொதுவாக எந்தப் பக்கம் அனுமதிக்கப்படுகிறது?",
      options: [
        "இடது பக்கம் வழியாக",
        "வலது பக்கம் வழியாக",
        "இடம் கிடைக்கும் எந்தப் பக்கமும்",
        "நடைபாதை பக்கம்"
      ],
      explanation: "வாகனங்களை எப்போதும் அவற்றின் வலது பக்கமாக மட்டுமே முந்திச் செல்ல வேண்டும்."
    },
    correctAnswer: 1
  },

  // 6. Give Way Sign
  {
    id: 6,
    topic: 'signs',
    topicKey: 'topic_signs',
    signId: 'sign_give_way',
    en: {
      question: "What does an inverted triangular road sign with a red border signify?",
      options: [
        "Give way to traffic on the main road",
        "Steep hill ahead",
        "No parking zone",
        "Speed check ahead"
      ],
      explanation: "An inverted triangle is the 'Give Way' sign. You must yield priority to traffic on the major road."
    },
    hi: {
      question: "लाल बॉर्डर वाले उल्टे त्रिकोण (Inverted Triangle) सड़क संकेत का क्या अर्थ है?",
      options: [
        "मुख्य सड़क के यातायात को रास्ता दें (Give Way)",
        "आगे खड़ी चढ़ाई है",
        "नो पार्किंग क्षेत्र",
        "आगे स्पीड चेकिंग है"
      ],
      explanation: "उल्टा त्रिकोण 'रास्ता दीजिए' (Give Way) का संकेत है। मुख्य सड़क के वाहनों को पहले निकलने दें।"
    },
    ta: {
      question: "சிவப்பு விளிம்பைக் கொண்ட தலைகீழ் முக்கோண சாலைக் குறியீட்டின் பொருள் என்ன?",
      options: [
        "முக்கிய சாலையில் செல்லும் வாகனங்களுக்கு வழிவிடவும் (வழி கொடு)",
        "முன்னால் செங்குத்தான பாதை உள்ளது",
        "வாகனம் நிறுத்த தடைசெய்யப்பட்ட பகுதி",
        "வேக சோதனை மையம் உள்ளது"
      ],
      explanation: "தலைகீழ் முக்கோணம் என்பது 'வழி கொடு' (Give Way) குறியீடாகும். முக்கிய சாலையில் செல்லும் வாகனங்களுக்கு முன்னுரிமை அளிக்க வேண்டும்."
    },
    correctAnswer: 0
  },

  // 7. Red Traffic Light
  {
    id: 7,
    topic: 'rules',
    topicKey: 'topic_road_rules',
    en: {
      question: "What does a solid red traffic light mean?",
      options: [
        "Slow down and proceed with caution",
        "Stop completely behind the stop line",
        "Proceed if there is no cross traffic",
        "Stop only if a traffic policeman is watching"
      ],
      explanation: "A solid red light means an absolute stop before the stop line or zebra crossing."
    },
    hi: {
      question: "ट्रैफिक सिग्नल की लाल बत्ती का क्या अर्थ है?",
      options: [
        "गति धीमी करें और सावधानी से आगे बढ़ें",
        "स्टॉप लाइन से पहले वाहन को पूरी तरह रोकें",
        "यदि सामने से कोई गाड़ी न हो तो आगे बढ़ जाएं",
        "केवल तभी रुकें जब ट्रैफिक पुलिसकर्मी देख रहा हो"
      ],
      explanation: "लाल बत्ती का मतलब स्टॉप लाइन के पीछे वाहन को अनिवार्य रूप से रोकना है।"
    },
    ta: {
      question: "சிவப்பு போக்குவரத்து விளக்கின் (Red Light) பொருள் என்ன?",
      options: [
        "வேகத்தைக் குறைத்து எச்சரிக்கையுடன் செல்லவும்",
        "ஸ்டாப் கோட்டிற்கு முன்னதாகவே வாகனத்தை முழுமையாக நிறுத்தவும்",
        "குறுக்கு போக்குவரத்து இல்லை என்றால் செல்லலாம்",
        "காவலர் பார்த்தால் மட்டுமே நிற்க வேண்டும்"
      ],
      explanation: "சிவப்பு விளக்கு எரிந்தால் ஸ்டாப் கோட்டிற்கு முன்பாக வாகனத்தை முழுமையாக நிறுத்த வேண்டும்."
    },
    correctAnswer: 1
  },

  // 8. Yellow / Amber Light
  {
    id: 8,
    topic: 'rules',
    topicKey: 'topic_road_rules',
    en: {
      question: "When a traffic signal turns from green to amber (yellow), what should you do?",
      options: [
        "Accelerate quickly to beat the red light",
        "Stop safely before the stop line unless you are already too close to stop safely",
        "Honk and turn left immediately",
        "Turn off vehicle engine"
      ],
      explanation: "Amber indicates stop before the line unless stopping abruptly would cause a rear-end collision."
    },
    hi: {
      question: "जब ट्रैफिक सिग्नल हरे से पीला (Amber) हो जाता है, तो आपको क्या करना चाहिए?",
      options: [
        "लाल होने से पहले तेजी से निकलने के लिए एक्सीलरेटर दबाएं",
        "स्टॉप लाइन से पहले सुरक्षित रूप से रुकें, जब तक कि अचानक रुकना खतरनाक न हो",
        "हॉर्न बजाकर तुरंत बाएं मुड़ें",
        "गाड़ी का इंजन बंद कर दें"
      ],
      explanation: "पीली बत्ती का अर्थ है कि लाल बत्ती होने वाली है, अतः सुरक्षित रूप से रुकने की तैयारी करें।"
    },
    ta: {
      question: "போக்குவரத்து விளக்கு பச்சையிலிருந்து மஞ்சளாக மாறும்போது என்ன செய்ய வேண்டும்?",
      options: [
        "சிவப்பு நிறமாவதற்குள் வேகமாக கடக்க வேண்டும்",
        "பாதுகாப்பாக நிறுத்த முடிந்தால் ஸ்டாப் கோட்டிற்கு முன் நிறுத்த வேண்டும்",
        "ஹார்ன் அடித்து உடனே இடதுபுறம் திரும்ப வேண்டும்",
        "இன்ஜினை அணைக்க வேண்டும்"
      ],
      explanation: "மஞ்சள் விளக்கு எரியும்போது பாதுகாப்பாக வாகனத்தை நிறுத்த வேண்டும்."
    },
    correctAnswer: 1
  },

  // 9. Helmet Rule
  {
    id: 9,
    topic: 'safety',
    topicKey: 'topic_safety',
    en: {
      question: "Who is required by law to wear an approved ISI helmet on a two-wheeler?",
      options: [
        "Only the rider driving the motorcycle",
        "Both the rider and the pillion passenger",
        "Only riders traveling on national highways",
        "Helmets are optional within city limits"
      ],
      explanation: "Under the Motor Vehicles Act, both the rider and the pillion passenger must wear certified protective helmets."
    },
    hi: {
      question: "कानून के अनुसार दोपहिया वाहन पर प्रमाणित ISI हेलमेट पहनना किसके लिए अनिवार्य है?",
      options: [
        "केवल दोपहिया वाहन चला रहे चालक के लिए",
        "चालक और पीछे बैठे यात्री (पिलियन राइडर) दोनों के लिए",
        "केवल नेशनल हाईवे पर यात्रा करने वालों के लिए",
        "शहर के अंदर हेलमेट लगाना वैकल्पिक है"
      ],
      explanation: "मोटर वाहन अधिनियम के तहत चालक और पीछे बैठे सहयात्री दोनों का हेलमेट पहनना अनिवार्य है।"
    },
    ta: {
      question: "சட்டப்படி இருசக்கர வாகனத்தில் யார் ஐஎஸ்ஐ (ISI) ஹெல்மெட் அணிய வேண்டும்?",
      options: [
        "வாகனம் ஓட்டுபவர் மட்டும்",
        "ஓட்டுபவர் மற்றும் பின்னால் அமர்ந்து செல்பவர் இருவருமே",
        "தேசிய நெடுஞ்சாலையில் செல்பவர்கள் மட்டும்",
        "நகரத்திற்குள் ஹெல்மெட் கட்டாயமில்லை"
      ],
      explanation: "இருசக்கர வாகனத்தில் பயணிக்கும் ஓட்டுநர் மற்றும் பின்னால் அமர்ந்திருப்பவர் ஆகிய இருவருமே கட்டாயம் ஹெல்மெட் அணிய வேண்டும்."
    },
    correctAnswer: 1
  },

  // 10. Mobile Phone Usage
  {
    id: 10,
    topic: 'safety',
    topicKey: 'topic_safety',
    en: {
      question: "Using a handheld mobile phone while driving a motor vehicle is:",
      options: [
        "Allowed if driving at a slow speed",
        "Allowed only to send short text messages",
        "Strictly prohibited and punishable by fine",
        "Allowed if using one hand"
      ],
      explanation: "Holding or using a mobile phone while driving causes dangerous distraction and is illegal under the Motor Vehicles Act."
    },
    hi: {
      question: "गाड़ी चलाते समय हाथ में मोबाइल फोन का उपयोग करना:",
      options: [
        "धीमी गति में चलाने पर अनुमति है",
        "केवल छोटे मैसेज भेजने के लिए अनुमति है",
        "सख्ती से प्रतिबंधित है और भारी जुर्माने का प्रावधान है",
        "एक हाथ से चलाने पर अनुमति है"
      ],
      explanation: "ड्राइविंग के दौरान मोबाइल फोन का उपयोग ध्यान भटकाता है और कानूनन दंडनीय अपराध है।"
    },
    ta: {
      question: "வாகனம் ஓட்டும்போது செல்போன் பயன்படுத்துவது:",
      options: [
        "மெதுவாக ஓட்டும்போது அனுமதிக்கப்படும்",
        "குறுஞ்செய்தி அனுப்ப மட்டும் அனுமதிக்கப்படும்",
        "முற்றிலும் தடைசெய்யப்பட்டது மற்றும் அபராதம் விதிக்கப்படும் குற்றம்",
        "ஒரு கையில் பயன்படுத்தலாம்"
      ],
      explanation: "வாகனம் ஓட்டும்போது மொபைல் போன் பயன்படுத்துவது கவனத்தை சிதறடிக்கும், இது சட்டப்படி தண்டனைக்குரியது."
    },
    correctAnswer: 2
  },

  // 11. Learner Licence 'L' Plate
  {
    id: 11,
    topic: 'documentation',
    topicKey: 'topic_licence_rules',
    en: {
      question: "A learner licence holder driving a vehicle must display which sign on the front and rear?",
      options: [
        "A black 'P' on a yellow board",
        "A red 'L' on a white background",
        "A green 'T' on a blue background",
        "A white sticker without any letter"
      ],
      explanation: "A learner must display a red 'L' plate painted on a white background on both the front and rear of the vehicle."
    },
    hi: {
      question: "लर्नर लाइसेंस (LL) धारक को वाहन के आगे और पीछे कौन-सा बोर्ड लगाना आवश्यक है?",
      options: [
        "पीले बोर्ड पर काला 'P'",
        "सफेद पृष्ठभूमि पर लाल रंग का 'L'",
        "नीले बोर्ड पर हरा 'T'",
        "बिना किसी अक्षर का सादा सफेद स्टिकर"
      ],
      explanation: "लर्नर को वाहन के आगे और पीछे सफेद पृष्ठभूमि पर लाल रंग का 'L' बोर्ड लगाना अनिवार्य है।"
    },
    ta: {
      question: "பழகுநர் உரிமம் (LL) வைத்திருப்பவர் வாகனத்தின் முன்புறமும் பின்புறமும் எந்தப் பலகையைக் காட்ட வேண்டும்?",
      options: [
        "மஞ்சள் பலகையில் கருப்பு 'P'",
        "வெள்ளை பின்னணியில் சிவப்பு 'L' பலகை",
        "நீல பலகையில் பச்சை 'T'",
        "எழுத்துக்கள் இல்லாத வெள்ளை பலகை"
      ],
      explanation: "பழகுநர் உரிமத்துடன் வாகனம் ஓட்டும்போது வாகனத்தின் முன்பும் பின்பும் வெள்ளை பின்னணியில் சிவப்பு 'L' பலகை இருக்க வேண்டும்."
    },
    correctAnswer: 1
  },

  // 12. Accompanying Person for Learner
  {
    id: 12,
    topic: 'documentation',
    topicKey: 'topic_licence_rules',
    en: {
      question: "When driving with a learner's licence, who must accompany the driver (except on a solo two-wheeler)?",
      options: [
        "Any family member above 18 years",
        "An instructor holding a valid permanent driving licence",
        "Another friend who also has a learner's licence",
        "No one is required to accompany"
      ],
      explanation: "The learner must be accompanied by an instructor possessing an effective driving licence who can control the vehicle."
    },
    hi: {
      question: "लर्नर लाइसेंस पर वाहन चलाते समय चालक के साथ कौन उपस्थित होना अनिवार्य है?",
      options: [
        "परिवार का कोई भी 18 वर्ष से ऊपर का सदस्य",
        "एक ऐसा व्यक्ति जिसके पास वैध स्थायी ड्राइविंग लाइसेंस (Permanent DL) हो",
        "कोई दोस्त जिसके पास भी लर्नर लाइसेंस हो",
        "किसी का भी साथ होना आवश्यक नहीं है"
      ],
      explanation: "लर्नर के साथ स्थायी वैध लाइसेंस धारक व्यक्ति का बैठना अनिवार्य है ताकि आपातकाल में वाहन नियंत्रित कर सके।"
    },
    ta: {
      question: "பழகுநர் உரிமத்துடன் (LL) வாகனம் ஓட்டும்போது உடன் யார் இருக்க வேண்டும்?",
      options: [
        "18 வயதுக்கு மேற்பட்ட குடும்ப உறுப்பினர்",
        "செல்லுபடியாகும் நிரந்தர ஓட்டுநர் உரிமம் (Permanent DL) வைத்துள்ள ஒருவர்",
        "பழகுநர் உரிமம் வைத்துள்ள நண்பர்",
        "யாரும் இருக்க வேண்டிய அவசியமில்லை"
      ],
      explanation: "பழகுநர் வாகனம் ஓட்டும்போது உடன் நிரந்தர ஓட்டுநர் உரிமம் வைத்துள்ள நபர் உடனிருக்க வேண்டும்."
    },
    correctAnswer: 1
  },

  // 13. Learner Licence Validity
  {
    id: 13,
    topic: 'documentation',
    topicKey: 'topic_licence_rules',
    en: {
      question: "What is the validity period of an Indian Learner's Licence?",
      options: [
        "30 days",
        "3 months",
        "6 months",
        "1 year"
      ],
      explanation: "A Learner's Licence is valid for 6 months across India from the date of issue."
    },
    hi: {
      question: "भारत में लर्नर लाइसेंस (LL) की वैधता अवधि कितनी होती है?",
      options: [
        "30 दिन",
        "3 महीने",
        "6 महीने",
        "1 वर्ष"
      ],
      explanation: "लर्नर लाइसेंस जारी होने की तिथि से 6 महीने की अवधि तक मान्य होता है।"
    },
    ta: {
      question: "இந்தியாவில் பழகுநர் உரிமம் (LL) எவ்வளவு காலம் செல்லுபடியாகும்?",
      options: [
        "30 நாட்கள்",
        "3 மாதங்கள்",
        "6 மாதங்கள்",
        "1 வருடம்"
      ],
      explanation: "பழகுநர் உரிமம் வழங்கப்பட்ட தேதியிலிருந்து 6 மாதங்கள் வரை செல்லுபடியாகும்."
    },
    correctAnswer: 2
  },

  // 14. Earliest Permanent Licence Application
  {
    id: 14,
    topic: 'documentation',
    topicKey: 'topic_licence_rules',
    en: {
      question: "After obtaining a learner's licence, after how many days can you apply for the permanent driving licence test?",
      options: [
        "Immediately on the next day",
        "After 7 days",
        "After 30 days",
        "After 6 months only"
      ],
      explanation: "An applicant must hold a learner's licence for at least 30 days before taking the permanent driving test."
    },
    hi: {
      question: "लर्नर लाइसेंस मिलने के कितने दिनों बाद आप स्थायी ड्राइविंग लाइसेंस (Permanent DL) टेस्ट के लिए आवेदन कर सकते हैं?",
      options: [
        "अगले ही दिन तुरंत",
        "7 दिनों के बाद",
        "कम से कम 30 दिनों के बाद",
        "केवल 6 महीने पूरे होने पर"
      ],
      explanation: "स्थायी लाइसेंस के लिए लर्नर लाइसेंस जारी होने के कम से कम 30 दिन पूरे होने जरूरी हैं।"
    },
    ta: {
      question: "பழகுநர் உரிமம் பெற்ற பிறகு, எத்தனை நாட்களுக்குப் பின் நிரந்தர ஓட்டுநர் உரிமத்திற்கு விண்ணப்பிக்கலாம்?",
      options: [
        "அடுத்த நாளே",
        "7 நாட்களுக்குப் பிறகு",
        "30 நாட்களுக்குப் பிறகு",
        "6 மாதங்களுக்குப் பிறகு மட்டும்"
      ],
      explanation: "பழகுநர் உரிமம் பெற்று குறைந்தபட்சம் 30 நாட்கள் நிறைவடைந்த பின்னரே நிரந்தர உரிமத் தேர்விற்கு விண்ணப்பிக்க முடியும்."
    },
    correctAnswer: 2
  },

  // 15. Speed Limit Sign
  {
    id: 15,
    topic: 'signs',
    topicKey: 'topic_signs',
    signId: 'sign_speed_50',
    en: {
      question: "What does a circular sign with a red border containing the number '50' mean?",
      options: [
        "Minimum speed allowed is 50 km/h",
        "Maximum speed limit is 50 km/h",
        "Distance to the next town is 50 km",
        "Only vehicles with 50 hp permitted"
      ],
      explanation: "A circular sign with a red border displaying a number indicates the maximum legal speed limit on that road."
    },
    hi: {
      question: "लाल घेरे में '50' संख्या वाले वृत्ताकार संकेत का क्या अर्थ है?",
      options: [
        "न्यूनतम गति 50 किमी/घंटा होनी चाहिए",
        "अधिकतम गति सीमा 50 किमी/घंटा है",
        "अगला शहर 50 किमी दूर है",
        "केवल 50 हॉर्सपावर वाले वाहनों को अनुमति है"
      ],
      explanation: "लाल गोल घेरे में संख्या अधिकतम अनुमेय गति सीमा (Maximum Speed Limit) दर्शाती है।"
    },
    ta: {
      question: "சிவப்பு வட்டத்திற்குள் '50' என்ற எண் இருக்கும் குறியீட்டின் பொருள் என்ன?",
      options: [
        "குறைந்தபட்ச வேகம் 50 கி.மீ/மணி",
        "அதிகபட்ச வேக வரம்பு 50 கி.மீ/மணி",
        "அடுத்த ஊர் 50 கி.மீ தொலைவில் உள்ளது",
        "50 குதிரைத்திறன் கொண்ட வாகனங்களுக்கு மட்டும்"
      ],
      explanation: "சிவப்பு வட்டத்திற்குள் உள்ள எண் அதிகபட்ச அனுமதிக்கப்பட்ட வேக வரம்பைக் குறிக்கிறது."
    },
    correctAnswer: 1
  },

  // 16. No Overtaking Sign
  {
    id: 16,
    topic: 'signs',
    topicKey: 'topic_signs',
    signId: 'sign_no_overtaking',
    en: {
      question: "Where is overtaking strictly prohibited even without a specific sign?",
      options: [
        "On straight multi-lane expressways",
        "Near narrow bridges, blind corners, and road crests",
        "On wide one-way streets",
        "When driving in reverse gear"
      ],
      explanation: "Overtaking is forbidden near blind turns, hill crests, narrow bridges, and pedestrian crossings due to zero visibility."
    },
    hi: {
      question: "बिना संकेत बोर्ड के भी किस जगह ओवरटेक करना सख्त मना होता है?",
      options: [
        "सीधे चौड़े एक्सप्रेसवे पर",
        "सकरे पुल, अंधे मोड़ (ब्लाइंड कॉर्नर) और पहाड़ी के घुमाव पर",
        "चौड़ी वन-वे सड़क पर",
        "गाड़ी को रिवर्स में चलाते समय"
      ],
      explanation: "अंधे मोड़, संकरे पुल और चढ़ाई पर सामने का रास्ता न दिखने के कारण ओवरटेक करना जानलेवा व वर्जित है।"
    },
    ta: {
      question: "குறியீடு பலகை இல்லாவிட்டாலும் எங்கு முந்திச் செல்வது (Overtake) முற்றிலும் தடைசெய்யப்பட்டுள்ளது?",
      options: [
        "நேரான விரைவுச் சாலைகளில்",
        "குறுகிய பாலங்கள், வளைவுகள் மற்றும் மலை முகடுகளில்",
        "அகலமான ஒருவழிப் பாதையில்",
        "பின்நோக்கி இயக்கும்போது"
      ],
      explanation: "பார்வை மறைக்கும் கொண்டை ஊசி வளைவுகள், குறுகிய பாலங்கள் மீது முந்திச் செல்வது தடைசெய்யப்பட்டுள்ளது."
    },
    correctAnswer: 1
  },

  // 17. Horn Prohibited
  {
    id: 17,
    topic: 'signs',
    topicKey: 'topic_signs',
    signId: 'sign_horn_prohibited',
    en: {
      question: "Sounding the horn is strictly prohibited near which places?",
      options: [
        "Shopping malls and cinema halls",
        "Hospitals, courts, and educational institutions (Silent Zones)",
        "Petrol pumps and toll plazas",
        "Railway crossings and bus terminals"
      ],
      explanation: "Areas surrounding hospitals, educational institutions, and courts are designated Silent Zones where honking is illegal."
    },
    hi: {
      question: "किन स्थानों के निकट हॉर्न बजाना कानूनन सख्त मना है?",
      options: [
        "शॉपिंग मॉल और सिनेमा हॉल के पास",
        "अस्पताल, न्यायालय और शिक्षण संस्थान (शांत क्षेत्र/साइलेंस जोन)",
        "पेट्रोल पंप और टोल प्लाजा के पास",
        "रेलवे फाटक और बस स्टैंड के पास"
      ],
      explanation: "अस्पतालों और अदालतों के आस-पास का क्षेत्र 'साइलेंस जोन' होता है, जहाँ हॉर्न बजाना प्रतिबंधित है।"
    },
    ta: {
      question: "எந்த இடங்களுக்கு அருகில் ஹார்ன் அடிப்பது முற்றிலும் தடை செய்யப்பட்டுள்ளது?",
      options: [
        "வணிக வளாகங்கள் மற்றும் திரையரங்குகள்",
        "மருத்துவமனைகள், நீதிமன்றங்கள் மற்றும் பள்ளிகள் (அமைதி மண்டலங்கள்)",
        "பெட்ரோல் பங்க்குகள் மற்றும் சுங்கச்சாவடிகள்",
        "ரயில்வே கிராசிங் மற்றும் பேருந்து நிலையங்கள்"
      ],
      explanation: "மருத்துவமனைகள், பள்ளிகள் மற்றும் நீதிமன்றங்கள் உள்ள அமைதி மண்டலங்களில் (Silent Zones) ஹார்ன் அடிக்கக் கூடாது."
    },
    correctAnswer: 1
  },

  // 18. School Ahead Sign
  {
    id: 18,
    topic: 'signs',
    topicKey: 'topic_signs',
    signId: 'sign_school_ahead',
    en: {
      question: "When you see a triangular warning sign with children carrying schoolbags, what should you do?",
      options: [
        "Honk loudly to scatter children off the road",
        "Slow down and be prepared to stop immediately for children",
        "Maintain normal highway speed",
        "Ignore the sign during evening hours"
      ],
      explanation: "Children can act unpredictably. Drivers must significantly reduce speed and stay alert."
    },
    hi: {
      question: "स्कूली बस्ते लिए बच्चों का त्रिकोणीय चेतावनी संकेत दिखने पर आपको क्या करना चाहिए?",
      options: [
        "बच्चों को हटाने के लिए जोर-जोर से हॉर्न बजाएं",
        "वाहन धीमा करें और बच्चों के लिए तुरंत रुकने को तैयार रहें",
        "सामान्य तेज गति से चलते रहें",
        "शाम के समय इस संकेत को अनदेखा करें"
      ],
      explanation: "स्कूल क्षेत्र में बच्चे अप्रत्याशित रूप से दौड़ सकते हैं, इसलिए गति बहुत धीमी रखना आवश्यक है।"
    },
    ta: {
      question: "புத்தகப் பைகளுடன் குழந்தைகள் செல்லும் முக்கோண எச்சரிக்கைக் குறியீட்டைக் கண்டால் என்ன செய்ய வேண்டும்?",
      options: [
        "குழந்தைகளை விலகச் செய்ய வேகமாக ஹார்ன் அடிக்க வேண்டும்",
        "வேகத்தைக் குறைத்து, குழந்தைகள் கடக்க நேரிட்டால் உடனே நிறுத்தத் தயாராக இருக்க வேண்டும்",
        "வழக்கமான வேகத்திலேயே செல்ல வேண்டும்",
        "மாலை நேரங்களில் இக்குறியீட்டை புறக்கணிக்கலாம்"
      ],
      explanation: "பள்ளிப் பகுதிகளில் குழந்தைகள் திடீரென குறுக்கே வரக்கூடும் என்பதால் வேகத்தை வெகுவாகக் குறைக்க வேண்டும்."
    },
    correctAnswer: 1
  },

  // 19. Roundabout Priority
  {
    id: 19,
    topic: 'rules',
    topicKey: 'topic_road_rules',
    signId: 'sign_roundabout',
    en: {
      question: "When entering a traffic roundabout (rotary), who has the right of way?",
      options: [
        "Traffic approaching from the left outside",
        "Traffic already circulating inside the roundabout from your right",
        "The fastest moving vehicle",
        "Heavy transport vehicles only"
      ],
      explanation: "Vehicles already navigating inside the roundabout on your right have priority over entering vehicles."
    },
    hi: {
      question: "गोल चक्कर (राउंडअबाउट) में प्रवेश करते समय पहला अधिकार (राइट ऑफ वे) किसका होता है?",
      options: [
        "बाहर से बाईं ओर से आ रहे वाहन का",
        "जो वाहन पहले से गोल चक्कर के अंदर दाईं ओर से घूम रहे हैं उनका",
        "सबसे तेज चलने वाले वाहन का",
        "केवल भारी ट्रकों का"
      ],
      explanation: "गोलचक्कर के भीतर पहले से मौजूद दाईं ओर के वाहनों को पहले निकलने का अधिकार होता है।"
    },
    ta: {
      question: "சுற்றுவட்டச் சாலையில் (ரவுண்டானா) நுழையும்போது யாருக்கு முன்னுரிமை உண்டு?",
      options: [
        "வெளியில் இடதுபுறத்திலிருந்து வரும் வாகனங்களுக்கு",
        "சுற்றுவட்டத்திற்குள் ஏற்கனவே வலதுபுறத்தில் சுற்றிக்கொண்டிருக்கும் வாகனங்களுக்கு",
        "வேகமாக வரும் வாகனத்திற்கு",
        "கனரக வாகனங்களுக்கு மட்டும்"
      ],
      explanation: "ரவுண்டானாவில் ஏற்கனவே பயணிக்கும் வலதுபுற வாகனங்களுக்கே முதல் முன்னுரிமை வழங்கப்பட வேண்டும்."
    },
    correctAnswer: 1
  },

  // 20. U-turn
  {
    id: 20,
    topic: 'rules',
    topicKey: 'topic_road_rules',
    en: {
      question: "A U-turn is strictly prohibited on which of the following?",
      options: [
        "On busy roads where 'No U-Turn' is signed and on roads with continuous solid white/yellow lines",
        "At dead-end residential streets",
        "In empty parking lots",
        "On designated turn bays with green arrow signals"
      ],
      explanation: "U-turns are prohibited on busy roads with unbroken solid median lines or designated 'No U-turn' signs."
    },
    hi: {
      question: "यू-टर्न (U-Turn) लेना किस स्थान पर पूरी तरह वर्जित है?",
      options: [
        "जहाँ 'नो यू-टर्न' का बोर्ड हो और जहाँ सड़क के बीच लगातार ठोस सफेद/पीली रेखा हो",
        "रहवासी कॉलोनियों की अंतिम गली में",
        "खाली पार्किंग में",
        "हरे तीर वाले सिग्नल मोड़ पर"
      ],
      explanation: "नो यू-टर्न बोर्ड या सड़क के बीच अखंड (Solid) पीली/सफेद रेखा पर यू-टर्न लेना गैरकानूनी है।"
    },
    ta: {
      question: "எந்த இடங்களில் 'யு-டர்ன்' (U-turn) செய்யக்கூடாது?",
      options: [
        "'நோ யு-டர்ன்' பலகை உள்ள இடங்கள் மற்றும் தொடர்ச்சியான திடமான கோடுகள் உள்ள சாலைகளில்",
        "குடியிருப்புப் பகுதிகளின் முட்டுச் சந்துகளில்",
        "காலி பார்க்கிங் பகுதிகளில்",
        "பச்சை அம்பு குறி காட்டப்படும் வளைவுகளில்"
      ],
      explanation: "'நோ யு-டர்ன்' குறியீடு உள்ள இடங்களிலும், சாலையின் நடுவே தொடர் கோடு உள்ள இடங்களிலும் யு-டர்ன் செய்யக் கூடாது."
    },
    correctAnswer: 0
  },

  // 21. Drunk Driving
  {
    id: 21,
    topic: 'safety',
    topicKey: 'topic_safety',
    en: {
      question: "Driving under the influence of alcohol or narcotics is:",
      options: [
        "Allowed if accompanied by an awake passenger",
        "Allowed within a short distance from home",
        "A serious offence punishable by imprisonment, heavy fine, and licence suspension",
        "Permitted at night after 11 PM"
      ],
      explanation: "Drunk driving is a major criminal violation that endangers lives and leads to licence cancellation and jail terms."
    },
    hi: {
      question: "शराब या नशीले पदार्थों के प्रभाव में वाहन चलाना:",
      options: [
        "अनुमति है यदि साथ में कोई जागता हुआ व्यक्ति बैठा हो",
        "घर के पास थोड़ी दूरी तक चलाने की अनुमति है",
        "एक गंभीर अपराध है जिसमें जेल, भारी जुर्माना और लाइसेंस रद्द हो सकता है",
        "रात 11 बजे के बाद अनुमति है"
      ],
      explanation: "शराब पीकर गाड़ी चलाना कानूनन संगीन जुर्म है। इसमें कारावास व ड्राइविंग लाइसेंस निरस्त हो जाता है।"
    },
    ta: {
      question: "மது அருந்திவிட்டு வாகனம் ஓட்டுவது:",
      options: [
        "விழித்திருக்கும் நபர் உடன் இருந்தால் அனுமதிக்கப்படும்",
        "வீட்டின் அருகில் குறுகிய தூரத்திற்கு அனுமதிக்கப்படும்",
        "சிறைத்தண்டனை, பெரும் அபராதம் மற்றும் உரிம ரத்து செய்யக்கூடிய தீவிர குற்றம்",
        "இரவு 11 மணிக்கு மேல் அனுமதிக்கப்படும்"
      ],
      explanation: "மது அருந்திவிட்டு வாகனம் ஓட்டுவது கடுமையான குற்றமாகும். இதனால் சிறைத்தண்டனை மற்றும் உரிமம் ரத்தாகும்."
    },
    correctAnswer: 2
  },

  // 22. Parking near Bus Stop
  {
    id: 22,
    topic: 'rules',
    topicKey: 'topic_road_rules',
    en: {
      question: "Parking a private vehicle at or immediately adjacent to a bus stop is:",
      options: [
        "Permitted for up to 10 minutes",
        "Strictly prohibited as it obstructs public buses and passengers",
        "Allowed on weekends only",
        "Permitted if hazard warning lights are flashing"
      ],
      explanation: "Parking at bus stops blocks public transit, endangers boarding commuters, and is strictly prohibited."
    },
    hi: {
      question: "बस स्टॉप पर या उसके ठीक सामने निजी वाहन पार्क करना:",
      options: [
        "10 मिनट तक की अनुमति है",
        "पूरी तरह वर्जित है क्योंकि इससे बसों और यात्रियों का रास्ता रुकता है",
        "केवल शनिवार-रविवार को अनुमति है",
        "हैज़र्ड लाइट जलाकर खड़ा कर सकते हैं"
      ],
      explanation: "बस स्टॉप पर गाड़ी खड़ी करने से बसें सड़क के बीच रुकती हैं जिससे जाम और दुर्घटना का खतरा होता है।"
    },
    ta: {
      question: "பேருந்து நிறுத்தத்திலோ அல்லது அதன் அருகிலோ வாகனத்தை நிறுத்துவது (Parking):",
      options: [
        "10 நிமிடங்கள் வரை அனுமதிக்கப்படும்",
        "முற்றிலும் தடைசெய்யப்பட்டுள்ளது, ஏனெனில் இது பொதுப் பேருந்துகளை தடுக்கும்",
        "வார இறுதி நாட்களில் மட்டும் அனுமதிக்கப்படும்",
        "எச்சரிக்கை விளக்குகளை எரியவிட்டு நிறுத்தலாம்"
      ],
      explanation: "பேருந்து நிறுத்தங்களில் வாகனங்களை நிறுத்துவது பயணிகளுக்கும் பேருந்துகளுக்கும் இடையூறு ஏற்படுத்தும் என்பதால் தடைசெய்யப்பட்டுள்ளது."
    },
    correctAnswer: 1
  },

  // 23. Form 1A Medical Certificate
  {
    id: 23,
    topic: 'documentation',
    topicKey: 'topic_licence_rules',
    en: {
      question: "What is Form 1A in the driving licence application process?",
      options: [
        "Vehicle sales tax receipt",
        "Medical fitness certificate signed by a registered medical practitioner",
        "Vehicle pollution under control certificate",
        "Parental consent form"
      ],
      explanation: "Form 1A is the official medical fitness certificate required for commercial applicants or applicants aged 40 and above."
    },
    hi: {
      question: "ड्राइविंग लाइसेंस प्रक्रिया में 'फॉर्म 1A' (Form 1A) क्या होता है?",
      options: [
        "गाड़ी की बिक्री कर रसीद",
        "पंजीकृत डॉक्टर द्वारा हस्ताक्षरित मेडिकल फिटनेस प्रमाण पत्र",
        "गाड़ी का प्रदूषण नियंत्रण प्रमाण पत्र (PUC)",
        "माता-पिता की सहमति का फॉर्म"
      ],
      explanation: "फॉर्म 1A डॉक्टर द्वारा प्रमाणित चिकित्सा फिटनेस प्रमाणपत्र होता है जो 40 वर्ष या उससे अधिक आयु के आवेदकों के लिए जरूरी होता है।"
    },
    ta: {
      question: "ஓட்டுநர் உரிம நடைமுறையில் 'படிவம் 1A' (Form 1A) என்றால் என்ன?",
      options: [
        "வாகன விற்பனை வரி ரசீது",
        "பதிவுபெற்ற மருத்துவரிடம் பெற்ற உடற்தகுதி சான்றிதழ்",
        "வாகன புகை பரிசோதனை சான்றிதழ்",
        "பெற்றோர் ஒப்புதல் கடிதம்"
      ],
      explanation: "படிவம் 1A என்பது பதிவுபெற்ற மருத்துவரிடம் பெறப்படும் மருத்துவ தகுதிச் சான்றிதழாகும் (40 வயது அல்லது வணிக உரிமத்திற்கு)."
    },
    correctAnswer: 1
  },

  // 24. Two-Second Rule
  {
    id: 24,
    topic: 'safety',
    topicKey: 'topic_safety',
    en: {
      question: "What does the 'Two-Second Rule' refer to in defensive driving?",
      options: [
        "The time taken to shift gears",
        "The minimum safe following distance behind the vehicle in front in good weather",
        "The maximum duration allowed to look at your mobile phone",
        "The time to restart an engine after stalling"
      ],
      explanation: "The two-second rule helps drivers maintain adequate braking distance behind preceding vehicles in normal conditions."
    },
    hi: {
      question: "सुरक्षित ड्राइविंग में 'दो-सेकंड का नियम' (Two-Second Rule) किससे संबंधित है?",
      options: [
        "गियर बदलने में लगने वाला समय",
        "आगे चल रहे वाहन से सुरक्षित दूरी बनाए रखने का नियम",
        "फोन देखने के लिए अनुमत अधिकतम समय",
        "गाड़ी बंद होने पर चालू करने का समय"
      ],
      explanation: "दो-सेकंड नियम आगे वाले वाहन से अचानक ब्रेक लगने की स्थिति में सुरक्षित दूरी रखने की तकनीक है।"
    },
    ta: {
      question: "பாதுகாப்பான வாகனம் ஓட்டுதலில் 'இரண்டு வினாடி விதி' (Two-Second Rule) எதனைக் குறிக்கிறது?",
      options: [
        "கியர் மாற்றுவதற்கு எடுக்கும் நேரம்",
        "முன்னால் செல்லும் வாகனத்திற்குப் பின்னால் பராமரிக்க வேண்டிய குறைந்தபட்ச இடைவெளி",
        "மொபைல் போனைப் பார்க்க அனுமதிக்கப்படும் நேரம்",
        "இன்ஜினை மீண்டும் இயக்கும் நேரம்"
      ],
      explanation: "முன்னால் செல்லும் வாகனம் திடீரென நின்றால் மோதாமல் இருக்க 2 வினாடிகள் இடைவெளி விட வேண்டும்."
    },
    correctAnswer: 1
  },

  // 25. High Beam in Fog
  {
    id: 25,
    topic: 'safety',
    topicKey: 'topic_safety',
    en: {
      question: "When driving in dense fog, which lights should you use?",
      options: [
        "High beam headlights",
        "Low beam headlights and fog lights",
        "Interior cabin lights only",
        "No lights at all"
      ],
      explanation: "High beams reflect off fog droplets causing blinding glare. Always use low beams and fog lights in fog."
    },
    hi: {
      question: "घने कोहरे में गाड़ी चलाते समय कौन-सी लाइटों का उपयोग करना चाहिए?",
      options: [
        "हाई बीम (तेज ऊपर वाली रोशनी)",
        "लो बीम (नीची रोशनी) और फॉग लैंप",
        "केवल गाड़ी के अंदर की केबिन लाइट",
        "कोई भी लाइट नहीं जलानी चाहिए"
      ],
      explanation: "कोहरे में हाई बीम की रोशनी परावर्तित होकर आँखों को चौंधिया देती है, इसलिए हमेशा लो बीम और फॉग लाइट जलाएं।"
    },
    ta: {
      question: "அடர்ந்த பனிமூட்டத்தில் வாகனம் ஓட்டும்போது எந்த விளக்குகளைப் பயன்படுத்த வேண்டும்?",
      options: [
        "ஹை பீம் (High beam) விளக்குகள்",
        "லோ பீம் (Low beam) மற்றும் பனி விளக்குகள் (Fog lights)",
        "உட்புற கேபின் விளக்குகள் மட்டும்",
        "எந்த விளக்குகளும் தேவையில்லை"
      ],
      explanation: "பனியில் ஹை பீம் அடித்தால் ஒளி சிதறி பார்வை மங்கும், எனவே லோ பீம் மற்றும் பனி விளக்குகளையே பயன்படுத்த வேண்டும்."
    },
    correctAnswer: 1
  },

  // 26. Narrow Road Sign
  {
    id: 26,
    topic: 'signs',
    topicKey: 'topic_signs',
    signId: 'sign_narrow_road',
    en: {
      question: "What does the warning sign showing a road tapering inwards indicate?",
      options: [
        "Road width is expanding ahead",
        "Narrow road ahead, slow down and yield where necessary",
        "Toll gate ahead",
        "Dead end road"
      ],
      explanation: "This sign cautions that the road carriageway narrows ahead, requiring caution and reduced speed."
    },
    hi: {
      question: "अंदर की ओर संकरी होती सड़क दर्शाने वाले चेतावनी संकेत का क्या मतलब है?",
      options: [
        "आगे सड़क चौड़ी हो रही है",
        "आगे सड़क संकरी है, गति कम करें और आवश्यकतानुसार रास्ता दें",
        "आगे टोल गेट है",
        "आगे रास्ता बंद है"
      ],
      explanation: "यह संकेत बताता है कि आगे सड़क की चौड़ाई कम हो रही है, अतः वाहन की गति धीमी रखें।"
    },
    ta: {
      question: "உள்நோக்கி குறுகும் சாலையைக் காட்டும் எச்சரிக்கைக் குறியீட்டின் பொருள் என்ன?",
      options: [
        "சாலையின் அகலம் அதிகரிக்கிறது",
        "முன்னால் குறுகிய சாலை உள்ளது, வேகத்தைக் குறைக்கவும்",
        "சுங்கச்சாவடி உள்ளது",
        "முட்டுச் சந்து"
      ],
      explanation: "முன்னால் சாலை குறுகலாக மாறுகிறது என்பதால் வேகத்தைக் குறைத்து எச்சரிக்கையாக செல்ல வேண்டும்."
    },
    correctAnswer: 1
  },

  // 27. Right Hairpin Bend
  {
    id: 27,
    topic: 'signs',
    topicKey: 'topic_signs',
    signId: 'sign_hairpin_right',
    en: {
      question: "What does a sign showing a sharp U-like turn to the right indicate?",
      options: [
        "Right turn prohibited",
        "Right hairpin bend ahead, reduce speed and stay in lane",
        "Straight road only",
        "Divided highway begins"
      ],
      explanation: "Indicates an acute, sharp hairpin turn to the right, common in hilly terrains."
    },
    hi: {
      question: "दाईं ओर मुड़ते नुकीले यू-टर्न जैसे मोड़ का संकेत क्या दर्शाता है?",
      options: [
        "दाएं मुड़ना मना है",
        "आगे दाईं ओर हेयरपिन बेंड (तीखा मोड़) है, गति धीमी करें और लेन में रहें",
        "केवल सीधे चलें",
        "डिवाइडेड हाईवे शुरू"
      ],
      explanation: "यह पहाड़ी या घुमावदार रास्तों पर दाईं ओर बहुत तीखे मोड़ (हेयरपिन बेंड) की चेतावनी देता है।"
    },
    ta: {
      question: "வலதுபுறம் கூர்மையான கொண்டை ஊசி வளைவைக் காட்டும் குறியீட்டின் பொருள் என்ன?",
      options: [
        "வலதுபுறம் திரும்பத் தடை",
        "முன்னால் வலதுபுற கொண்டை ஊசி வளைவு உள்ளது, வேகத்தைக் குறைக்கவும்",
        "நேரான சாலை மட்டும்",
        "இருவழிச் சாலை தொடங்குகிறது"
      ],
      explanation: "முன்னால் ஆபத்தான வலதுபுற கொண்டை ஊசி வளைவு உள்ளது என்பதை இது எச்சரிக்கிறது."
    },
    correctAnswer: 1
  },

  // 28. Speed Breaker Sign
  {
    id: 28,
    topic: 'signs',
    topicKey: 'topic_signs',
    signId: 'sign_speed_breaker',
    en: {
      question: "What does a triangular sign showing a hump on the road mean?",
      options: [
        "Bridge ahead",
        "Speed breaker / road hump ahead, slow down",
        "Rough surface for next 10 km",
        "Underground subway ahead"
      ],
      explanation: "Warns of a speed bump ahead; reduce vehicle speed to avoid damage and loss of control."
    },
    hi: {
      question: "सड़क पर उभार (हम्प) दर्शाने वाले त्रिकोणीय संकेत का क्या अर्थ है?",
      options: [
        "आगे पुल है",
        "आगे स्पीड ब्रेकर (गति अवरोधक) है, वाहन धीमा करें",
        "अगले 10 किमी तक कच्ची सड़क है",
        "आगे भूमिगत रास्ता है"
      ],
      explanation: "यह संकेत बताता है कि आगे स्पीड ब्रेकर है, इसलिए गाड़ी की गति धीमी कर लें।"
    },
    ta: {
      question: "சாலையில் மேடு போன்ற வடிவத்தைக் காட்டும் முக்கோண குறியீட்டின் பொருள் என்ன?",
      options: [
        "முன்னால் பாலம் உள்ளது",
        "முன்னால் வேகத்தடை (Speed breaker) உள்ளது, வேகத்தைக் குறைக்கவும்",
        "கரடுமுரடான சாலை",
        "சுரங்கப்பாதை உள்ளது"
      ],
      explanation: "முன்னால் வேகத்தடை உள்ளதால் வாகனத்தின் வேகத்தைக் கட்டுக்குள் கொண்டுவர வேண்டும்."
    },
    correctAnswer: 1
  },

  // 29. Hospital Sign
  {
    id: 29,
    topic: 'signs',
    topicKey: 'topic_signs',
    signId: 'sign_hospital',
    en: {
      question: "What does a blue rectangular sign with a red cross or 'H' symbol mean?",
      options: [
        "Red cross donation booth",
        "Hospital ahead, refrain from unnecessary honking",
        "Police headquarters",
        "Veterinary clinic"
      ],
      explanation: "An informatory sign indicating a hospital facility nearby. Drivers should not blow horns."
    },
    hi: {
      question: "नीले चौकोर बोर्ड पर लाल क्रॉस या 'H' चिन्ह का क्या अर्थ है?",
      options: [
        "रेड क्रॉस चंदा केंद्र",
        "आगे अस्पताल है, अनावश्यक हॉर्न न बजाएं",
        "पुलिस मुख्यालय",
        "पशु चिकित्सालय"
      ],
      explanation: "यह सूचनात्मक संकेत बताता है कि निकट ही अस्पताल है। यहाँ शांति बनाए रखें और हॉर्न न बजाएं।"
    },
    ta: {
      question: "நீல செவ்வக பலகையில் சிவப்பு சிலுவை அல்லது 'H' குறியீடு எதனைக் குறிக்கிறது?",
      options: [
        "செஞ்சிலுவை நிதி மையம்",
        "முன்னால் மருத்துவமனை உள்ளது, ஹார்ன் அடிக்க வேண்டாம்",
        "காவல்துறை தலைமை அலுவலகம்",
        "கால்நடை மையம்"
      ],
      explanation: "அருகில் மருத்துவமனை உள்ளதால் தேவையற்ற ஹார்ன் சத்தங்களைத் தவிர்க்க வேண்டும்."
    },
    correctAnswer: 1
  },

  // 30. Petrol Pump Sign
  {
    id: 30,
    topic: 'signs',
    topicKey: 'topic_signs',
    signId: 'sign_petrol_pump',
    en: {
      question: "What does a blue square sign showing a fuel dispenser indicate?",
      options: [
        "Fire station",
        "Petrol pump / fuel filling station ahead",
        "Oil refinery ahead",
        "Pollution testing center"
      ],
      explanation: "An informatory sign indicating the presence of a fuel station along the highway or road."
    },
    hi: {
      question: "ईंधन डिस्पेंसर दर्शाने वाले नीले चौकोर संकेत का क्या अर्थ है?",
      options: [
        "फायर ब्रिगेड स्टेशन",
        "आगे पेट्रोल पंप / ईंधन स्टेशन है",
        "तेल रिफाइनरी है",
        "प्रदूषण जांच केंद्र है"
      ],
      explanation: "यह सूचनात्मक संकेत आगे उपलब्ध पेट्रोल पंप / फ्यूल स्टेशन की जानकारी देता है।"
    },
    ta: {
      question: "எரிபொருள் இயந்திரத்தைக் காட்டும் நீல நிற குறியீட்டின் பொருள் என்ன?",
      options: [
        "தீயணைப்பு நிலையம்",
        "முன்னால் பெட்ரோல் பங்க் / எரிபொருள் நிரப்பும் நிலையம் உள்ளது",
        "எண்ணெய் சுத்திகரிப்பு ஆலை",
        "புகை பரிசோதனை மையம்"
      ],
      explanation: "சாலையில் அடுத்து எரிபொருள் நிரப்பும் பெட்ரோல் நிலையம் உள்ளதை இது தெரிவிக்கிறது."
    },
    correctAnswer: 1
  },

  // 31. First Aid Post Sign
  {
    id: 31,
    topic: 'signs',
    topicKey: 'topic_signs',
    signId: 'sign_first_aid',
    en: {
      question: "What does a sign showing a red cross on a white square inside a blue background indicate?",
      options: [
        "Church or chapel",
        "First aid medical facility available ahead",
        "Danger zone",
        "Pharmacy warehouse"
      ],
      explanation: "Informs motorists of an available first-aid facility for medical emergencies."
    },
    hi: {
      question: "नीले बोर्ड पर सफेद चौकोर में लाल क्रॉस का चिन्ह क्या दर्शाता है?",
      options: [
        "चर्च या प्रार्थना स्थल",
        "आगे प्राथमिक चिकित्सा केंद्र (First Aid Post) उपलब्ध है",
        "खतरे का क्षेत्र",
        "दवाइयों का गोदाम"
      ],
      explanation: "यह संकेत बताता है कि आपातकालीन प्राथमिक उपचार के लिए प्राथमिक चिकित्सा केंद्र उपलब्ध है।"
    },
    ta: {
      question: "நீல பின்னணியில் வெள்ளை சதுரத்திற்குள் சிவப்பு சிலுவை உள்ள குறியீட்டின் பொருள் என்ன?",
      options: [
        "தேவாலயம்",
        "முதலுதவி மையம் உள்ளது (First Aid Post)",
        "ஆபத்தான பகுதி",
        "மருந்து கிடங்கு"
      ],
      explanation: "அவசர மருத்துவ தேவைக்கு முதலுதவி சிகிச்சை மையம் உள்ளதை இது குறிக்கிறது."
    },
    correctAnswer: 1
  },

  // 32. Parking Sign
  {
    id: 32,
    topic: 'signs',
    topicKey: 'topic_signs',
    signId: 'sign_parking',
    en: {
      question: "What does a blue square sign displaying the letter 'P' mean?",
      options: [
        "Police post ahead",
        "Designated parking place",
        "Pedestrian walkway",
        "Petrol station"
      ],
      explanation: "A blue sign with 'P' informs drivers that vehicle parking is officially designated here."
    },
    hi: {
      question: "नीले चौकोर बोर्ड पर बड़े अक्षर 'P' का क्या अर्थ है?",
      options: [
        "आगे पुलिस चौकी है",
        "वाहन पार्किंग की अधिकृत जगह (पार्किंग स्थल)",
        "पैदल चलने का मार्ग",
        "पेट्रोल पंप"
      ],
      explanation: "नीले बोर्ड पर 'P' अक्षर वाहन पार्क करने के लिए निर्धारित जगह को दर्शाता है।"
    },
    ta: {
      question: "நீல சதுர பலகையில் 'P' என்ற எழுத்து எதனைக் குறிக்கிறது?",
      options: [
        "காவல் நிலையம்",
        "வாகனம் நிறுத்தும் இடம் (Parking)",
        "பாதசாரிகள் பாதை",
        "பெட்ரோல் நிலையம்"
      ],
      explanation: "வாகனங்களை பாதுகாப்பாக நிறுத்த அனுமதிக்கப்பட்ட பார்க்கிங் பகுதியை இது குறிக்கிறது."
    },
    correctAnswer: 1
  },

  // 33. Compulsory Turn Left
  {
    id: 33,
    topic: 'signs',
    topicKey: 'topic_signs',
    signId: 'sign_compulsory_left',
    en: {
      question: "What does a blue circular sign with a white arrow turning left mean?",
      options: [
        "Left turn is optional",
        "Compulsory turn left; all vehicles must turn left",
        "No left turn",
        "Left side parking only"
      ],
      explanation: "Blue circular signs are mandatory regulatory directions. A left arrow means you must turn left."
    },
    hi: {
      question: "नीले गोल घेरे में बाईं ओर मुड़ते सफेद तीर का क्या अर्थ है?",
      options: [
        "बाएं मुड़ना आपकी इच्छा पर है",
        "अनिवार्य रूप से बाएं मुड़ें (Compulsory Turn Left)",
        "बाएं मुड़ना मना है",
        "केवल बाईं ओर पार्किंग"
      ],
      explanation: "नीले गोल बोर्ड में सफेद तीर अनिवार्य दिशा का निर्देश देता है। यहाँ बाएं मुड़ना अनिवार्य है।"
    },
    ta: {
      question: "நீல வட்டத்திற்குள் இடதுபுறம் திரும்பும் வெள்ளை அம்புக்குறியின் பொருள் என்ன?",
      options: [
        "இடதுபுறம் திரும்புவது உங்கள் விருப்பம்",
        "கட்டாயம் இடதுபுறம் திரும்ப வேண்டும் (Compulsory Turn Left)",
        "இடதுபுறம் திரும்பக் கூடாது",
        "இடதுபுற பார்க்கிங் மட்டும்"
      ],
      explanation: "நீல வட்டக் குறியீடுகள் கட்டாய விதியாகும்; அனைத்து வாகனங்களும் கட்டாயம் இடதுபுறமே திரும்ப வேண்டும்."
    },
    correctAnswer: 1
  },

  // 34. Slippery Road Sign
  {
    id: 34,
    topic: 'signs',
    topicKey: 'topic_signs',
    signId: 'sign_slippery_road',
    en: {
      question: "What should you do when you see a cautionary 'Slippery Road' sign?",
      options: [
        "Drive fast to clear the wet section quickly",
        "Reduce speed, avoid harsh acceleration or sudden braking",
        "Turn on hazard lights and overtake",
        "Switch to neutral gear"
      ],
      explanation: "Slippery roads reduce tire grip. Gradual deceleration and avoiding sudden steering prevents skids."
    },
    hi: {
      question: "'फिसलन भरी सड़क' (Slippery Road) का चेतावनी संकेत दिखने पर क्या करना चाहिए?",
      options: [
        "फिसलन वाले क्षेत्र से जल्दी निकलने के लिए तेज गति में चलाएं",
        "गति कम करें, अचानक ब्रेक लगाने और तेज एक्सीलरेटर से बचें",
        "हैज़र्ड लाइट जलाकर ओवरटेक करें",
        "गाड़ी न्यूट्रल गियर में डाल दें"
      ],
      explanation: "फिसलन पर टायरों की पकड़ कम हो जाती है, इसलिए धीमी गति रखें और अचानक ब्रेक न लगाएं।"
    },
    ta: {
      question: "'வழுக்கும் சாலை' (Slippery Road) எச்சரிக்கைக் குறியீட்டைக் கண்டால் என்ன செய்ய வேண்டும்?",
      options: [
        "சீக்கிரம் கடக்க வேகமாக செல்ல வேண்டும்",
        "வேகத்தைக் குறைத்து, திடீர் பிரேக் மற்றும் திடீர் திருப்பங்களைத் தவிர்க்கவும்",
        "அபாய விளக்குகளை போட்டு முந்தவும்",
        "நியூட்ரலில் வண்டியை விட வேண்டும்"
      ],
      explanation: "சாலை வழுக்கும் நிலையில் திடீர் பிரேக் அடித்தால் வாகனம் சறுக்கி விபத்து ஏற்படும், எனவே மெதுவாக செல்லவும்."
    },
    correctAnswer: 1
  },

  // 35. Minimum Age for MCWOG (Gearless Two-Wheeler)
  {
    id: 35,
    topic: 'documentation',
    topicKey: 'topic_licence_rules',
    en: {
      question: "What is the minimum age to obtain a learner licence for a motorcycle without gear (up to 50cc)?",
      options: [
        "14 years",
        "16 years (with written parental consent)",
        "18 years",
        "21 years"
      ],
      explanation: "Under the Motor Vehicles Act, the minimum age for a gearless motorcycle up to 50cc is 16 years with parental consent."
    },
    hi: {
      question: "बिना गियर वाले दोपहिया वाहन (50cc तक) का लर्नर लाइसेंस पाने की न्यूनतम आयु क्या है?",
      options: [
        "14 वर्ष",
        "16 वर्ष (माता-पिता या अभिभावक की लिखित सहमति के साथ)",
        "18 वर्ष",
        "21 वर्ष"
      ],
      explanation: "50cc तक के बिना गियर वाले दोपहिया वाहन का लाइसेंस 16 वर्ष की आयु में अभिभावक की सहमति से मिल सकता है।"
    },
    ta: {
      question: "கியர் இல்லாத இருசக்கர வாகனத்திற்கு (50cc வரை) பழகுநர் உரிமம் பெற குறைந்தபட்ச வயது என்ன?",
      options: [
        "14 வயது",
        "16 வயது (பெற்றோரின் எழுத்துப்பூர்வ ஒப்புதலுடன்)",
        "18 வயது",
        "21 வயது"
      ],
      explanation: "50cc வரையிலான கியர் இல்லாத இருசக்கர வாகனத்திற்கு பெற்றோரின் ஒப்புதலுடன் 16 வயதில் உரிமம் பெறலாம்."
    },
    correctAnswer: 1
  },

  // 36. Minimum Age for Geared Motorcycle or Car
  {
    id: 36,
    topic: 'documentation',
    topicKey: 'topic_licence_rules',
    en: {
      question: "What is the minimum age to apply for a driving licence for a motorcycle with gear (MCWG) or car (LMV)?",
      options: [
        "16 years",
        "18 years",
        "20 years",
        "21 years"
      ],
      explanation: "The minimum legal age for driving a motorcycle with gear or a light motor vehicle (car) in India is 18 years."
    },
    hi: {
      question: "गियर वाली मोटरसाइकिल (MCWG) या कार (LMV) का ड्राइविंग लाइसेंस बनवाने की न्यूनतम आयु क्या है?",
      options: [
        "16 वर्ष",
        "18 वर्ष",
        "20 वर्ष",
        "21 वर्ष"
      ],
      explanation: "गियर वाली मोटरसाइकिल और निजी कार चलाने के लिए न्यूनतम आयु 18 वर्ष पूरी होनी अनिवार्य है।"
    },
    ta: {
      question: "கியர் உள்ள மோட்டார் சைக்கிள் (MCWG) அல்லது கார் (LMV) ஓட்டுநர் உரிமம் பெற குறைந்தபட்ச வயது என்ன?",
      options: [
        "16 வயது",
        "18 வயது",
        "20 வயது",
        "21 வயது"
      ],
      explanation: "கியர் உள்ள பைக் அல்லது கார் ஓட்டுநர் உரிமத்திற்கு குறைந்தபட்சம் 18 வயது பூர்த்தியடைந்திருக்க வேண்டும்."
    },
    correctAnswer: 1
  },

  // 37. Flashing Yellow Traffic Light
  {
    id: 37,
    topic: 'rules',
    topicKey: 'topic_road_rules',
    en: {
      question: "What does a flashing yellow / amber traffic signal mean?",
      options: [
        "Stop and do not proceed under any circumstance",
        "Slow down, look both directions carefully, and proceed with caution",
        "Traffic signal is broken; ignore it completely",
        "Speed up to clear the intersection"
      ],
      explanation: "A flashing amber signal alerts drivers to slow down and enter the intersection with extra vigilance."
    },
    hi: {
      question: "ब्लिंक करती (जलती-बुझती) पीली ट्रैफिक बत्ती का क्या अर्थ है?",
      options: [
        "रुकें और किसी भी हालत में आगे न बढ़ें",
        "गति धीमी करें, दोनों तरफ सावधानी से देखें और एहतियात के साथ आगे बढ़ें",
        "सिग्नल खराब है, इसे पूरी तरह अनदेखा करें",
        "चौराहा पार करने के लिए गति बढ़ाएं"
      ],
      explanation: "ब्लिंक करती पीली बत्ती का मतलब है कि गति धीमी करके दोनों ओर देखकर सावधानीपूर्वक चौराहा पार करें।"
    },
    ta: {
      question: "மின்னி மறையும் மஞ்சள் நிற போக்குவரத்து விளக்கின் பொருள் என்ன?",
      options: [
        "முழுமையாக நின்றுவிட வேண்டும்",
        "வேகத்தைக் குறைத்து, இருபுறமும் கவனித்து எச்சரிக்கையுடன் செல்ல வேண்டும்",
        "விளக்கு பழுதடைந்துள்ளது, கண்டுகொள்ள வேண்டாம்",
        "வேகத்தை அதிகரிக்க வேண்டும்"
      ],
      explanation: "மஞ்சள் விளக்கு விட்டு விட்டு எரிந்தால் வேகத்தைக் குறைத்து எச்சரிக்கையுடன் கடக்க வேண்டும்."
    },
    correctAnswer: 1
  },

  // 38. Reversing on a Main Road
  {
    id: 38,
    topic: 'rules',
    topicKey: 'topic_road_rules',
    en: {
      question: "Reversing a motor vehicle on a busy main road or highway is:",
      options: [
        "Allowed if reversing slowly",
        "Strictly prohibited as it creates extreme accident risk",
        "Permitted at night",
        "Allowed if you missed your turn by only 50 meters"
      ],
      explanation: "Reversing on highways or busy roads is illegal and one of the most fatal collision causes."
    },
    hi: {
      question: "व्यस्त मुख्य सड़क या हाईवे पर गाड़ी को पीछे (रिवर्स) चलाना:",
      options: [
        "धीमी गति में चलाने पर अनुमति है",
        "सख्ती से मना है क्योंकि इससे गंभीर दुर्घटना का भारी जोखिम होता है",
        "रात के समय अनुमति है",
        "यदि केवल 50 मीटर मोड़ छूट गया हो तो अनुमति है"
      ],
      explanation: "हाईवे या मुख्य सड़क पर रिवर्स गियर में चलना बहुत खतरनाक और गैरकानूनी है।"
    },
    ta: {
      question: "நெடுஞ்சாலையிலோ அல்லது பரபரப்பான பிரதான சாலையிலோ வாகனத்தை பின்னோக்கி (Reverse) இயக்குவது:",
      options: [
        "மெதுவாக இயக்கும்போது அனுமதிக்கப்படும்",
        "மிகப்பெரிய விபத்து அபாயத்தை ஏற்படுத்தும் என்பதால் முற்றிலும் தடைசெய்யப்பட்டுள்ளது",
        "இரவு நேரத்தில் அனுமதிக்கப்படும்",
        "50 மீட்டர் வழி தவறியிருந்தால் அனுமதிக்கப்படும்"
      ],
      explanation: "நெடுஞ்சாலைகளில் வாகனத்தை ரிவர்ஸ் எடுப்பது கடுமையான விபத்துக்களுக்கு வழிவகுக்கும், இது தடைசெய்யப்பட்டுள்ளது."
    },
    correctAnswer: 1
  },

  // 39. Blind Spot
  {
    id: 39,
    topic: 'safety',
    topicKey: 'topic_safety',
    en: {
      question: "What is a vehicle's 'Blind Spot'?",
      options: [
        "The area directly in front of the front bumper",
        "The area around your vehicle that cannot be directly seen in the rear-view or side mirrors",
        "The space underneath the spare tire",
        "The rear passenger footwell"
      ],
      explanation: "Blind spots are areas obscured from mirror view. Drivers should turn their head briefly to check blind spots before changing lanes."
    },
    hi: {
      question: "वाहन का 'ब्लाइंड स्पॉट' (Blind Spot) क्या होता है?",
      options: [
        "सामने के बंपर के ठीक आगे का क्षेत्र",
        "वाहन के आस-पास का वह क्षेत्र जो साइड या रियर-व्यू शीशों में दिखाई नहीं देता",
        "स्पेयर टायर के नीचे की जगह",
        "गाड़ी के अंदर पीछे की सीट का फर्श"
      ],
      explanation: "ब्लाइंड स्पॉट वह क्षेत्र है जो शीशों में नजर नहीं आता, लेन बदलते समय गर्दन घुमाकर देखना आवश्यक होता है।"
    },
    ta: {
      question: "வாகனத்தின் 'பிளைண்ட் ஸ்பாட்' (Blind Spot) என்பது என்ன?",
      options: [
        "முன்பக்க பம்பருக்கு முன்னால் உள்ள பகுதி",
        "கண்ணாடியில் (Mirrors) தெரியாத வாகனத்தின் பக்கவாட்டு மற்றும் பின்பகுதி",
        "ஸ்பேர் டயருக்கு அடியில் உள்ள இடம்",
        "வாகனத்தின் உட்பகுதி"
      ],
      explanation: "பக்கவாட்டுக் கண்ணாடிகளில் தெரியாத மறைவுப் பகுதியே பிளைண்ட் ஸ்பாட் ஆகும்."
    },
    correctAnswer: 1
  },

  // 40. Seatbelt Rule
  {
    id: 40,
    topic: 'safety',
    topicKey: 'topic_safety',
    en: {
      question: "Wearing a seatbelt in a motor car is mandatory for:",
      options: [
        "Only the driver",
        "The driver and the front seat passenger only",
        "All passengers seated in seats equipped with seatbelts",
        "Seatbelts are only recommended on toll highways"
      ],
      explanation: "Wearing seatbelts is compulsory for all occupants in seats provided with seatbelts under updated motor vehicle rules."
    },
    hi: {
      question: "कार में सीटबेल्ट लगाना किसके लिए अनिवार्य है?",
      options: [
        "केवल कार चालक के लिए",
        "केवल चालक और आगे की सीट पर बैठे सहयात्री के लिए",
        "उन सभी यात्रियों के लिए जिनकी सीट पर सीटबेल्ट की सुविधा उपलब्ध है",
        "सीटबेल्ट केवल टोल हाईवे पर ही जरूरी है"
      ],
      explanation: "मोटर वाहन नियमों के तहत कार में सीटबेल्ट वाली सभी सीटों पर बैठे यात्रियों को सीटबेल्ट लगाना अनिवार्य है।"
    },
    ta: {
      question: "காரில் சீட்பெல்ட் (Seatbelt) அணிவது யாருக்கு கட்டாயமாகும்?",
      options: [
        "ஓட்டுநருக்கு மட்டும்",
        "ஓட்டுநர் மற்றும் முன்பக்க பயணிக்கு மட்டும்",
        "சீட்பெல்ட் வசதி உள்ள இருக்கைகளில் அமர்ந்திருக்கும் அனைத்து பயணிகளுக்கும்",
        "டோல்கேட் நெடுஞ்சாலைகளில் மட்டுமே கட்டாயம்"
      ],
      explanation: "மோட்டார் வாகனச் சட்டப்படி சீட்பெல்ட் உள்ள அனைத்து இருக்கைகளிலும் அமரும் பயணிகள் கட்டாயம் சீட்பெல்ட் அணிய வேண்டும்."
    },
    correctAnswer: 2
  },

  // 41. Steep Ascent Sign
  {
    id: 41,
    topic: 'signs',
    topicKey: 'topic_signs',
    signId: 'sign_steep_ascent',
    en: {
      question: "What does the warning sign showing a vehicle on an upward ramp indicate?",
      options: [
        "Steep descent ahead",
        "Steep ascent (uphill climb) ahead, shift to appropriate lower gear",
        "Overbridge ahead",
        "Car testing track"
      ],
      explanation: "Warns of a steep incline. Vehicles should be shifted to an appropriate lower gear for adequate engine torque."
    },
    hi: {
      question: "ऊपर चढ़ते वाहन का त्रिकोणीय चेतावनी संकेत क्या दर्शाता है?",
      options: [
        "आगे तीखी ढलान है",
        "आगे खड़ी चढ़ाई (Steep Ascent) है, उपयुक्त निचले गियर में गाड़ी चलाएं",
        "आगे ओवरब्रिज है",
        "कार टेस्टिंग ट्रैक है"
      ],
      explanation: "यह संकेत आगे खड़ी चढ़ाई की चेतावनी देता है। वाहन को पर्याप्त ताकत के लिए छोटे गियर में रखें।"
    },
    ta: {
      question: "மேல்நோக்கிச் செல்லும் வாகனத்தைக் காட்டும் முக்கோண எச்சரிக்கைக் குறியீட்டின் பொருள் என்ன?",
      options: [
        "செங்குத்தான இறக்கம்",
        "முன்னால் செங்குத்தான ஏற்றம் (Steep Ascent) உள்ளது, குறைந்த கியரில் இயக்கவும்",
        "மேம்பாலம் உள்ளது",
        "வாகன சோதனை தளம்"
      ],
      explanation: "முன்னால் செங்குத்தான மலை ஏற்றம் உள்ளதால் வாகனத்தை தகுந்த கீழ் கியரில் இயக்க வேண்டும்."
    },
    correctAnswer: 1
  },

  // 42. No Entry Sign
  {
    id: 42,
    topic: 'signs',
    topicKey: 'topic_signs',
    signId: 'sign_no_entry',
    en: {
      question: "What does a red circular sign with a horizontal white bar in the center mean?",
      options: [
        "Parking prohibited",
        "No Entry for all vehicles",
        "One-way road begins",
        "Speed breaker ahead"
      ],
      explanation: "The 'No Entry' sign prohibits any vehicle from entering the road or carriageway from that point."
    },
    hi: {
      question: "लाल गोल घेरे में बीच में सफेद क्षैतिज पट्टी वाले संकेत का क्या अर्थ है?",
      options: [
        "पार्किंग मना है",
        "सभी वाहनों के लिए प्रवेश निषेध (No Entry)",
        "वन-वे सड़क शुरू",
        "आगे स्पीड ब्रेकर है"
      ],
      explanation: "लाल वृत्त में सफेद आड़ी पट्टी 'नो एंट्री' यानी प्रवेश निषेध का अनिवार्य संकेत है।"
    },
    ta: {
      question: "சிவப்பு வட்டத்தின் நடுவில் வெள்ளை கிடைமட்ட பட்டை உள்ள குறியீட்டின் பொருள் என்ன?",
      options: [
        "வாகனம் நிறுத்த தடை",
        "எந்த வாகனமும் நுழையக் கூடாது (No Entry)",
        "ஒருவழிப் பாதை தொடங்குகிறது",
        "முன்னால் வேகத்தடை உள்ளது"
      ],
      explanation: "இது 'நோ என்ட்ரி' (No Entry) குறியீடாகும். இந்த வழியில் எந்த வாகனமும் நுழைய அனுமதி இல்லை."
    },
    correctAnswer: 1
  }
];

/**
 * Helper to get a randomized or sliced set of questions for test or practice
 */
export function getTestQuestions(count = 15) {
  // Return deterministic slice or shuffled
  const shuffled = [...QUESTIONS].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export function getDemoQuestions() {
  return QUESTIONS.slice(0, 3);
}
