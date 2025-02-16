import { randomUUID } from 'expo-crypto';

import { Medication } from '@/types/medication';
import { MedicationValidators } from '@/utils';
import { Profile } from '@/types/profile';

export function createMedication(
  medicationData: MedicationValidators,
  profile: Profile
): Medication {
  const { measure, quantity, name, type, observation, interval } =
    medicationData;
  const [hr, min] = interval.split(':').map((timer) => Number(timer));

  return {
    id: randomUUID(),
    interval: { hr, min },
    measure: measure as Medication['measure'],
    name: name.trim(),
    observation,
    quantity: Number(quantity),
    type: type as Medication['type'],
    dependentId: profile.isDependent ? profile.id : undefined,
    alert: true,
    created: new Date(),
  };
}
