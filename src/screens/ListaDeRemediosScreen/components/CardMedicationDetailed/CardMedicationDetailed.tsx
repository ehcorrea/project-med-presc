import { TouchableOpacity, View } from 'react-native';

import {
  Medication,
  MedicationColor,
  medicationIcons,
  MedicationMeasures,
  MedicationType,
} from '@/types/medication';
import { Line, Spancing, Text } from '@/components';
import { pluralize } from '@/utils';

import * as S from './CardMedicationDetailed.styles';

type CardMedicationDetailedProps = {
  medication: Medication;
};

export function CardMedicationDetailed({
  medication,
}: CardMedicationDetailedProps) {
  const measure = pluralize(
    medication.quantity,
    MedicationMeasures[medication.measure]
  ).toLocaleLowerCase();
  return (
    <TouchableOpacity>
      <S.Shadow>
        <S.Container>
          <S.Header backgroundColor={MedicationColor[medication.type]}>
            <View className="flex-row items-center">
              <S.IconType name={medicationIcons[medication.type]} />
              <Spancing x={4} />
              <Text palette="white">{MedicationType[medication.type]}</Text>
            </View>
            <TouchableOpacity>
              <S.IconOptions />
            </TouchableOpacity>
          </S.Header>
          <S.Body>
            <S.IconDot color={MedicationColor[medication.type]} />
            <Spancing x={6} />
            <Text size="large" className="flex-1">
              {String(medication.quantity).padStart(2, '0')} {measure} de{' '}
              {medication.name}.
            </Text>
          </S.Body>
          <View className="flex-row">
            <Spancing x={8} />
            <Line />
            <Spancing x={8} />
          </View>
          <S.Footer>
            <View className="flex-row items-center">
              <S.IconTimer />
              <Spancing x={3} />
              <Text weight="light" palette="error" color={80}>
                {String(medication.interval.hr).padStart(2, '0')}h{' '}
                {String(medication.interval.min).padStart(2, '0')}m
              </Text>
            </View>
            {!!medication.observation && (
              <Text weight="light" color={20}>
                Possui observação
              </Text>
            )}
            <Text weight="light" color={20}>
              {new Date(medication.created).toLocaleDateString()}
            </Text>
          </S.Footer>
        </S.Container>
      </S.Shadow>
    </TouchableOpacity>
  );
}
