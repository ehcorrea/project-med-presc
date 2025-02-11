import { View } from 'react-native';

import { Text } from '../Text/Text';
import { Button } from '../Button/Button';

import * as S from './HeaderScreen.styles';

export function HeaderScreen() {
  return (
    <S.Container>
      <Button.Back />
      <View className="flex-1 absolute items-center right-0 left-0">
        <Text size="large">Adicionar Medicamentos</Text>
      </View>
    </S.Container>
  );
}
