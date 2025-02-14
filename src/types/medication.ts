export type Medications = Record<string, Medication[]>;

export type Medication = {
  dependentId?: string;
  id: string;
  interval: { hr: number; min: number };
  measure: keyof typeof MedicationMeasures;
  name: string;
  nextNotification: Date;
  observation?: string;
  quantity: number;
  type: keyof typeof MedicationType;
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
