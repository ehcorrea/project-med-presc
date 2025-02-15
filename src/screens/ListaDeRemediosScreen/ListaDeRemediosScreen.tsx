import { FlatList, View } from 'react-native';

import { Layout, SearchBar, Spancing, Text } from '@/components';
import { medicationStore, profileStore } from '@/stores';

import {
  CardMedicationDetailed,
  PopoverOptions,
  PressOptionsArgs,
} from './components';
import { useState } from 'react';

export function ListaDeRemediosScreen() {
  const [options, setOptions] = useState<PressOptionsArgs | null>(null);
  const { selected } = profileStore();
  const { getMedicationByProfileId } = medicationStore();

  return (
    <Layout>
      <View className="p-[5%] flex-1 ">
        <SearchBar button={<View />} />
        <Spancing y={10} />
        <Text weight="semi" size="large">
          Em progesso
        </Text>
        <Spancing y={8} />
        <FlatList
          className="flex-1"
          showsVerticalScrollIndicator={false}
          data={getMedicationByProfileId(selected!.id)}
          contentContainerStyle={{ padding: '2%' }}
          ItemSeparatorComponent={() => <Spancing y={4} />}
          renderItem={({ item }) => (
            <CardMedicationDetailed
              medication={item}
              onPressOptions={setOptions}
            />
          )}
        />
      </View>
      <PopoverOptions onClose={() => setOptions(null)} {...options} />
    </Layout>
  );
}
