import notifee, {
  AndroidImportance,
  IntervalTrigger,
  TimeUnit,
  TriggerType,
} from '@notifee/react-native';
import {
  Medication,
  MedicationMeasures,
  MedicationType,
} from '@/types/medication';
import { Profile } from '@/types/profile';

import { pluralize } from '../string/string';

export async function onCreateTriggerNotification(
  medication: Medication,
  profile: Profile
) {
  const { body, interval } = createNotificationPopUp(medication, profile);
  const channelId = await notifee.createChannel({
    id: 'med-presc-medication',
    name: 'Medication Alerts',
    importance: AndroidImportance.HIGH,
  });

  // const trigger: TimestampTrigger = {
  //   type: TriggerType.TIMESTAMP,
  //   timestamp: Date.now() + 3000, // fire in 3 hours
  //   repeatFrequency: RepeatFrequency.WEEKLY,
  // };

  const trigger: IntervalTrigger = {
    interval,
    timeUnit: TimeUnit.MINUTES,
    type: TriggerType.INTERVAL,
  };

  await notifee.createTriggerNotification(
    {
      ...body,
      android: {
        channelId: channelId,
      },
    },
    trigger
  );
}

function createNotificationPopUp(medication: Medication, profile: Profile) {
  const {
    quantity,
    name,
    id,
    interval: { hr, min },
    type,
  } = medication;
  const measure = pluralize(
    medication.quantity,
    MedicationMeasures[medication.measure]
  ).toLocaleLowerCase();

  const body = {
    id,
    title: profile.isDependent
      ? `Hora do medicamento de ${profile.name}`
      : 'Hora do seu medicamento',
    body: `${String(quantity).padStart(2, '0')} ${measure} de ${name}(${MedicationType[type]})`,
  };

  return { body, interval: hr * 60 + min };
}
