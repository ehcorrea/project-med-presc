import { useEffect, useState } from 'react';
import {
  StyleProp,
  ViewProps,
  ViewStyle,
  Modal as ModalRN,
  TouchableWithoutFeedback,
} from 'react-native';
import {
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
  variant?: 'footer' | 'floating';
  onTouchBackground?: () => void;
} & ViewProps;

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
  }, [open]);

  return (
    <ModalRN visible={visible} transparent={true}>
      <TouchableWithoutFeedback
        onPress={(e) => e.currentTarget === e.target && onTouchBackground?.()}
      >
        <S.Backdrop style={animatedBackdrop}>
          <S.Modal
            {...props}
            testID="modal-shape"
            variant={variant}
            style={[animatedModal, props.style]}
            onLayout={(e) => {
              height.value = e.nativeEvent.layout.height;
            }}
          >
            {visible && children}
          </S.Modal>
        </S.Backdrop>
      </TouchableWithoutFeedback>
    </ModalRN>
  );
}
