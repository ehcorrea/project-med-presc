import { useEffect, useState } from 'react';

import {
  Medication,
  Medications,
  MedicationWithAlert,
} from '@/types/medication';
import { medicationStore, profileStore } from '@/stores';
import { Profile } from '@/types/profile';
import { getNextAlert } from '@/utils';

type UseHomeScreen = {
  alerts: MedicationWithAlert[];
  totalAlerts: number;
  totalMedication: number;
};

type UseHomeScreenArgs = {
  alertsQuantity: number;
};

export function useHomeScreen({
  alertsQuantity,
}: UseHomeScreenArgs): UseHomeScreen {
  const [home, setHome] = useState<UseHomeScreen>({
    alerts: [],
    totalAlerts: 0,
    totalMedication: 0,
  });
  const { selected } = profileStore();
  const { getMedicationByProfileId } = medicationStore();

  useEffect(() => {
    const getAlerts = () => {
      if (selected) {
        setHome(
          selected.isCaregiving
            ? getDependentsAlerts(
                selected.dependents,
                medications,
                alertsQuantity
              )
            : getPersonalAlerts(
                getMedicationByProfileId(selected.id),
                alertsQuantity
              )
        );
      }
    };
    getAlerts();
  }, [selected, alertsQuantity, getMedicationByProfileId]);

  return home;
}

const getPersonalAlerts = (
  medications: Medication[],
  quantity: number
): UseHomeScreen => {
  const totalMedication = medications
    .map((medication) => ({
      ...medication,
      nextAlert: getNextAlert(medication.created, medication.interval),
    }))
    .sort(
      ({ nextAlert: a }, { nextAlert: b }) =>
        new Date(a).getTime() - new Date(b).getTime()
    );
  const alerts = totalMedication.filter(({ alert }) => !!alert);
  return {
    alerts: alerts.slice(0, quantity),
    totalAlerts: alerts.length,
    totalMedication: totalMedication.length,
  };
};

const getDependentsAlerts = (
  dependents: Profile['dependents'],
  medications: Medications,
  quantity: number
): UseHomeScreen => {
  const totalMedication = dependents
    .map((id) => {
      const profileMedications = medications[id] || [];
      return profileMedications.filter(({ alert }) => !!alert);
    })
    .flat()
    .sort(
      ({ nextNotification: a }, { nextNotification: b }) =>
        new Date(a).getTime() - new Date(b).getTime()
    );
  const alerts = totalMedication.filter(({ alert }) => !!alert);

  return {
    alerts: alerts.slice(0, quantity),
    totalAlerts: alerts.length,
    totalMedication: totalMedication.length,
  };
};
