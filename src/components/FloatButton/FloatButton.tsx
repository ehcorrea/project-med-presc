import { useState } from 'react';
import { PressableProps, TouchableOpacity } from 'react-native';
import { useTheme } from '@emotion/react';
import { Entypo } from '@expo/vector-icons';
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

import * as S from './FloatButton.styles';

type FloatButtonProps = {
  firstButton: { icon: React.ReactElement; onPress: () => void };
  mainButtonProps?: (open: boolean) => PressableProps | void;
  position?: [string, string | undefined];
  secondButton?: { icon: React.ReactElement; onPress: () => void };
};

export function FloatButton({
  firstButton,
  secondButton,
  position: [x, y] = ['10', '10'],
  mainButtonProps,
}: FloatButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  const firstBtn = useSharedValue(0);
  const secondBtn = useSharedValue(0);
  const mainButton = useSharedValue(1);

  const firstButtonAnimated = useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: firstBtn.value },
        { scale: interpolate(firstBtn.value, [-55, 0], [1, 0]) },
      ],
    };
  }, []);

  const secondButtonAnimated = useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: interpolate(secondBtn.value, [-100, 0], [-40, 0]) },
        { translateX: interpolate(secondBtn.value, [-70, 0], [-40, 0]) },
        { scale: interpolate(secondBtn.value, [-80, 0], [1, 0]) },
      ],
    };
  }, []);

  const mainButtonAnimated = useAnimatedStyle(() => {
    return {
      transform: [
        { rotate: `${interpolate(mainButton.value, [0, 1], [90, 0])}deg` },
      ],
      opacity: mainButton.value,
    };
  }, []);

  const secondaryButtonAnimated = useAnimatedStyle(() => {
    return {
      transform: [
        { rotate: `${interpolate(mainButton.value, [0, 1], [0, -90])}deg` },
      ],
    };
  }, []);

  const handleOpen = () => {
    const newOpenState = !isOpen;
    setIsOpen(newOpenState);

    if (isOpen) {
      mainButton.value = withTiming(1, { duration: 400 });
      firstBtn.value = withDelay(
        400,
        withTiming(0, {
          duration: 400,
          easing: Easing.bezierFn(0.35, 0, 0.65, -0.55),
        })
      );
      secondBtn.value = withDelay(
        200,
        withTiming(0, {
          duration: 400,
          easing: Easing.bezierFn(0.35, 0, 0.65, -0.55),
        })
      );
    } else {
      mainButton.value = withTiming(0, { duration: 400 });
      firstBtn.value = withSpring(-55, { damping: 10 });
      secondBtn.value = withDelay(200, withSpring(-80, { damping: 10 }));
    }
  };

  const handleButtonPress = (buttonAction: () => void) => {
    if (isOpen) {
      buttonAction();
      handleOpen();
    }
  };

  return (
    <S.Container x={x} y={y}>
      <S.Button
        {...mainButtonProps?.(isOpen)}
        onPress={handleOpen}
        accessibilityState={{ expanded: isOpen }}
      >
        <Animated.View style={mainButtonAnimated}>
          <Entypo name="plus" size={40} color={theme.colors.white.main} />
        </Animated.View>
        <Animated.View className="absolute" style={secondaryButtonAnimated}>
          <Entypo name="minus" size={40} color={theme.colors.white.main} />
        </Animated.View>
      </S.Button>

      {firstButton && (
        <S.ActionContainer style={firstButtonAnimated}>
          <TouchableOpacity
            className="h-full w-full items-center justify-center"
            onPress={() => handleButtonPress(firstButton.onPress)}
            disabled={!isOpen}
          >
            {firstButton.icon}
          </TouchableOpacity>
        </S.ActionContainer>
      )}

      {secondButton && (
        <S.ActionContainer
          style={secondButtonAnimated}
          testID="view-second-button"
        >
          <TouchableOpacity
            accessibilityRole="button"
            onPress={() => handleButtonPress(secondButton.onPress)}
            disabled={!isOpen}
          >
            {secondButton.icon}
          </TouchableOpacity>
        </S.ActionContainer>
      )}
    </S.Container>
  );
}
