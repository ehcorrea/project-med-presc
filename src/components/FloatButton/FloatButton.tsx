import { useRef } from 'react';
import { PressableProps, TouchableOpacity } from 'react-native';
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
  mainButtonProps?: (open: boolean) => PressableProps;
  position?: [number, number | undefined];
  secondButton?: { icon: React.ReactElement; onPress: () => void };
};

export function FloatButton({
  firstButton,
  secondButton,
  position: [x, y] = [10, undefined],
  mainButtonProps,
}: FloatButtonProps) {
  const open = useRef(false);
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
        { rotateZ: `${interpolate(mainButton.value, [0, 1], [90, 0])} deg` },
      ],
      opacity: mainButton.value,
    };
  }, []);

  const secondaryButtonAnimated = useAnimatedStyle(() => {
    return {
      transform: [
        { rotateZ: `${interpolate(mainButton.value, [0, 1], [0, -90])} deg` },
      ],
    };
  }, []);

  const handleOpen = () => {
    if (open.current) {
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
    open.current = !open.current;
  };

  return (
    <S.Container x={x} y={y}>
      <S.Button
        {...mainButtonProps?.(open.current)}
        onPress={handleOpen}
        accessibilityState={{ expanded: open.current }}
      >
        <Animated.View style={mainButtonAnimated} testID="view-main-icon">
          <S.MainIcon name="plus" />
        </Animated.View>
        <Animated.View
          className="absolute"
          style={secondaryButtonAnimated}
          testID="view-secondary-icon"
        >
          <S.MainIcon name="minus" />
        </Animated.View>
      </S.Button>
      {firstButton && (
        <S.ActionContainer
          style={firstButtonAnimated}
          testID="view-first-button"
        >
          <TouchableOpacity
            accessibilityRole="button"
            onPress={() => {
              handleOpen();
              firstButton.onPress();
            }}
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
            onPress={() => {
              handleOpen();
              secondButton.onPress();
            }}
          >
            {secondButton.icon}
          </TouchableOpacity>
        </S.ActionContainer>
      )}
    </S.Container>
  );
}
