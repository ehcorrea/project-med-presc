export type Medications = Record<string, Medication[]>;

export type Medication = {
  alert: boolean;
  dependentId?: string;
  id: string;
  interval: { hr: number; min: number };
  measure: keyof typeof MedicationMeasures;
  name: string;
  nextNotification: Date;
  observation?: string;
  quantity: number;
  type: keyof typeof MedicationType;
  dependentName?: string;
  created: Date;
};

export enum MedicationType {
  AEROSOL = 'Aerosol',
  CAPSULE = 'Cápsula',
  CREAM = 'Creme',
  ENEMA = 'Enema',
  IMPLANT = 'Implante',
  INJECTION = 'Injeção',
  LOTION = 'Loção',
  LOZENGE = 'Pastilha',
  OINTMENT = 'Pomada',
  PATCH = 'Adesivo',
  POWDER = 'Pó',
  SPRAY = 'Spray',
  SUPPOSITORY = 'Supositório',
  SYRUP = 'Xarope',
  TABLET = 'Comprimido',
}

export enum MedicationColor {
  AEROSOL = '#1E90FF',
  CAPSULE = '#FF4500',
  CREAM = '#FF6347',
  ENEMA = '#228B22',
  IMPLANT = '#483D8B',
  INJECTION = '#DC143C',
  LOTION = '#FF69B4',
  LOZENGE = '#FFD700',
  OINTMENT = '#FF8C00',
  PATCH = '#4169E1',
  POWDER = '#808080',
  SPRAY = '#00BFFF',
  SUPPOSITORY = '#8A2BE2',
  SYRUP = '#FF1493',
  TABLET = '#20B2AA',
}

export const medicationIcons = {
  AEROSOL: 'spray',
  CAPSULE: 'pill',
  CREAM: 'lotion',
  ENEMA: 'water',
  IMPLANT: 'card-bulleted',
  INJECTION: 'needle',
  LOTION: 'lotion-plus',
  LOZENGE: 'pill',
  OINTMENT: 'lotion',
  PATCH: 'bandage',
  POWDER: 'flask',
  SPRAY: 'spray',
  SUPPOSITORY: 'pill',
  SYRUP: 'bottle-tonic',
  TABLET: 'pill',
};

export enum MedicationMeasures {
  AMPOULE = 'Ampola',
  DOSE = 'Dose',
  DROP = 'Gota',
  G = 'Grama',
  MG = 'Miligrama',
  ML = 'Mililitro',
  TABLESPOON = 'Colher de sopa',
  TEASPOON = 'Colher de chá',
  UNIT = 'Unidade',
}

export type KeyofMedicationMeasures = keyof typeof MedicationMeasures;
export type KeyofMedicationType = keyof typeof MedicationType;
