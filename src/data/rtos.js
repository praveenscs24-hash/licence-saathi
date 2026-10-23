/**
 * Sample RTO Data for Licence Saathi Prototype
 * Covers major Indian states and sample RTO offices with simulated appointment slots
 */

export const STATES_AND_UTS = [
  { code: 'DL', name: 'Delhi', defaultRto: 'DL-01' },
  { code: 'UP', name: 'Uttar Pradesh', defaultRto: 'UP-14' },
  { code: 'MH', name: 'Maharashtra', defaultRto: 'MH-01' },
  { code: 'TN', name: 'Tamil Nadu', defaultRto: 'TN-01' },
  { code: 'KA', name: 'Karnataka', defaultRto: 'KA-01' },
  { code: 'BR', name: 'Bihar', defaultRto: 'BR-01' },
  { code: 'RJ', name: 'Rajasthan', defaultRto: 'RJ-14' },
  { code: 'WB', name: 'West Bengal', defaultRto: 'WB-01' },
  { code: 'MP', name: 'Madhya Pradesh', defaultRto: 'MP-04' },
  { code: 'GJ', name: 'Gujarat', defaultRto: 'GJ-01' },
  { code: 'HR', name: 'Haryana', defaultRto: 'HR-26' },
  { code: 'PB', name: 'Punjab', defaultRto: 'PB-10' },
  { code: 'AP', name: 'Andhra Pradesh', defaultRto: 'AP-09' },
  { code: 'TG', name: 'Telangana', defaultRto: 'TS-09' },
  { code: 'KL', name: 'Kerala', defaultRto: 'KL-01' },
  { code: 'OR', name: 'Odisha', defaultRto: 'OD-02' },
  { code: 'AS', name: 'Assam', defaultRto: 'AS-01' },
  { code: 'JH', name: 'Jharkhand', defaultRto: 'JH-01' },
  { code: 'UK', name: 'Uttarakhand', defaultRto: 'UK-07' },
  { code: 'HP', name: 'Himachal Pradesh', defaultRto: 'HP-03' }
];

