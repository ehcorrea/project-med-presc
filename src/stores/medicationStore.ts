import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import notifee from '@notifee/react-native';

import { Medications, Medication } from '@/types/medication';
import { onCreateTriggerNotification } from '@/utils';

import { create } from './zustand';
import { profileStore } from './profileStore';

type State = {
  medications: Medications;
};

type Actions = {
  changeAlert: (profileId: string, medicationId: string) => void;
  deleteMedication: (profileId: string, medicationId: string) => void;
  getMedicationByProfileId: (profileId?: string) => Medication[];
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
        const medicationsById = (medications[profileId] || []).filter(
          ({ id }) => id !== medication.id
        );

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
      deleteMedication(profileId, medicationId) {
        const store = get();
        const medications = store.medications;
        const medicationsById = (medications[profileId] || []).filter(
          ({ id }) => id !== medicationId
        );
        notifee.cancelTriggerNotification(medicationId);
        set({
          ...store,
          medications: {
            ...medications,
            [profileId]: medicationsById,
          },
        });
      },
      async changeAlert(profileId, medicationId) {
        const { getProfile } = profileStore.getState();
        const store = get();
        const medications = store.medications;
        const medicationsById = medications[profileId] || [];
        const medicationIndex = medicationsById.findIndex(
          ({ id }) => id === medicationId
        );
        const medicationItem = medicationsById[medicationIndex];
        const newAlert = !medicationItem.alert;
        await onCreateTriggerNotification(
          medicationItem,
          getProfile(profileId),
          newAlert
        );

        medicationsById[medicationIndex] = {
          ...medicationItem,
          alert: !medicationItem.alert,
        };

        set({
          ...store,
          medications: {
            ...medications,
            [profileId]: medicationsById,
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
