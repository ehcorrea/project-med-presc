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
import React, { useRef } from 'react';

export type PressOptionsArgs = {
  medication: Medication;
  buttonRef: React.RefObject<TouchableOpacity>;
};

type CardMedicationDetailedProps = {
  medication: Medication;
  onPressOptions: (args: PressOptionsArgs) => void;
};

export function CardMedicationDetailed({
  medication,
  onPressOptions,
}: CardMedicationDetailedProps) {
  const optionsRef = useRef<TouchableOpacity>(null);

  const handlePressOptions = () => {
    if (optionsRef.current) {
      onPressOptions({ medication, buttonRef: optionsRef });
    }
  };

  const measure = pluralize(
    medication.quantity,
    MedicationMeasures[medication.measure]
  ).toLocaleLowerCase();

  return (
    <TouchableOpacity className="p-1">
      <S.Shadow>
        <S.Container>
          <S.Header backgroundColor={MedicationColor[medication.type]}>
            <View className="flex-row items-center">
              <S.IconType name={medicationIcons[medication.type]} />
              <Spancing x={4} />
              <Text palette="white">{MedicationType[medication.type]}</Text>
            </View>
            <TouchableOpacity ref={optionsRef} onPress={handlePressOptions}>
              <S.IconOptions />
            </TouchableOpacity>
          </S.Header>
          <S.Body>
            <S.IconDot
              color={MedicationColor[medication.type]}
              name={
                medication.alert
                  ? 'notifications-circle-outline'
                  : 'notifications-off-circle-outline'
              }
            />
            <Spancing x={6} />
            <Text size="large" className="flex-1" numberOfLines={1}>
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
              <Text
                weight="light"
                color={20}
                className="px-[5px]"
                adjustsFontSizeToFit
              >
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
