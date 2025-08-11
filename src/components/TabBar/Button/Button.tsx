import { useEffect } from 'react';
import { Pressable, PressableProps } from 'react-native';
import { useTheme } from '@emotion/react';
import { FontAwesome5 } from '@expo/vector-icons';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import { tabBarRoutes } from '@/utils';

import { Spancing } from '../../Spacing/Spacing';
import { Text } from '../../Text/Text';

type ButtonProps = {
  name: string;
  isFocused: boolean;
} & PressableProps;

export function Button({ isFocused = false, name, onPress }: ButtonProps) {
  const scale = useSharedValue(0);
  const theme = useTheme();
  const { title, icon } = tabBarRoutes[name];

  useEffect(() => {
    scale.value = withSpring(isFocused ? 1 : 0, { duration: 350 });
  }, [isFocused, scale]);

  const viewStyle = useAnimatedStyle(() => {
    const scaleValue = interpolate(scale.value, [0, 1], [1, 1.4]);
    const top = interpolate(scale.value, [0, 1], [0, 10]);
    return {
      transform: [{ scale: scaleValue }],
      top,
    };
  });

  const textStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scale.value, [0, 1], [1, 0]);
    return {
      opacity,
    };
  });

  return (
    <Pressable onPress={onPress} className="items-center">
      <Animated.View style={viewStyle}>
        <FontAwesome5
          name={icon}
          isFocused={isFocused}
          size={Number(theme.fonts.size.xlarge)}
          color={isFocused ? theme.colors.primary.main : theme.colors.gray[50]}
        />
      </Animated.View>
      <Spancing y="2" />
      <Animated.View style={textStyle}>
        <Text weight="semibold" palette="gray" color={50}>
          {title}
        </Text>
      </Animated.View>
    </Pressable>
  );
}
