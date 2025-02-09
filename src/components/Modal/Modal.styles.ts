import Animated from 'react-native-reanimated';
import styled, { css } from 'styled-components/native';

export type ModalProps = {
  variant?: 'footer' | 'floating';
};

const modalModifiers = {
  footer: () => css`
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    bottom: 0;
    max-height: 90%;
    width: 100%;
  `,
  floating: () => css`
    border-radius: 50px;
    max-height: 70%;
    width: 90%;
  `,
};

export const Backdrop = styled(Animated.View)`
  align-items: center;
  background-color: #00000080;
  bottom: 0;
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

export const Modal = styled(Animated.View)<ModalProps>`
  ${({ theme, variant = 'footer' }) => css`
    background-color: ${theme.colors.default.white.main};
    position: absolute;
    z-index: 1;

    ${modalModifiers[variant]()}
  `}
`;
