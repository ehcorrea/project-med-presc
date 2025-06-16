import { View } from 'react-native';

import { Spancing } from '../Spacing/Spacing';
import { Text } from '../Text/Text';

import * as S from './CardMedication.styles';

export type CardMedicationProps = {
  icon: React.ReactNode;
  title: string;
  content: string;
};

export function CardMedication({ icon, title, content }: CardMedicationProps) {
  return (
    <S.Container>
      <S.ContainerIcon>{icon}</S.ContainerIcon>
      <Spancing x="10" />
      <View className="flex-1">
        <Text weight="semibold" size="medium" numberOfLines={1}>
          {title}
        </Text>
        <Text
          className="w-full pr-[5px]"
          palette="gray"
          color={50}
          numberOfLines={1}
        >
          {content}
        </Text>
      </View>
    </S.Container>
  );
}
