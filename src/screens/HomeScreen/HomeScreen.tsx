import { FlatList, TouchableOpacity, View } from 'react-native';
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
import { useHomeScreen } from '@/hooks';

import { EmptyAlerts } from './components';

import * as S from './HomeScreen.styles';

export function HomeScreen() {
  const { selected } = profileStore();
  const { alerts, totalAlerts, totalMedication } = useHomeScreen({
    alertsQuantity: 4,
  });

  return (
    <Layout>
      <HeaderUser />
      <View className="p-[5%] flex-1 ">
        <View>
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
        </View>
        <Spancing y={20} />
        <View>
          <Text weight="semi" size="xlarge">
            Informações
          </Text>
          <Spancing y={8} />
          <View className="flex-row justify-between">
            <CardSquare
              label="Medicações"
              info={String(totalMedication).padStart(2, '0')}
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
              info={String(totalAlerts).padStart(2, '0')}
              icon={
                <MaterialCommunityIcons
                  name="alert-circle"
                  size={24}
                  color="white"
                />
              }
            />
          </View>
        </View>
        <Spancing y={20} />
        <View className="flex-5">
          <View className="flex-row justify-between items-end">
            <Text weight="semi" size="xlarge">
              Próximos alertas
            </Text>
            {!!totalAlerts && (
              <TouchableOpacity>
                <Text palette="primary">ver mais</Text>
              </TouchableOpacity>
            )}
          </View>
          <Spancing y={8} />
          <FlatList
            className="flex-1"
            data={alerts}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={<EmptyAlerts />}
            ItemSeparatorComponent={() => <Spancing y={2} />}
            keyExtractor={({ id, nextNotification }) =>
              `${id}.${nextNotification}`
            }
            renderItem={({ item: alert }) => (
              <CardMedicationPersonal medication={alert} countdown />
            )}
          />
        </View>
      </View>
    </Layout>
  );
}
