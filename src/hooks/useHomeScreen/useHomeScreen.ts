import { useEffect, useState } from 'react';

import { Medication, Medications } from '@/types/medication';
import { medicationStore, profileStore } from '@/stores';
import { Profile } from '@/types/profile';

type UseHomeScreen = {
  alerts: Medication[];
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
  const { medications } = medicationStore();

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
            : getPersonalAlerts(selected.id, medications, alertsQuantity)
        );
      }
    };
    getAlerts();
  }, [medications, selected, alertsQuantity]);

  return home;
}

const getPersonalAlerts = (
  profileId: string,
  medications: Medications,
  quantity: number
): UseHomeScreen => {
  const profileMedications = medications[profileId] || [];
  const totalMedication = profileMedications.sort(
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
