import { FlatList, View } from 'react-native';

import { Layout, SearchBar, Spancing, Text } from '@/components';
import { medicationStore, profileStore } from '@/stores';

import { CardMedicationDetailed } from './components';

export function ListaDeRemediosScreen() {
  const { selected } = profileStore();
  const { getMedicationByProfileId } = medicationStore();
  return (
    <Layout>
      <View className="p-[5%] flex-1 ">
        <View>
          <SearchBar button={<View />} />
          <Spancing y={10} />
          <Text weight="semi" size="large">
            Em progesso
          </Text>
          <Spancing y={8} />
          <FlatList
            data={getMedicationByProfileId(selected!.id)}
            contentContainerStyle={{ padding: '2%' }}
            ItemSeparatorComponent={() => <Spancing y={8} />}
            renderItem={({ item }) => (
              <CardMedicationDetailed medication={item} />
            )}
          />
        </View>
      </View>
    </Layout>
  );
}
