import { useCallback, useEffect, useRef, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Share,
} from 'react-native';
import { ImageBackground } from 'expo-image';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';
import { useTheme } from '@emotion/react';
import Countdown from 'react-countdown';
import Popover from 'react-native-popover-view';

import { getNextAlert, pluralize, splitTimer } from '@/utils';
import { medicationStore } from '@/stores';
import {
  Medication,
  MedicationColor,
  medicationIcons,
  MedicationMeasures,
  MedicationType,
} from '@/types/medication';
import {
  Button,
  HeaderScreen,
  Layout,
  PopoverMedicationsOptions,
  Spancing,
  Text,
} from '@/components';

import { DisplayInfo } from './components';
import * as S from './DetalhesDoRemedioScreen.styles';

export function DetalhesDoRemedioScreen() {
  const [showOptions, setShowOptions] = useState(false);
  const [countdownDate, setCountdownDate] = useState<Date>();
  const { colors } = useTheme();
  const optionsRef = useRef<TouchableOpacity>(null);
  const { profileId, id } = useLocalSearchParams<{
    profileId: string;
    id: string;
  }>();

  const medication = medicationStore(({ getMedicationByProfileId }) =>
    getMedicationByProfileId(profileId).find((item) => item.id === id)
  ) as Medication;

  const measure = pluralize(
    medication.quantity,
    MedicationMeasures[medication.measure]
  ).toLocaleLowerCase();
  const instructions = `${String(medication.quantity).padStart(2, '0')} ${measure} de ${medication.name} em ${MedicationType[medication.type].toLocaleLowerCase()} a cada ${splitTimer(`${medication.interval.hr}:${medication.interval.min}`)}.`;
  const shareText = async () => {
    await Share.share({
      message: `Olá, preciso usar ${instructions} O próximo será ${countdownDate?.toLocaleString()}.`,
    });
  };

  const handleNextCountdownDate = useCallback(() => {
    const nextInterval = getNextAlert(medication.created, medication.interval);
    setCountdownDate(nextInterval);
  }, [medication]);

  useEffect(() => {
    handleNextCountdownDate();
  }, [handleNextCountdownDate]);

  return (
    <Layout>
      <ImageBackground
        contentFit="contain"
        contentPosition="top"
        source={require('@/assets/images/elipses.svg')}
      >
        <PopoverMedicationsOptions
          from={optionsRef}
          isVisible={showOptions}
          medication={medication}
          onClose={() => setShowOptions(false)}
        />
        <HeaderScreen
          rightArtifact={
            <Button.Options onPress={() => setShowOptions(true)}>
              <TouchableOpacity
                disabled
                ref={optionsRef}
                style={styles.placeholder}
              />
            </Button.Options>
          }
        />
        <View className="self-center items-center">
          <S.Shadow
            distance={6}
            startColor={MedicationColor[medication.type] + '33'}
          >
            <Popover
              backgroundStyle={{ backgroundColor: 'transparent' }}
              popoverStyle={{
                elevation: 5,
                borderRadius: 10,
                paddingHorizontal: 10,
                paddingVertical: 5,
              }}
              from={
                <S.NotificationButton
                  backgroundColor={MedicationColor[medication.type]}
                >
                  <Ionicons
                    color={colors.white.main}
                    size={20}
                    name={
                      medication.alert
                        ? 'notifications-sharp'
                        : 'notifications-off-sharp'
                    }
                  />
                </S.NotificationButton>
              }
            >
              <Text>
                Alerta{' '}
                <Text weight="semibold">
                  {medication.alert ? 'ligado' : 'desligado'}
                </Text>
              </Text>
            </Popover>
            <S.AvatarContainer color={MedicationColor[medication.type]}>
              <View>
                <MaterialCommunityIcons
                  size={75}
                  color={colors.white.main}
                  name={medicationIcons[medication.type] as 'symbol'}
                />
              </View>
            </S.AvatarContainer>
          </S.Shadow>
          <Spancing y="8" />
          <Text size="xlarge" weight="semibold">
            {medication.name}
          </Text>
          <Spancing y="2" />
          <Text size="large" palette="gray" weight="light">
            {MedicationType[medication.type]}
          </Text>
          <Spancing y="5" />
          <View className="flex-row items-center">
            <Countdown
              date={countdownDate}
              key={countdownDate?.toDateString()}
              onComplete={() => handleNextCountdownDate()}
              autoStart
              renderer={({ hours, minutes, seconds }) => (
                <Text palette="error" size="large">
                  em {hours}h {minutes}m {seconds}s
                </Text>
              )}
            />
          </View>
        </View>
        <ScrollView className="px-[5%]">
          <Text size="xlarge">Instrução</Text>
          <Spancing y="4" />
          <DisplayInfo>
            <Text size="large" palette="black">
              Utilizar {String(medication.quantity).padStart(2, '0')} {measure}{' '}
              de {medication.name} em{' '}
              {MedicationType[medication.type].toLocaleLowerCase()} a cada{' '}
              {splitTimer(
                `${medication.interval.hr}:${medication.interval.min}`
              )}
              .
            </Text>
          </DisplayInfo>
          <Spancing y="10" />
          <Text size="xlarge">Observações</Text>
          <Spancing y="4" />
          <DisplayInfo>
            {!medication.observation && (
              <Text size="large" palette="gray" color={50}>
                Sem observações
              </Text>
            )}
            {medication.observation && (
              <Text size="large" palette="black">
                {medication.observation}
              </Text>
            )}
          </DisplayInfo>
        </ScrollView>
      </ImageBackground>
      <S.Footer>
        <Button
          palette="secondary"
          color={80}
          label={{ size: 'large' }}
          onPress={shareText}
        >
          Compartilhar
        </Button>
      </S.Footer>
    </Layout>
  );
}

const styles = StyleSheet.create({
  placeholder: {
    position: 'absolute',
    left: 0,
    bottom: '50%',
  },
});
