import { FlatList, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Entypo } from '@expo/vector-icons';
import { useTheme } from '@emotion/react';

import { profileStore } from '@/stores';
import { useHomeScreen } from '@/hooks';
import {
  CardMedicationPersonal,
  CardSquare,
  Layout,
  SearchBar,
  Spancing,
  Text,
} from '@/components';

import { EmptyAlerts } from './components';

export function HomeScreen() {
  const theme = useTheme();
  const { selected } = profileStore();
  const { alerts, totalAlerts, totalMedication } = useHomeScreen({
    alertsQuantity: 20,
  });

  return (
    <Layout>
      <View className="px-[5%] flex-1 ">
        <View>
          <SearchBar
            button={
              <TouchableOpacity
                className="items-center justify-center bg-primary-main rounded-[14px] h-12 w-12 rotate-90"
                onPress={() =>
                  router.push(`/remedios/cadastrar/${selected?.id}`)
                }
              >
                <Entypo name="sound" size={28} color="white" />
              </TouchableOpacity>
            }
          />
        </View>
        <Spancing y="20" />
        <View>
          <Text weight="semibold" size="xlarge">
            Informações
          </Text>
          <Spancing y="8" />
          <View className="flex-row justify-between">
            <CardSquare
              label="Medicações"
              info={String(totalMedication).padStart(2, '0')}
              icon={
                <MaterialCommunityIcons
                  name="pill"
                  size={Number(theme.fonts.size.xlarge)}
                  color="white"
                />
              }
            />
            <Spancing x="4" />
            <CardSquare
              label="Tomados"
              info="20"
              icon={
                <MaterialCommunityIcons
                  name="lotion-plus"
                  size={Number(theme.fonts.size.xlarge)}
                  color="white"
                />
              }
            />
            <Spancing x="4" />
            <CardSquare
              label="Alertas"
              info={String(totalAlerts).padStart(2, '0')}
              icon={
                <MaterialCommunityIcons
                  name="alert-circle"
                  size={Number(theme.fonts.size.xlarge)}
                  color="white"
                />
              }
            />
          </View>
        </View>
        <View className="flex-5">
          {alerts.length ? (
            <>
              <Spancing y="20" />
              <View className="flex-row justify-between items-end">
                <Text weight="semibold" size="xlarge">
                  Próximos alertas
                </Text>
                {!!totalAlerts && (
                  <TouchableOpacity>
                    <Text palette="primary">ver mais</Text>
                  </TouchableOpacity>
                )}
              </View>
              <Spancing y="8" />
              <FlatList
                className="flex-1"
                data={alerts}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 5 }}
                ItemSeparatorComponent={() => <Spancing y="2" />}
                keyExtractor={({ id }) => id}
                renderItem={({ item: alert }) => (
                  <CardMedicationPersonal medication={alert} countdown />
                )}
              />
            </>
          ) : (
            <View className=" flex-1 items-center justify-center">
              <EmptyAlerts />
            </View>
          )}
        </View>
      </View>
    </Layout>
  );
}
