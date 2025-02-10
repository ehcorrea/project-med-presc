import { ScrollView, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

import { profileStore } from '@/stores';

import { AvatarProfile } from '../AvatarProfile/AvatarProfile';
import { Line } from '../Line/Line';
import { Modal } from '../Modal/Modal';
import { Spancing } from '../Spacing/Spacing';
import { Text } from '../Text/Text';

export type ModalProfileProps = { handleCloseModal: () => void; open: boolean };

export function ModalProfile({ open, handleCloseModal }: ModalProfileProps) {
  const { profiles } = profileStore();

  const handleNewProfile = () => {
    handleCloseModal();
    router.push('/criar-perfil');
  };

  return (
    <Modal open={open} variant="floating" onTouchBackground={handleCloseModal}>
      <View className="flex-1 p-[10%]">
        <View className="items-center">
          <AvatarProfile
            icon={<MaterialIcons name="person" size={38} color="white" />}
          />
          <Spancing y={8} />
          <Text
            weight="semi"
            size="xlarge"
            numberOfLines={1}
            adjustsFontSizeToFit
          >
            Selecione ou crie um perfil
          </Text>
          <Text size="large">para continuar</Text>
        </View>
        <Spancing y={10} />
        <ScrollView showsVerticalScrollIndicator={false}>
          {Object.values(profiles).map(({ name, id, color, type }) => (
            <View key={id}>
              <Line />
              <Spancing y={8} />
              <TouchableOpacity className="flex-row">
                <AvatarProfile name={name} color={color} />
                <Spancing x={8} />
                <View className="self-center">
                  <Text size="large">{name}</Text>
                  <Text palette="primary">{type}</Text>
                </View>
              </TouchableOpacity>
              <Spancing y={8} />
            </View>
          ))}
        </ScrollView>

        <Line />
        <Spancing y={8} />
        <TouchableOpacity
          className="flex-row justify-center"
          onPress={handleNewProfile}
        >
          <MaterialIcons name="person-add-alt" size={30} color="black" />
          <Spancing x={10} />
          <Text size="medium" className="self-center">
            Adionar novo perfil
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}
