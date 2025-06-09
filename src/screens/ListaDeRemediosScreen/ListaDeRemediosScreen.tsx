import { useState } from 'react';
import { router } from 'expo-router';
import { FlatList, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { medicationStore, profileStore } from '@/stores';
import {
  Layout,
  SearchBar,
  Spancing,
  FloatButton,
  Text,
  PopoverMedicationsOptions,
} from '@/components';

import {
  CardMedicationDetailed,
  CardMedicationOnPressOptions,
  EmptyList,
} from './components';

export function ListaDeRemediosScreen() {
  const [options, setOptions] = useState<CardMedicationOnPressOptions | null>(
    null
  );
  const { selected } = profileStore();
  const { getMedicationByProfileId } = medicationStore();
  const medications = getMedicationByProfileId(selected?.id);

  const onPressAddMedication = () =>
    router.push(`/remedios/cadastrar/${selected?.id}`);

  return (
    <Layout>
      <View className="px-[5%] flex-1 ">
        <SearchBar />
        {medications.length ? (
          <>
            <Text weight="semibold" size="xlarge">
              Remédios cadastrados
            </Text>
            <Spancing y="8" />
            <FlatList
              ListEmptyComponent={<EmptyList />}
              showsVerticalScrollIndicator={false}
              data={getMedicationByProfileId(selected!.id)}
              ItemSeparatorComponent={() => <Spancing y="8" />}
              renderItem={({ item }) => (
                <CardMedicationDetailed
                  onPress={() =>
                    router.push(`/remedios/detalhes/${selected?.id}/${item.id}`)
                  }
                  medication={item}
                  onPressOptions={setOptions}
                />
              )}
            />
          </>
        ) : (
          <View className="flex-1 items-center justify-center">
            <EmptyList />
          </View>
        )}
      </View>
      <PopoverMedicationsOptions
        onClose={() => setOptions(null)}
        isVisible={!!options}
        {...options}
      />
      <FloatButton
        firstButton={{
          icon: <MaterialCommunityIcons size={25} color="white" name="pill" />,
          onPress: onPressAddMedication,
        }}
      />
    </Layout>
  );
}
