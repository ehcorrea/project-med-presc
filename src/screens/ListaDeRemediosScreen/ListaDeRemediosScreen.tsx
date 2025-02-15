import { useState } from 'react';
import { router } from 'expo-router';
import { FlatList, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Layout, SearchBar, Spancing, Text, FloatButton } from '@/components';
import { medicationStore, profileStore } from '@/stores';

import {
  CardMedicationDetailed,
  PopoverOptions,
  PressOptionsArgs,
} from './components';

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
      <FloatButton
        firstButton={{
          icon: <MaterialCommunityIcons size={25} color="white" name="pill" />,
          onPress: () => {
            router.push(`/remedios/cadastrar/${selected?.id}`);
          },
        }}
      />
    </Layout>
  );
}
