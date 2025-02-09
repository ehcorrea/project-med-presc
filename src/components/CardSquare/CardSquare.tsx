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
      <Text weight="semi" palette="white" size="large">
        {info}
      </Text>
      <Text weight="semi" palette="white" size="small">
        {label}
      </Text>
    </S.Container>
  );
}
