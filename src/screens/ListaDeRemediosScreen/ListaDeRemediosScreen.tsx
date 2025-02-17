import { useState } from 'react';
import { router } from 'expo-router';
import { FlatList, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Layout, SearchBar, Spancing, FloatButton, Text } from '@/components';
import { medicationStore, profileStore } from '@/stores';

import {
  CardMedicationDetailed,
  EmptyList,
  PopoverOptions,
  PressOptionsArgs,
} from './components';

export function ListaDeRemediosScreen() {
  const [options, setOptions] = useState<PressOptionsArgs | null>(null);
  const { selected } = profileStore();
  const { getMedicationByProfileId } = medicationStore();

  return (
    <Layout>
      <View className="px-[5%] flex-1 ">
        <SearchBar button={<View />} />
        <Spancing y={20} />
        <Text weight="semi" size="xlarge">
          Remédios cadastrados
        </Text>
        <Spancing y={8} />
        <FlatList
          ListEmptyComponent={<EmptyList />}
          showsHorizontalScrollIndicator={false}
          data={getMedicationByProfileId(selected!.id)}
          ItemSeparatorComponent={() => <Spancing y={8} />}
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
