import { View } from 'react-native';
import { ImageBackground } from 'expo-image';

import { Spancing } from '@/components';

import * as S from './InicioScreen.styles';

export function InicioScreen() {
  const handleEntrarComEmail = () => {};

  return (
    <ImageBackground
      className="flex-1"
      contentFit="cover"
      source={require('@/assets/images/background_inicio.png')}
    >
      <S.BackgroundLinearGradient>
        <View className="flex-1">
          <View className="flex-2 mt-[20%]">
            <S.Title palette="gray" size={300}>
              Bem-vindo ao
            </S.Title>
            <S.Title palette="primary" size={50}>
              Med Presc
            </S.Title>
            <S.Subtitle>Seu parceiro em cuidados diários.</S.Subtitle>
          </View>
          <View className="flex-1 items-center justify-center">
            <Spancing y={10} />
            <S.ButtonLogin onPress={handleEntrarComEmail}>
              <S.TextLogin>Começar</S.TextLogin>
            </S.ButtonLogin>
          </View>
        </View>
      </S.BackgroundLinearGradient>
    </ImageBackground>
  );
}
