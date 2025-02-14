import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Medications, Medication } from '@/types/medication';
import { updateMedicationNextNotification } from '@/factories';

import { create } from './zustand';

type State = {
  medications: Medications;
};

type Actions = {
  setMedicationData: (profileId: string, medication: Medication) => void;
  getMedicationByProfileId: (profileId?: string) => Medication[];
  updateNextNofication: (
    profileId: string,
    medicationId: string,
    interval: number
  ) => void;
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
        const medicationsById = medications[profileId] || [];
        set({
          ...store,
          medications: {
            ...medications,
            [profileId]: [medication, ...medicationsById],
          },
        });
      },
      getMedicationByProfileId(id) {
        if (!id) return [];
        const { medications } = get();
        return medications[id] || [];
      },
      updateNextNofication(profileId, medicationId, interval) {
        const store = get();
        const medicationsStoraged = store.medications;
        const medications = store.medications[profileId] || [];
        const newMedications = updateMedicationNextNotification(
          medicationId,
          interval,
          medications
        );
        set({
          ...store,
          medications: {
            ...medicationsStoraged,
            [profileId]: newMedications,
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
