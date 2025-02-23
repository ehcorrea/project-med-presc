import { View } from 'react-native';

import { Text } from '../Text/Text';
import { Button } from '../Button/Button';

import * as S from './HeaderScreen.styles';

export type HeaderScreenProps = {
  title?: string;
  rightButton?: React.ReactElement;
};

export function HeaderScreen({
  title = 'Adicionar Medicamento',
  rightButton,
}: HeaderScreenProps) {
  return (
    <S.Container>
      <Button.Back />
      <View className="flex-1 absolute items-center right-0 left-0">
        <Text size="large">{title}</Text>
      </View>
      {rightButton}
    </S.Container>
  );
}