export const RTOS = [
  // Uttar Pradesh
  {
    id: 'UP-14',
    stateCode: 'UP',
    stateName: 'Uttar Pradesh',
    code: 'UP-14',
    name: 'Ghaziabad RTO',
    hindiName: 'गाजियाबाद आरटीओ',
    tamilName: 'காசியாபாத் ஆர்டிஓ',
    address: 'Near Old Bus Stand, Model Town, Ghaziabad, UP',
    pincode: '201001',
    slots: ['09:30 AM - 11:00 AM', '11:30 AM - 01:00 PM', '02:00 PM - 03:30 PM', '03:45 PM - 05:00 PM']
  },
  {
    id: 'UP-16',
    stateCode: 'UP',
    stateName: 'Uttar Pradesh',
    code: 'UP-16',
    name: 'Noida RTO',
    hindiName: 'नोएडा आरटीओ',
    tamilName: 'நொய்டா ஆர்டிஓ',
    address: 'Sector 32, Noida, Gautam Buddha Nagar, UP',
    pincode: '201301',
    slots: ['10:00 AM - 11:30 AM', '12:00 PM - 01:30 PM', '02:30 PM - 04:00 PM']
  },
  {
    id: 'UP-32',
    stateCode: 'UP',
    stateName: 'Uttar Pradesh',
    code: 'UP-32',
    name: 'Lucknow Central RTO',
    hindiName: 'लखनऊ सेंट्रल आरटीओ',
    tamilName: 'லக்னோ சென்ட்ரல் ஆர்டிஓ',
    address: 'Transport Nagar, Kanpur Road, Lucknow, UP',
    pincode: '226012',
    slots: ['09:30 AM - 11:00 AM', '11:30 AM - 01:00 PM', '02:00 PM - 03:30 PM']
  },

  // Delhi
  {
    id: 'DL-01',
    stateCode: 'DL',
    stateName: 'Delhi',
    code: 'DL-01',
    name: 'Mall Road RTO (North Delhi)',
    hindiName: 'मॉल रोड आरटीओ (उत्तर दिल्ली)',
    tamilName: 'மால் ரோடு ஆர்டிஓ (வடக்கு டெல்லி)',
    address: '5/9 Under Hill Road, Civil Lines, Delhi',
    pincode: '110054',
    slots: ['10:00 AM - 11:30 AM', '12:00 PM - 01:30 PM', '02:30 PM - 04:00 PM']
  },
  {
    id: 'DL-04',
    stateCode: 'DL',
    stateName: 'Delhi',
    code: 'DL-04',
    name: 'Janakpuri RTO (West Delhi)',
    hindiName: 'जनकपुरी आरटीओ (पश्चिम दिल्ली)',
    tamilName: 'ஜனக்புரி ஆர்டிஓ (மேற்கு டெல்லி)',
    address: 'Community Centre, B-Block Janakpuri, New Delhi',
    pincode: '110058',
    slots: ['09:30 AM - 11:00 AM', '11:30 AM - 01:00 PM', '02:00 PM - 03:30 PM']
  },

  // Tamil Nadu
  {
    id: 'TN-01',
    stateCode: 'TN',
    stateName: 'Tamil Nadu',
    code: 'TN-01',
    name: 'Chennai Central RTO (Ayanavaram)',
    hindiName: 'चेन्नई सेंट्रल आरटीओ (अयानवरम)',
    tamilName: 'சென்னை மத்திய ஆர்டிஓ (அயனாவரம்)',
    address: 'Anderson Road, Ayanavaram, Chennai, Tamil Nadu',
    pincode: '600023',
    slots: ['09:30 AM - 11:00 AM', '11:30 AM - 01:00 PM', '02:30 PM - 04:00 PM']
  },
  {
    id: 'TN-07',
    stateCode: 'TN',
    stateName: 'Tamil Nadu',
    code: 'TN-07',
    name: 'Chennai South RTO (Thiruvanmiyur)',
    hindiName: 'चेन्नई साउथ आरटीओ (तिरुवान्मियूर)',
    tamilName: 'சென்னை தெற்கு ஆர்டிஓ (திருவான்மியூர்)',
    address: 'East Coast Road, Thiruvanmiyur, Chennai, Tamil Nadu',
    pincode: '600041',
    slots: ['10:00 AM - 11:30 AM', '01:00 PM - 02:30 PM', '03:00 PM - 04:30 PM']
  },
  {
    id: 'TN-37',
    stateCode: 'TN',
    stateName: 'Tamil Nadu',
    code: 'TN-37',
    name: 'Coimbatore South RTO',
    hindiName: 'कोयंबटूर दक्षिण आरटीओ',
    tamilName: 'கோயம்புத்தூர் தெற்கு ஆர்டிஓ',
    address: 'Pollachi Main Road, Coimbatore, Tamil Nadu',
    pincode: '641024',
    slots: ['10:00 AM - 11:30 AM', '11:30 AM - 01:00 PM', '02:00 PM - 03:30 PM']
  },

  // Maharashtra
  {
    id: 'MH-01',
    stateCode: 'MH',
    stateName: 'Maharashtra',
    code: 'MH-01',
    name: 'Mumbai Central RTO (Tardeo)',
    hindiName: 'मुंबई सेंट्रल आरटीओ (ताड़देव)',
    tamilName: 'மும்பை மத்திய ஆர்டிஓ (டார்டியோ)',
    address: 'Old Bodyguard Lane, Tulsiwadi, Tardeo, Mumbai',
    pincode: '400034',
    slots: ['09:30 AM - 11:00 AM', '11:30 AM - 01:00 PM', '02:00 PM - 03:30 PM']
  },
  {
    id: 'MH-12',
    stateCode: 'MH',
    stateName: 'Maharashtra',
    code: 'MH-12',
    name: 'Pune RTO',
    hindiName: 'पुणे आरटीओ',
    tamilName: 'புனே ஆர்டிஓ',
    address: 'Near Sangam Bridge, Pune Station Road, Pune',
    pincode: '411001',
    slots: ['10:00 AM - 11:30 AM', '12:00 PM - 01:30 PM', '02:30 PM - 04:00 PM']
  },

  // Karnataka
  {
    id: 'KA-01',
    stateCode: 'KA',
    stateName: 'Karnataka',
    code: 'KA-01',
    name: 'Bengaluru Central RTO (Koramangala)',
    hindiName: 'बेंगलुरु सेंट्रल आरटीओ (कोरमंगला)',
    tamilName: 'பெங்களூரு மத்திய ஆர்டிஓ (கோரமங்களா)',
    address: 'BDC Complex, 3rd Block, Koramangala, Bengaluru',
    pincode: '560034',
    slots: ['09:30 AM - 11:00 AM', '11:30 AM - 01:00 PM', '02:30 PM - 04:00 PM']
  },

  // Bihar
  {
    id: 'BR-01',
    stateCode: 'BR',
    stateName: 'Bihar',
    code: 'BR-01',
    name: 'Patna DTO / RTO',
    hindiName: 'पटना डीटीओ / आरटीओ',
    tamilName: 'பாட்னா டிடிஓ / ஆர்டிஓ',
    address: 'Gandhi Maidan, Collectorate Compound, Patna, Bihar',
    pincode: '800001',
    slots: ['10:00 AM - 11:30 AM', '12:00 PM - 01:30 PM', '02:00 PM - 03:30 PM']
  },

  // Rajasthan
  {
    id: 'RJ-14',
    stateCode: 'RJ',
    stateName: 'Rajasthan',
    code: 'RJ-14',
    name: 'Jaipur South RTO',
    hindiName: 'जयपुर दक्षिण आरटीओ',
    tamilName: 'ஜெய்ப்பூர் தெற்கு ஆர்டிஓ',
    address: 'Jhalana Doongri, Jaipur, Rajasthan',
    pincode: '302004',
    slots: ['10:00 AM - 11:30 AM', '12:00 PM - 01:30 PM', '02:30 PM - 04:00 PM']
  }
];

export function getRtosByState(stateCode) {
  const filtered = RTOS.filter(r => r.stateCode === stateCode);
  if (filtered.length > 0) return filtered;
  return RTOS.slice(0, 3);
}

export function getRtoById(id) {
  return RTOS.find(r => r.id === id) || RTOS[0];
}
