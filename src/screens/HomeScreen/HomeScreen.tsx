import { ScrollView, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

import {
  CardMedicationPersonal,
  CardSquare,
  HeaderUser,
  Layout,
  SearchBar,
  Spancing,
  Text,
} from '@/components';
import { profileStore } from '@/stores';
import { useNextAlerts } from '@/hooks';

import * as S from './HomeScreen.styles';

export function HomeScreen() {
  const { selected } = profileStore();
  const { alerts, total } = useNextAlerts({
    profileId: selected!.id,
    quantity: 4,
  });

  return (
    <Layout>
      <HeaderUser />
      <ScrollView className="flex-1">
        <View className="p-[5%]">
          <SearchBar
            button={
              <S.FilterButton
                onPress={() =>
                  router.push(`/remedios/cadastrar/${selected?.id}`)
                }
              >
                <S.FilterIcon name="sound-mix" />
              </S.FilterButton>
            }
          />
          <Spancing y={10} />
          <Text>banner</Text>
          <Spancing y={10} />
          <Text weight="semi" size="xlarge">
            Informações
          </Text>
          <Spancing y={8} />
          <View className="flex-row justify-between">
            <CardSquare
              label="Medicações"
              info="05"
              icon={
                <MaterialCommunityIcons name="pill" size={24} color="white" />
              }
            />
            <CardSquare
              label="Tomados"
              info="20"
              icon={
                <MaterialCommunityIcons
                  name="lotion-plus"
                  size={24}
                  color="white"
                />
              }
            />
            <CardSquare
              label="Alertas"
              info={String(total).padStart(2, '0')}
              icon={
                <MaterialCommunityIcons
                  name="alert-circle"
                  size={24}
                  color="white"
                />
              }
            />
          </View>
          <Spancing y={10} />
          <View className="flex-row justify-between items-end">
            <Text weight="semi" size="xlarge">
              Próximos alertas
            </Text>
            <Text palette="primary">ver mais</Text>
          </View>
          <Spancing y={8} />
          {alerts.map((alert) => (
            <View key={`${alert.id}.${alert.nextNotification}`}>
              <CardMedicationPersonal
                medication={alert}
                key={`${alert.id}.${alert.nextNotification}`}
                countdown
              />
              <Spancing y={5} />
            </View>
          ))}
        </View>
      </ScrollView>
    </Layout>
  );
}
