const pharmacies = [
  { name: 'Hospital A', location: [-1.2921, 36.8219] },
  { name: 'Hospital B', location: [-1.2915, 36.8203] },
  { name: 'Hospital C', location: [-1.2910, 36.8190] },
  { name: 'Hospital D', location: [-1.2927, 36.8225] },
  { name: 'Hospital E', location: [-1.2935, 36.8250] },
  { name: 'Hospital F', location: [-1.2905, 36.8238] },
];

  const diseases = [
    {
      name: 'Common Cold',
      symptoms: ['Runny nose','Chills', 'Body aches', 'Cough'],
      recommendedMedicines: ['Paracetamol', 'Ibuprofen'],
      pharmacy: { name: 'Hospital A', location: [-1.2921, 36.8219]  },
      price: 'Ksh.350',
      preventation:"Do not take too much of cold drinks.",
      management: "How to manage this disease",
      doctor: "Dentist"
    },
    {
      name: 'Flu',
      symptoms: ['Fever', 'Chills', 'Body aches', 'Cough'],
      recommendedMedicines: ['Paracetamol', 'Ibuprofen'],
      pharmacy: { name: 'Hospital B', location: [-1.2915, 36.8203] },
      price: 'Ksh.350',
      preventation:"Do not take too much of cold drinks.",
      management: "How to manage this disease",
      doctor: "Dentist"
    },
    {
      name: 'COVID-19',
      symptoms: ['Fever', 'Cough', 'Shortness of breath', 'Fatigue'],
      recommendedMedicines: ['Paracetamol', 'Ibuprofen'],
      pharmacy: { name: 'Hospital C', location: [-1.2910, 36.8190]},
      price: 'Ksh.350',
      preventation:"Do not take too much of cold drinks.",
      management: "How to manage this disease",
      doctor: "Dentist"
    },
    {
      name: 'Allergies',
      symptoms: ['Sneezing', 'Runny or stuffy nose', 'Itchy or watery eyes', 'Cough'],
      recommendedMedicines: ['Paracetamol', 'Ibuprofen'],
      pharmacy: { name: 'Hospital D', location: [-1.2927, 36.8225] },
      price: 'Ksh.350',
      preventation:"Do not take too much of cold drinks.",
      management: "How to manage this disease",
      doctor: "Dentist"
    },
    {
      name: 'Migraine',
      symptoms: ['Intense headache', 'Sensitivity to light or sound', 'Nausea or vomiting', 'Visual disturbances (aura)'],
      recommendedMedicines: ['Paracetamol', 'Ibuprofen'],
      pharmacy: { name: 'Hospital A', location: [-1.2935, 36.8250]  },
      price: 'Ksh.350',
      preventation:"Do not take too much of cold drinks.",
      management: "How to manage this disease",
      doctor:'Dentist'
    },
    {
      name: 'Gastroenteritis (Stomach Flu)',
      symptoms: ['Nausea', 'Vomiting', 'Diarrhea', 'Stomach cramps'],
      recommendedMedicines: ['Paracetamol', 'Ibuprofen'],
      pharmacy: { name: 'Hospital B', location: [-1.2905, 36.8238] },
      price: 'Ksh.350',
      preventation:"Do not take too much of cold drinks.",
      management: "How to manage this disease",
      doctor: "Dentist"
    },
  ];

  export {pharmacies, diseases}