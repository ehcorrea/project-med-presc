import { Text } from '../Text/Text';

import * as S from './CardSquare.styles';

export type CardSquareProps = {
  label: string;
  icon: React.ReactElement;
  info: string;
};

export function CardSquare({ label, icon, info }: CardSquareProps) {
  return (
    <S.Container>
      {icon}
      <Text className="mt-1" palette="white" size="large" adjustsFontSizeToFit>
        {info}
      </Text>
      <Text
        weight="semibold"
        palette="white"
        size="medium"
        adjustsFontSizeToFit
        numberOfLines={1}
      >
        {label}
      </Text>
    </S.Container>
  );
}
