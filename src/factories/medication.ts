import { randomUUID } from 'expo-crypto';
import { Medication } from '@/types/medication';
import { Profile } from '@/types/profile';
import { MedicationValidators } from '@/utils';

export function createMedication(
  medicationData: MedicationValidators,
  profile: Profile
): Medication {
  const { measure, quantity, name, type, observation, interval } =
    medicationData;
  const [hr, min] = interval.split(':').map((timer) => Number(timer));

  const nextNotification = new Date();
  const hoursToMilliseconds = hr * 60 * 60 * 1000;
  const minutesToMilliseconds = min * 60 * 1000;

  nextNotification.setTime(
    nextNotification.getTime() + hoursToMilliseconds + minutesToMilliseconds
  );

  return {
    id: randomUUID(),
    interval: { hr, min },
    measure: measure as Medication['measure'],
    name: name.trim(),
    observation,
    quantity: Number(quantity),
    type: type as Medication['type'],
    dependentId: profile.isDependent ? profile.id : undefined,
    nextNotification,
    alert: true,
    created: new Date(),
  };
}

export function updateMedicationNextNotification(
  medicationId: string,
  interval: number,
  medications: Medication[]
) {
  const index = medications.findIndex((item) => item.id === medicationId);
  const medicationsList = [...medications];
  if (index !== -1) {
    const medication = { ...medicationsList[index] };
    const newDate = new Date(medication.nextNotification);
    const nextNotification = new Date(
      newDate.setTime(newDate.getTime() + interval * 60 * 1000)
    );
    medicationsList[index] = { ...medication, nextNotification };
  }
  return medicationsList;
}
