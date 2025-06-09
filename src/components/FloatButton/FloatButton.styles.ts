import Animated from 'react-native-reanimated';
import styled, { css } from '@emotion/native';

type ContainerProps = {
  x: string;
  y?: string;
};

export const Container = styled.View<ContainerProps>`
  ${({ x, y }) => css`
    bottom: ${y}px;
    position: absolute;
    right: ${x}px;
    z-index: 9999;
  `}
`;

export const ActionContainer = styled(Animated.View)`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.primary[80]};
    border-radius: 60px;
    height: 40px;
    justify-content: center;
    position: absolute;
    width: 40px;
    z-index: 9999;
  `}
`;

export const Button = styled.Pressable`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.primary[80]};
    border-radius: 60px;
    elevation: 2;
    height: 45px;
    justify-content: center;
    shadow-color: #000;
    shadow-offset: 0px 3px;
    shadow-opacity: 0.27;
    shadow-radius: 4.65px;
    width: 45px;
  `}
`;
