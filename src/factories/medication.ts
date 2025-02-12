import { Medication } from '@/types/medication';
import { MedicationValidators } from '@/utils';
import { randomUUID } from 'expo-crypto';

export function createMedication(
  medicationData: MedicationValidators
): Medication {
  const { measure, quantity, name, type, observation, interval } =
    medicationData;
  const [hr, min] = interval.split(':');

  return {
    id: randomUUID(),
    interval: { hr: Number(hr), min: Number(min) },
    measure: measure as Medication['measure'],
    name: name.trim(),
    observation,
    quantity: Number(quantity),
    type: type as Medication['type'],
  };
}
