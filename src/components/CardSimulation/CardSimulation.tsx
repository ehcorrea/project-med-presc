import { View } from 'react-native';

import { Spancing } from '../Spacing/Spacing';
import { Text } from '../Text/Text';

import * as S from './CardSimulation.styles';

export type CardSimulationProps = {
  icon: React.ReactNode;
  title: string;
  content: string;
};

export function CardSimulation({ icon, title, content }: CardSimulationProps) {
  return (
    <S.Container>
      <S.ContainerIcon>{icon}</S.ContainerIcon>
      <Spancing x={10} />
      <View>
        <Text weight="semi" size="medium">
          {title}
        </Text>
        <S.TextContent
          palette="gray"
          color={50}
          numberOfLines={1}
          lineBreakMode="clip"
        >
          {content}
        </S.TextContent>
      </View>
    </S.Container>
  );
}
