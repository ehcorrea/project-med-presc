import { MaterialCommunityIcons } from '@expo/vector-icons';
import Countdown from 'react-countdown';
import {
  MedicationMeasures,
  MedicationType,
  MedicationWithAlert,
} from '@/types/medication';
import { pluralize } from '@/utils';

import { CardMedication } from '../CardMedication/CardMedication';

export type CardMedicationPersonalProps = {
  medication: MedicationWithAlert;
  countdown?: boolean;
};

const medicationIcons = {
  AEROSOL: 'spray',
  CAPSULE: 'pill',
  CREAM: 'lotion',
  ENEMA: 'water',
  IMPLANT: 'card-bulleted',
  INJECTION: 'needle',
  LOTION: 'lotion-plus',
  LOZENGE: 'pill',
  OINTMENT: 'lotion',
  PATCH: 'bandage',
  POWDER: 'flask',
  SPRAY: 'spray',
  SUPPOSITORY: 'pill',
  SYRUP: 'bottle-tonic',
  TABLET: 'pill',
};

export function CardMedicationPersonal({
  medication,
  countdown,
}: CardMedicationPersonalProps) {
  const iconName = medicationIcons[medication.type] as unknown;
  const quantity = String(medication.quantity).padStart(2, '0');
  const measure = pluralize(
    medication.quantity,
    MedicationMeasures[medication.measure]
  ).toLocaleLowerCase();

  return (
    <Countdown
      date={medication.nextAlert}
      autoStart={countdown}
      renderer={({ hours, minutes, seconds }) => (
        <CardMedication
          icon={
            <MaterialCommunityIcons
              name={iconName as undefined}
              size={24}
              color="white"
            />
          }
          title={`${quantity} ${measure} de ${medication.name} em ${MedicationType[medication.type].toLocaleLowerCase()}`}
          content={`Em ${hours}h ${minutes}m ${seconds}s`}
        />
      )}
    />
  );
}
