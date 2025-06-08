import { View } from 'react-native';
import { ImageBackground } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';

import { useLogin } from '@/hooks';
import { AvatarProfile, ModalProfile, Text } from '@/components';

import * as S from './InicioScreen.styles';

export function InicioScreen() {
  const { login, openModal, handleCloseModal } = useLogin();

  return (
    <ImageBackground
      className="flex-1"
      contentFit="cover"
      source={require('@/assets/images/background-inicio.png')}
    >
      <LinearGradient
        className="flex-1 p-[5%] "
        colors={['#191B2F', '#494D6330', '#494D6370']}
      >
        <View className="flex-1">
          <View className="flex-2 mt-[20%]">
            <Text.Title
              adjustsFontSizeToFit
              color={50}
              customSize={90}
              numberOfLines={1}
              palette="gray"
            >
              Bem-vindo ao
            </Text.Title>
            <Text.Title
              adjustsFontSizeToFit
              color={50}
              customSize={50}
              numberOfLines={1}
              palette="primary"
            >
              Med Presc
            </Text.Title>
            <Text
              className="text-[#cdd8f8] mt-[15x]"
              palette="primary"
              size="xlarge"
            >
              Seu parceiro em cuidados diários.
            </Text>
          </View>
          <View className="flex-1 items-center justify-center">
            <AvatarProfile />
          </View>
          <View className="flex-1 items-center justify-center">
            <S.ButtonLogin onPress={login}>
              <Text size="large" className="text-white mt-1" weight="semibold">
                Começar
              </Text>
            </S.ButtonLogin>
          </View>
        </View>
      </LinearGradient>
      <ModalProfile open={openModal} handleCloseModal={handleCloseModal} />
    </ImageBackground>
  );
}
