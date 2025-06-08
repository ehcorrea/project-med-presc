import Animated from 'react-native-reanimated';
import styled, { css } from '@emotion/native';

export type ModalProps = {
  variant: 'footer' | 'floating';
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

export const Container = styled(Animated.View)<ModalProps>`
  ${({ theme, variant }) => css`
    background-color: ${theme.colors.white.main};
    position: absolute;
    z-index: 1;

    ${modalModifiers[variant]()}
  `}
`;
