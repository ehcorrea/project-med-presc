import { Pressable, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '@emotion/react';

import { Spancing } from '../Spacing/Spacing';
import { Text } from '../Text/Text';

export type HeaderScreenProps = {
  rightArtifact?: React.ReactElement;
  subtitle?: string;
  title: string;
};

export function HeaderScreen({
  title,
  subtitle,
  rightArtifact,
}: HeaderScreenProps) {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  return (
    <View
      className="items-center m-[5%]  justify-between"
      style={{ marginTop: insets.top }}
    >
      <View className="flex-row justify-between items-center w-full">
        <View className="flex-1">
          <Pressable>
            <Ionicons
              name="arrow-back"
              size={Number(theme.rfvalue(30))}
              color="#222"
            />
          </Pressable>
        </View>
        <View className="flex-1 h-10">
          <View className="absolute  right-0">{rightArtifact}</View>
        </View>
      </View>
      <Spancing y="5" />
      <View>
        <Text palette="black" size="huge" weight="semibold">
          {title}
        </Text>
        {subtitle && (
          <Text palette="black" color={50} weight="regular" size="large">
            {subtitle}
          </Text>
        )}
      </View>
    </View>
  );
}
