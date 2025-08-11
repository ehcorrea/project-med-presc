import { ScrollView, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useTheme } from '@emotion/react';

import { profileStore } from '@/stores';
import { ProfileType } from '@/types/profile';

import { AvatarProfile } from '../AvatarProfile/AvatarProfile';
import { Line } from '../Line/Line';
import { Modal } from '../Modal/Modal';
import { Spancing } from '../Spacing/Spacing';
import { Text } from '../Text/Text';

export type ModalProfileProps = { handleCloseModal: () => void; open: boolean };

export function ModalProfile({ open, handleCloseModal }: ModalProfileProps) {
  const { profiles, setSelected } = profileStore();
  const theme = useTheme();

  const handleNewProfile = () => {
    handleCloseModal();
    router.push('/criar-perfil');
  };

  const handleSelectProfile = (id: string) => {
    handleCloseModal();
    setSelected(id);
    router.push('/(tabs)/home');
  };

  return (
    <Modal open={open} variant="floating" onTouchBackground={handleCloseModal}>
      <View className="flex-1 p-[5%]">
        <View className="items-center">
          <AvatarProfile
            icon={<MaterialIcons name="person" size={38} color="white" />}
          />
          <Spancing y="8" />
          <Text
            weight="semibold"
            size="xlarge"
            numberOfLines={1}
            adjustsFontSizeToFit
          >
            Selecione ou crie um perfil
          </Text>
          <Text size="large">para continuar</Text>
        </View>
        <Spancing y="10" />
        <Line />
        <ScrollView showsVerticalScrollIndicator={false}>
          {Object.values(profiles).map(({ name, id, color, type }) => {
            if (type === ProfileType.DEPENDENT) return null;
            return (
              <View key={id}>
                <Spancing y="8" />
                <TouchableOpacity
                  className="flex-row"
                  onPress={() => handleSelectProfile(id)}
                >
                  <AvatarProfile name={name} color={color} />
                  <Spancing x="8" />
                  <View className="self-center">
                    <Text size="large">{name}</Text>
                    <Text palette="primary">{type}</Text>
                  </View>
                </TouchableOpacity>
                <Spancing y="8" />
                <Line />
              </View>
            );
          })}
        </ScrollView>
        <Spancing y="8" />
        <TouchableOpacity
          className="flex-row justify-center py-2"
          onPress={handleNewProfile}
        >
          <MaterialIcons
            name="person-add-alt"
            color="black"
            size={Number(theme.fonts.size.xhuge)}
          />
          <Spancing x="10" />
          <Text size="large" className="self-center">
            Adionar novo perfil
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}
