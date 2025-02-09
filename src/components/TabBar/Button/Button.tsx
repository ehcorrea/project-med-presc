import { useEffect } from 'react';
import { Pressable, PressableProps } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import { tabBarRoutes } from '@/utils';

import * as S from './Button.styles';

type ButtonProps = {
  name: string;
} & PressableProps &
  S.TitleProps;

export function Button({ isFocused, name, onPress }: ButtonProps) {
  const scale = useSharedValue(0);
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
      <Animated.View style={viewStyle} testID="view-icon">
        <S.Icon
          name={icon as never}
          isFocused={isFocused}
          accessibilityLabel="icon"
        />
      </Animated.View>
      <Animated.View style={textStyle} testID="view-text">
        <S.Title isFocused={isFocused}>{title}</S.Title>
      </Animated.View>
    </Pressable>
  );
}
