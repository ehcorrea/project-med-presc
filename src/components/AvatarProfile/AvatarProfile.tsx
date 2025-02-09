import { theme } from '@/constants';
import * as S from './AvatarProfile.styles';
import { Text } from '../Text/Text';

export type AvatarProfileProps = {
  name?: string;
  icon?: React.ReactNode;
  color?: string;
};

export function AvatarProfile({
  name = 'Not Set',
  icon,
  color = theme.colors.default.primary.main,
}: AvatarProfileProps) {
  const avatar = name[0].toUpperCase();

  return (
    <S.Container color={color}>
      {icon ? (
        icon
      ) : (
        <Text palette="white" size="huge" weight="bold">
          {avatar}
        </Text>
      )}
    </S.Container>
  );
}
