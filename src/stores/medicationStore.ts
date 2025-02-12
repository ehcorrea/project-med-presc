import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Medications, Medication } from '@/types/medication';

import { create } from './zustand';

type State = {
  medications: Medications;
};

type Actions = {
  setMedicationData: (profileId: string, medication: Medication) => void;
};

export const initialStateMedication: State = {
  medications: {},
};

export const medicationStore = create(
  persist<State & Actions>(
    (set, get) => ({
      ...initialStateMedication,
      setMedicationData(profileId, medication) {
        const store = get();
        const medications = store.medications;
        const medicationsById = medications[profileId];
        set({
          ...store,
          medications: {
            ...medications,
            [profileId]: { [medication.id]: medication, ...medicationsById },
          },
        });
      },
    }),
    {
      name: 'medication-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
