import React from 'react';

const h = React.createElement;

/**
 * 22 Standard Indian Traffic Signs with Inline SVGs using standard React.createElement
 * Grouped into Mandatory (Regulatory), Cautionary (Warning), and Informatory
 * WCAG AA accessible with semantic labels and scalable viewBox
 */

export const TRAFFIC_SIGNS = [
  // --- MANDATORY SIGNS (Circles/Octagon/Inverted Triangle) ---
  {
    id: 'sign_stop',
    category: 'mandatory',
    code: 'M-01',
    nameKey: 'sign_stop_name',
    lessonKey: 'sign_stop_lesson',
    descKey: 'sign_stop_desc',
    renderSvg: (className = "w-20 h-20") => h(
      'svg',
      { viewBox: '0 0 100 100', className, role: 'img', 'aria-label': 'Stop Sign' },
      h('polygon', { points: '30,5 70,5 95,30 95,70 70,95 30,95 5,70 5,30', fill: '#dc2626', stroke: '#ffffff', strokeWidth: '3' }),
      h('text', { x: '50', y: '58', fill: '#ffffff', fontSize: '22', fontWeight: '800', textAnchor: 'middle', fontFamily: 'sans-serif' }, 'STOP')
    )
  },
  {
    id: 'sign_give_way',
    category: 'mandatory',
    code: 'M-02',
    nameKey: 'sign_give_way_name',
    lessonKey: 'sign_give_way_lesson',
    descKey: 'sign_give_way_desc',
    renderSvg: (className = "w-20 h-20") => h(
      'svg',
      { viewBox: '0 0 100 100', className, role: 'img', 'aria-label': 'Give Way Sign' },
      h('polygon', { points: '10,15 90,15 50,85', fill: '#ffffff', stroke: '#dc2626', strokeWidth: '12', strokeLinejoin: 'round' }),
      h('polygon', { points: '22,23 78,23 50,72', fill: '#ffffff' })
    )
  },
  {
    id: 'sign_no_entry',
    category: 'mandatory',
    code: 'M-03',
    nameKey: 'sign_no_entry_name',
    lessonKey: 'sign_no_entry_lesson',
    descKey: 'sign_no_entry_desc',
    renderSvg: (className = "w-20 h-20") => h(
      'svg',
      { viewBox: '0 0 100 100', className, role: 'img', 'aria-label': 'No Entry Sign' },
      h('circle', { cx: '50', cy: '50', r: '44', fill: '#dc2626', stroke: '#ffffff', strokeWidth: '2' }),
      h('rect', { x: '18', y: '42', width: '64', height: '16', rx: '3', fill: '#ffffff' })
    )
  },
  {
    id: 'sign_one_way',
    category: 'mandatory',
    code: 'M-04',
    nameKey: 'sign_one_way_name',
    lessonKey: 'sign_one_way_lesson',
    descKey: 'sign_one_way_desc',
    renderSvg: (className = "w-20 h-20") => h(
      'svg',
      { viewBox: '0 0 100 100', className, role: 'img', 'aria-label': 'One Way Sign' },
      h('circle', { cx: '50', cy: '50', r: '44', fill: '#ffffff', stroke: '#dc2626', strokeWidth: '8' }),
      h('line', { x1: '36', y1: '72', x2: '36', y2: '28', stroke: '#1e293b', strokeWidth: '6', strokeLinecap: 'round' }),
      h('polygon', { points: '36,20 28,32 44,32', fill: '#1e293b' }),
      h('line', { x1: '64', y1: '28', x2: '64', y2: '72', stroke: '#1e293b', strokeWidth: '6', strokeLinecap: 'round' }),
      h('polygon', { points: '64,80 56,68 72,68', fill: '#1e293b' }),
      h('line', { x1: '50', y1: '25', x2: '78', y2: '75', stroke: '#dc2626', strokeWidth: '6', strokeLinecap: 'round' })
    )
  },
  {
    id: 'sign_speed_50',
    category: 'mandatory',
    code: 'M-05',
    nameKey: 'sign_speed_50_name',
    lessonKey: 'sign_speed_50_lesson',
    descKey: 'sign_speed_50_desc',
    renderSvg: (className = "w-20 h-20") => h(
      'svg',
      { viewBox: '0 0 100 100', className, role: 'img', 'aria-label': 'Speed Limit 50 Sign' },
      h('circle', { cx: '50', cy: '50', r: '44', fill: '#ffffff', stroke: '#dc2626', strokeWidth: '9' }),
      h('text', { x: '50', y: '60', fill: '#0f172a', fontSize: '32', fontWeight: '800', textAnchor: 'middle', fontFamily: 'sans-serif' }, '50')
    )
  },
  {
    id: 'sign_no_overtaking',
    category: 'mandatory',
    code: 'M-06',
    nameKey: 'sign_no_overtaking_name',
    lessonKey: 'sign_no_overtaking_lesson',
    descKey: 'sign_no_overtaking_desc',
    renderSvg: (className = "w-20 h-20") => h(
      'svg',
      { viewBox: '0 0 100 100', className, role: 'img', 'aria-label': 'No Overtaking Sign' },
      h('circle', { cx: '50', cy: '50', r: '44', fill: '#ffffff', stroke: '#dc2626', strokeWidth: '8' }),
      h('rect', { x: '25', y: '44', width: '22', height: '18', rx: '4', fill: '#1e293b' }),
      h('circle', { cx: '28', cy: '62', r: '3', fill: '#64748b' }),
      h('circle', { cx: '44', cy: '62', r: '3', fill: '#64748b' }),
      h('rect', { x: '53', y: '38', width: '22', height: '18', rx: '4', fill: '#dc2626' }),
      h('circle', { cx: '56', cy: '56', r: '3', fill: '#ef4444' }),
      h('circle', { cx: '72', cy: '56', r: '3', fill: '#ef4444' })
    )
  },
  {
    id: 'sign_horn_prohibited',
    category: 'mandatory',
    code: 'M-07',
    nameKey: 'sign_horn_prohibited_name',
    lessonKey: 'sign_horn_prohibited_lesson',
    descKey: 'sign_horn_prohibited_desc',
    renderSvg: (className = "w-20 h-20") => h(
      'svg',
      { viewBox: '0 0 100 100', className, role: 'img', 'aria-label': 'Horn Prohibited Sign' },
      h('circle', { cx: '50', cy: '50', r: '44', fill: '#ffffff', stroke: '#dc2626', strokeWidth: '8' }),
      h('path', { d: 'M28 44 L38 44 L56 32 L56 68 L38 56 L28 56 Z', fill: '#1e293b' }),
      h('ellipse', { cx: '64', cy: '50', rx: '3', ry: '12', fill: '#1e293b' }),
      h('line', { x1: '24', y1: '24', x2: '76', y2: '76', stroke: '#dc2626', strokeWidth: '7', strokeLinecap: 'round' })
    )
  },
  {
    id: 'sign_compulsory_left',
    category: 'mandatory',
    code: 'M-08',
    nameKey: 'sign_compulsory_left_name',
    lessonKey: 'sign_compulsory_left_lesson',
    descKey: 'sign_compulsory_left_desc',
    renderSvg: (className = "w-20 h-20") => h(
      'svg',
      { viewBox: '0 0 100 100', className, role: 'img', 'aria-label': 'Compulsory Turn Left Sign' },
      h('circle', { cx: '50', cy: '50', r: '44', fill: '#1d4ed8', stroke: '#ffffff', strokeWidth: '2' }),
      h('path', { d: 'M62 70 L62 50 C62 40 54 36 40 36', fill: 'none', stroke: '#ffffff', strokeWidth: '8', strokeLinecap: 'round' }),
      h('polygon', { points: '32,36 44,26 44,46', fill: '#ffffff' })
    )
  },
  {
    id: 'sign_compulsory_ahead_right',
    category: 'mandatory',
    code: 'M-09',
    nameKey: 'sign_compulsory_ahead_right_name',
    lessonKey: 'sign_compulsory_ahead_right_lesson',
    descKey: 'sign_compulsory_ahead_right_desc',
    renderSvg: (className = "w-20 h-20") => h(
      'svg',
      { viewBox: '0 0 100 100', className, role: 'img', 'aria-label': 'Compulsory Ahead or Turn Right Sign' },
      h('circle', { cx: '50', cy: '50', r: '44', fill: '#1d4ed8', stroke: '#ffffff', strokeWidth: '2' }),
      h('line', { x1: '50', y1: '68', x2: '50', y2: '30', stroke: '#ffffff', strokeWidth: '7', strokeLinecap: 'round' }),
      h('polygon', { points: '50,22 42,34 58,34', fill: '#ffffff' }),
      h('path', { d: 'M50 56 C50 48 58 48 68 48', fill: 'none', stroke: '#ffffff', strokeWidth: '7', strokeLinecap: 'round' }),
      h('polygon', { points: '76,48 66,40 66,56', fill: '#ffffff' })
    )
  },

  // --- CAUTIONARY / WARNING SIGNS (Upright Triangles, Red Border) ---
  {
    id: 'sign_pedestrian_crossing',
    category: 'cautionary',
    code: 'C-01',
    nameKey: 'sign_pedestrian_name',
    lessonKey: 'sign_pedestrian_lesson',
    descKey: 'sign_pedestrian_desc',
    renderSvg: (className = "w-20 h-20") => h(
      'svg',
      { viewBox: '0 0 100 100', className, role: 'img', 'aria-label': 'Pedestrian Crossing Warning Sign' },
      h('polygon', { points: '50,10 92,86 8,86', fill: '#ffffff', stroke: '#dc2626', strokeWidth: '8', strokeLinejoin: 'round' }),
      h('line', { x1: '30', y1: '78', x2: '70', y2: '78', stroke: '#1e293b', strokeWidth: '3' }),
      h('line', { x1: '32', y1: '73', x2: '68', y2: '73', stroke: '#1e293b', strokeWidth: '3' }),
      h('circle', { cx: '52', cy: '40', r: '5', fill: '#1e293b' }),
      h('path', { d: 'M50 47 L50 60 L42 74 M50 60 L60 74 M42 54 L58 50', fill: 'none', stroke: '#1e293b', strokeWidth: '4', strokeLinecap: 'round' })
    )
  },
  {
    id: 'sign_school_ahead',
    category: 'cautionary',
    code: 'C-02',
    nameKey: 'sign_school_name',
    lessonKey: 'sign_school_lesson',
    descKey: 'sign_school_desc',
    renderSvg: (className = "w-20 h-20") => h(
      'svg',
      { viewBox: '0 0 100 100', className, role: 'img', 'aria-label': 'School Ahead Warning Sign' },
      h('polygon', { points: '50,10 92,86 8,86', fill: '#ffffff', stroke: '#dc2626', strokeWidth: '8', strokeLinejoin: 'round' }),
      h('circle', { cx: '44', cy: '38', r: '4.5', fill: '#1e293b' }),
      h('path', { d: 'M44 44 L44 60 L36 74 M44 60 L48 74 M36 50 L48 48', fill: 'none', stroke: '#1e293b', strokeWidth: '3.5', strokeLinecap: 'round' }),
      h('rect', { x: '33', y: '47', width: '5', height: '8', rx: '1', fill: '#dc2626' }),
      h('circle', { cx: '62', cy: '45', r: '4', fill: '#1e293b' }),
      h('path', { d: 'M62 50 L62 64 L56 74 M62 64 L66 74', fill: 'none', stroke: '#1e293b', strokeWidth: '3', strokeLinecap: 'round' })
    )
  },
  {
    id: 'sign_narrow_road',
    category: 'cautionary',
    code: 'C-03',
    nameKey: 'sign_narrow_road_name',
    lessonKey: 'sign_narrow_road_lesson',
    descKey: 'sign_narrow_road_desc',
    renderSvg: (className = "w-20 h-20") => h(
      'svg',
      { viewBox: '0 0 100 100', className, role: 'img', 'aria-label': 'Narrow Road Ahead Warning Sign' },
      h('polygon', { points: '50,10 92,86 8,86', fill: '#ffffff', stroke: '#dc2626', strokeWidth: '8', strokeLinejoin: 'round' }),
      h('path', { d: 'M32 78 L32 60 C32 50 42 46 42 36 L42 28', fill: 'none', stroke: '#1e293b', strokeWidth: '5', strokeLinecap: 'round' }),
      h('path', { d: 'M68 78 L68 60 C68 50 58 46 58 36 L58 28', fill: 'none', stroke: '#1e293b', strokeWidth: '5', strokeLinecap: 'round' })
    )
  },
  {
    id: 'sign_hairpin_right',
    category: 'cautionary',
    code: 'C-04',
    nameKey: 'sign_hairpin_right_name',
    lessonKey: 'sign_hairpin_right_lesson',
    descKey: 'sign_hairpin_right_desc',
    renderSvg: (className = "w-20 h-20") => h(
      'svg',
      { viewBox: '0 0 100 100', className, role: 'img', 'aria-label': 'Right Hairpin Bend Warning Sign' },
      h('polygon', { points: '50,10 92,86 8,86', fill: '#ffffff', stroke: '#dc2626', strokeWidth: '8', strokeLinejoin: 'round' }),
      h('path', { d: 'M42 76 L42 45 C42 32 58 32 58 45 L58 64', fill: 'none', stroke: '#1e293b', strokeWidth: '6', strokeLinecap: 'round' }),
      h('polygon', { points: '58,74 51,62 65,62', fill: '#1e293b' })
    )
  },
  {
    id: 'sign_steep_ascent',
    category: 'cautionary',
    code: 'C-05',
    nameKey: 'sign_steep_ascent_name',
    lessonKey: 'sign_steep_ascent_lesson',
    descKey: 'sign_steep_ascent_desc',
    renderSvg: (className = "w-20 h-20") => h(
      'svg',
      { viewBox: '0 0 100 100', className, role: 'img', 'aria-label': 'Steep Ascent Warning Sign' },
      h('polygon', { points: '50,10 92,86 8,86', fill: '#ffffff', stroke: '#dc2626', strokeWidth: '8', strokeLinejoin: 'round' }),
      h('polygon', { points: '28,76 72,76 72,48', fill: '#1e293b' }),
      h('rect', { x: '42', y: '48', width: '16', height: '8', rx: '2', fill: '#dc2626', transform: 'rotate(-30 42 48)' })
    )
  },
  {
    id: 'sign_roundabout',
    category: 'cautionary',
    code: 'C-06',
    nameKey: 'sign_roundabout_name',
    lessonKey: 'sign_roundabout_lesson',
    descKey: 'sign_roundabout_desc',
    renderSvg: (className = "w-20 h-20") => h(
      'svg',
      { viewBox: '0 0 100 100', className, role: 'img', 'aria-label': 'Roundabout Ahead Warning Sign' },
      h('polygon', { points: '50,10 92,86 8,86', fill: '#ffffff', stroke: '#dc2626', strokeWidth: '8', strokeLinejoin: 'round' }),
      h('circle', { cx: '50', cy: '56', r: '16', fill: 'none', stroke: '#1e293b', strokeWidth: '5', strokeDasharray: '18 12' }),
      h('polygon', { points: '50,38 42,44 54,44', fill: '#1e293b', transform: 'rotate(20 50 40)' }),
      h('polygon', { points: '66,60 62,70 70,68', fill: '#1e293b' }),
      h('polygon', { points: '34,64 42,68 36,74', fill: '#1e293b' })
    )
  },
  {
    id: 'sign_speed_breaker',
    category: 'cautionary',
    code: 'C-07',
    nameKey: 'sign_speed_breaker_name',
    lessonKey: 'sign_speed_breaker_lesson',
    descKey: 'sign_speed_breaker_desc',
    renderSvg: (className = "w-20 h-20") => h(
      'svg',
      { viewBox: '0 0 100 100', className, role: 'img', 'aria-label': 'Speed Breaker Warning Sign' },
      h('polygon', { points: '50,10 92,86 8,86', fill: '#ffffff', stroke: '#dc2626', strokeWidth: '8', strokeLinejoin: 'round' }),
      h('path', { d: 'M26 68 L36 68 C42 54 58 54 64 68 L74 68', fill: 'none', stroke: '#1e293b', strokeWidth: '6', strokeLinecap: 'round' })
    )
  },
  {
    id: 'sign_slippery_road',
    category: 'cautionary',
    code: 'C-08',
    nameKey: 'sign_slippery_road_name',
    lessonKey: 'sign_slippery_road_lesson',
    descKey: 'sign_slippery_road_desc',
    renderSvg: (className = "w-20 h-20") => h(
      'svg',
      { viewBox: '0 0 100 100', className, role: 'img', 'aria-label': 'Slippery Road Warning Sign' },
      h('polygon', { points: '50,10 92,86 8,86', fill: '#ffffff', stroke: '#dc2626', strokeWidth: '8', strokeLinejoin: 'round' }),
      h('rect', { x: '42', y: '42', width: '18', height: '10', rx: '2', fill: '#1e293b', transform: 'rotate(15 50 47)' }),
      h('path', { d: 'M38 60 Q48 64 36 72 Q44 76 34 80', fill: 'none', stroke: '#1e293b', strokeWidth: '3', strokeLinecap: 'round' }),
      h('path', { d: 'M54 58 Q64 62 52 70 Q60 74 50 78', fill: 'none', stroke: '#1e293b', strokeWidth: '3', strokeLinecap: 'round' })
    )
  },

  // --- INFORMATORY SIGNS (Blue Rectangles/Squares) ---
  {
    id: 'sign_hospital',
    category: 'informatory',
    code: 'I-01',
    nameKey: 'sign_hospital_name',
    lessonKey: 'sign_hospital_lesson',
    descKey: 'sign_hospital_desc',
    renderSvg: (className = "w-20 h-20") => h(
      'svg',
      { viewBox: '0 0 100 100', className, role: 'img', 'aria-label': 'Hospital Informatory Sign' },
      h('rect', { x: '10', y: '10', width: '80', height: '80', rx: '10', fill: '#1d4ed8', stroke: '#ffffff', strokeWidth: '2' }),
      h('rect', { x: '22', y: '22', width: '56', height: '56', rx: '6', fill: '#ffffff' }),
      h('rect', { x: '43', y: '30', width: '14', height: '40', fill: '#dc2626' }),
      h('rect', { x: '30', y: '43', width: '40', height: '14', fill: '#dc2626' })
    )
  },
  {
    id: 'sign_petrol_pump',
    category: 'informatory',
    code: 'I-02',
    nameKey: 'sign_petrol_name',
    lessonKey: 'sign_petrol_lesson',
    descKey: 'sign_petrol_desc',
    renderSvg: (className = "w-20 h-20") => h(
      'svg',
      { viewBox: '0 0 100 100', className, role: 'img', 'aria-label': 'Petrol Pump Informatory Sign' },
      h('rect', { x: '10', y: '10', width: '80', height: '80', rx: '10', fill: '#1d4ed8', stroke: '#ffffff', strokeWidth: '2' }),
      h('rect', { x: '22', y: '22', width: '56', height: '56', rx: '6', fill: '#ffffff' }),
      h('rect', { x: '32', y: '34', width: '22', height: '34', rx: '2', fill: '#1e293b' }),
      h('rect', { x: '36', y: '38', width: '14', height: '10', fill: '#ffffff' }),
      h('path', { d: 'M54 44 C62 44 64 50 64 60 L64 68', fill: 'none', stroke: '#1e293b', strokeWidth: '3', strokeLinecap: 'round' }),
      h('circle', { cx: '64', cy: '40', r: '2.5', fill: '#1e293b' })
    )
  },
  {
    id: 'sign_first_aid',
    category: 'informatory',
    code: 'I-03',
    nameKey: 'sign_first_aid_name',
    lessonKey: 'sign_first_aid_lesson',
    descKey: 'sign_first_aid_desc',
    renderSvg: (className = "w-20 h-20") => h(
      'svg',
      { viewBox: '0 0 100 100', className, role: 'img', 'aria-label': 'First Aid Post Sign' },
      h('rect', { x: '10', y: '10', width: '80', height: '80', rx: '10', fill: '#1d4ed8', stroke: '#ffffff', strokeWidth: '2' }),
      h('rect', { x: '22', y: '22', width: '56', height: '56', rx: '6', fill: '#ffffff' }),
      h('rect', { x: '44', y: '32', width: '12', height: '36', rx: '1', fill: '#dc2626' }),
      h('rect', { x: '32', y: '44', width: '36', height: '12', rx: '1', fill: '#dc2626' })
    )
  },
  {
    id: 'sign_eating_place',
    category: 'informatory',
    code: 'I-04',
    nameKey: 'sign_eating_place_name',
    lessonKey: 'sign_eating_place_lesson',
    descKey: 'sign_eating_place_desc',
    renderSvg: (className = "w-20 h-20") => h(
      'svg',
      { viewBox: '0 0 100 100', className, role: 'img', 'aria-label': 'Eating Place / Refreshment Sign' },
      h('rect', { x: '10', y: '10', width: '80', height: '80', rx: '10', fill: '#1d4ed8', stroke: '#ffffff', strokeWidth: '2' }),
      h('rect', { x: '22', y: '22', width: '56', height: '56', rx: '6', fill: '#ffffff' }),
      h('path', { d: 'M38 34 L38 48 C38 52 42 54 42 66', fill: 'none', stroke: '#1e293b', strokeWidth: '3', strokeLinecap: 'round' }),
      h('line', { x1: '34', y1: '34', x2: '34', y2: '44', stroke: '#1e293b', strokeWidth: '2.5' }),
      h('line', { x1: '42', y1: '34', x2: '42', y2: '44', stroke: '#1e293b', strokeWidth: '2.5' }),
      h('path', { d: 'M58 34 L58 48 C58 54 54 58 54 66', fill: 'none', stroke: '#1e293b', strokeWidth: '3', strokeLinecap: 'round' })
    )
  },
  {
    id: 'sign_parking',
    category: 'informatory',
    code: 'I-05',
    nameKey: 'sign_parking_name',
    lessonKey: 'sign_parking_lesson',
    descKey: 'sign_parking_desc',
    renderSvg: (className = "w-20 h-20") => h(
      'svg',
      { viewBox: '0 0 100 100', className, role: 'img', 'aria-label': 'Parking Place Sign' },
      h('rect', { x: '10', y: '10', width: '80', height: '80', rx: '10', fill: '#1d4ed8', stroke: '#ffffff', strokeWidth: '2' }),
      h('text', { x: '50', y: '68', fill: '#ffffff', fontSize: '52', fontWeight: '800', textAnchor: 'middle', fontFamily: 'sans-serif' }, 'P')
    )
  }
];

