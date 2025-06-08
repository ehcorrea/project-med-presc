import { View } from 'react-native';

import { THEME } from '@/constants';

import { Text } from '../Text/Text';

export type AvatarProfileProps = {
  name?: string;
  icon?: React.ReactNode;
  color?: string;
};

export function AvatarProfile({
  name = 'Not Set',
  icon,
  color = THEME.colors.primary.main,
}: AvatarProfileProps) {
  const avatar = name[0].toUpperCase();

  return (
    <View
      className="items-center justify-center h-12 w-12 rounded-2xl"
      style={{ backgroundColor: color }}
    >
      {icon ? (
        icon
      ) : (
        <Text palette="white" size="huge" height={43} weight="bold">
          {avatar}
        </Text>
      )}
    </View>
  );
}
