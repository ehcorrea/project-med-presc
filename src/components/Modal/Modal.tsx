import { useEffect, useState } from 'react';
import {
  StyleProp,
  ViewProps,
  ViewStyle,
  Modal as ModalRN,
  TouchableWithoutFeedback,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';

import * as S from './Modal.styles';

export type ModalProps = {
  children: React.ReactNode;
  open: boolean;
  style?: StyleProp<ViewStyle>;

  onTouchBackground?: () => void;
} & Partial<S.ContainerProps> &
  ViewProps;

export function Modal({
  open,
  children,
  variant = 'footer',
  onTouchBackground,
  ...props
}: ModalProps) {
  const [visible, setVisible] = useState(false);
  const height = useSharedValue(0);
  const progress = useDerivedValue(() =>
    withTiming(Number(!open), { duration: 500 })
  );

  const animatedModal = useAnimatedStyle(() => ({
    transform: [{ translateY: progress.value * 2 * height.value }],
  }));

  const animatedBackdrop = useAnimatedStyle(() => ({
    opacity: 1 - progress.value,
    zIndex: withDelay(500, withTiming(-1, { duration: 0 })),
  }));

  useEffect(() => {
    if (!open) {
      const timer = setTimeout(() => {
        setVisible(false);
      }, 500);

      return () => clearTimeout(timer);
    }

    setVisible(true);
  }, [open, variant]);

  return (
    <ModalRN visible={visible} transparent={true} statusBarTranslucent>
      <TouchableWithoutFeedback
        onPress={(e) => e.currentTarget === e.target && onTouchBackground?.()}
      >
        <Animated.View
          className="items-center justify-center absolute left-0 top-0 right-0 bottom-0 bg-black/50"
          style={animatedBackdrop}
        >
          {((visible && variant === 'footer') || open) && (
            <S.Container
              {...props}
              variant={variant}
              style={[animatedModal, props.style]}
              onLayout={(e) => {
                height.value = e.nativeEvent.layout.height;
              }}
            >
              {children}
            </S.Container>
          )}
        </Animated.View>
      </TouchableWithoutFeedback>
    </ModalRN>
  );
}