export const ROAD_RULES = [
  {
    id: 'rule_keep_left',
    titleKey: 'rule_keep_left_title',
    descKey: 'rule_keep_left_desc',
    icon: 'ArrowLeftRight'
  },
  {
    id: 'rule_helmets',
    titleKey: 'rule_helmets_title',
    descKey: 'rule_helmets_desc',
    icon: 'Shield'
  },
  {
    id: 'rule_seatbelts',
    titleKey: 'rule_seatbelts_title',
    descKey: 'rule_seatbelts_desc',
    icon: 'ShieldCheck'
  },
  {
    id: 'rule_no_phone',
    titleKey: 'rule_no_phone_title',
    descKey: 'rule_no_phone_desc',
    icon: 'PhoneOff'
  },
  {
    id: 'rule_red_signal',
    titleKey: 'rule_red_signal_title',
    descKey: 'rule_red_signal_desc',
    icon: 'OctagonAlert'
  },
  {
    id: 'rule_ambulance',
    titleKey: 'rule_ambulance_title',
    descKey: 'rule_ambulance_desc',
    icon: 'Siren'
  },
  {
    id: 'rule_zebra',
    titleKey: 'rule_zebra_title',
    descKey: 'rule_zebra_desc',
    icon: 'Footprints'
  },
  {
    id: 'rule_overtake_right',
    titleKey: 'rule_overtake_right_title',
    descKey: 'rule_overtake_right_desc',
    icon: 'Navigation'
  },
  {
    id: 'rule_no_horn_hospital',
    titleKey: 'rule_no_horn_hospital_title',
    descKey: 'rule_no_horn_hospital_desc',
    icon: 'VolumeX'
  }
];
