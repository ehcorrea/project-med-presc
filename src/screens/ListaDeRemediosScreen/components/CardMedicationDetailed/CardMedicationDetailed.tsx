import { TouchableOpacity, View } from 'react-native';
import { useRef } from 'react';

import { pluralize } from '@/utils';
import {
  Medication,
  MedicationColor,
  medicationIcons,
  MedicationMeasures,
  MedicationType,
} from '@/types/medication';
import {
  Line,
  PopoverMedicationsOptionsProps,
  Spancing,
  Text,
} from '@/components';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '@emotion/react';

import * as S from './CardMedicationDetailed.styles';

export type CardMedicationOnPressOptions = Pick<
  PopoverMedicationsOptionsProps,
  'medication' | 'from'
>;

type CardMedicationDetailedProps = {
  medication: Medication;
  onPressOptions: (args: CardMedicationOnPressOptions) => void;
  onPress: () => void;
};

export function CardMedicationDetailed({
  medication,
  onPressOptions,
  onPress,
}: CardMedicationDetailedProps) {
  const optionsRef = useRef<TouchableOpacity>(null);
  const { colors } = useTheme();
  const handlePressOptions = () => {
    if (optionsRef.current) {
      onPressOptions({ medication, from: optionsRef });
    }
  };

  const measure = pluralize(
    medication.quantity,
    MedicationMeasures[medication.measure]
  ).toLocaleLowerCase();

  return (
    <TouchableOpacity className="p-1" onPress={onPress}>
      <S.Shadow
        corners={{ topEnd: false, topStart: false }}
        distance={3}
        sides={{ top: false }}
        startColor="#00000010"
        stretch={true}
      >
        <S.Container>
          <S.Header backgroundColor={MedicationColor[medication.type]}>
            <View className="flex-row items-center">
              <MaterialCommunityIcons
                name={medicationIcons[medication.type] as 'symbol'}
                size={20}
                color={colors.white.main}
              />
              <Spancing x="4" />
              <Text palette="white">{MedicationType[medication.type]}</Text>
            </View>
            <TouchableOpacity
              ref={optionsRef}
              onPress={handlePressOptions}
              hitSlop={20}
            >
              <MaterialCommunityIcons
                color={colors.white.main}
                name="dots-horizontal"
                size={30}
              />
            </TouchableOpacity>
          </S.Header>
          <S.Body>
            <Ionicons
              size={24}
              color={MedicationColor[medication.type]}
              name={
                medication.alert
                  ? 'notifications-circle-outline'
                  : 'notifications-off-circle-outline'
              }
            />
            <Spancing x="6" />
            <Text size="large" className="flex-1 mt-1" numberOfLines={1}>
              {String(medication.quantity).padStart(2, '0')} {measure} de{' '}
              {medication.name}.
            </Text>
          </S.Body>
          <View className="flex-row">
            <Spancing x="8" />
            <Line />
            <Spancing x="8" />
          </View>
          <S.Footer>
            <View className="flex-row items-center">
              <Ionicons
                className="mt-[3px]"
                color={colors.error[80]}
                name="time-outline"
                size={14}
              />
              <Spancing x="3" />
              <Text weight="light" palette="error" color={80}>
                {String(medication.interval.hr).padStart(2, '0')}h{' '}
                {String(medication.interval.min).padStart(2, '0')}m
              </Text>
            </View>
            {!!medication.observation && (
              <Text
                weight="light"
                color={80}
                className="px-[5px]"
                adjustsFontSizeToFit
                palette="secondary"
              >
                Possui observação
              </Text>
            )}
            <Text weight="light" color={80}>
              {new Date(medication.created).toLocaleDateString()}
            </Text>
          </S.Footer>
        </S.Container>
      </S.Shadow>
    </TouchableOpacity>
  );
}
