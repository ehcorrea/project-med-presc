import { useEffect, useState } from 'react';

import { medicationStore } from '@/stores';
import { Medication } from '@/types/medication';

export type UseNofiticationArgs = {
  profileId: string;
  quantity?: number;
};

export function useNextAlerts({
  profileId,
  quantity = 0,
}: UseNofiticationArgs) {
  const [alerts, setAlerts] = useState<{ alerts: Medication[]; total: number }>(
    { alerts: [], total: 0 }
  );
  const { medications: medicationsStore } = medicationStore();

  useEffect(() => {
    const getAlerts = () => {
      const allMedicationWithAlert = (medicationsStore[profileId] || [])
        .sort(
          ({ nextNotification: a }, { nextNotification: b }) =>
            new Date(a).getTime() - new Date(b).getTime()
        )
        .filter(({ alert }) => !!alert);
      setAlerts({
        total: allMedicationWithAlert.length,
        alerts: allMedicationWithAlert.slice(0, quantity),
      });
    };
    getAlerts();
  }, [medicationsStore, profileId, quantity]);

  return alerts;
}
