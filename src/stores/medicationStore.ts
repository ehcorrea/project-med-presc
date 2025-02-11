import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { MedicationData, Medication } from '@/types/medication';

import { create } from './zustand';

type State = {
  data: MedicationData;
};

type Actions = {
  setMedicationData: (id: string, medication: Medication) => void;
};

export const initialStateMedication: State = {
  data: {},
};

export const medicationStore = create(
  persist<State & Actions>(
    (set, get) => ({
      ...initialStateMedication,
      setMedicationData(id, medication) {
        const store = get();
        const data = store.data;
        const dataId = data[id];
        set({ ...store, data: { ...data, [id]: [...dataId, medication] } });
      },
    }),
    {
      name: 'medication-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
