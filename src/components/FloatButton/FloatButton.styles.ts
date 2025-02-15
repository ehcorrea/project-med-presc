import Animated from 'react-native-reanimated';
import styled, { css } from 'styled-components/native';
import { Entypo } from '@expo/vector-icons';

type ContainerProps = {
  x: number;
  y?: number;
};

export const Container = styled.View<ContainerProps>`
  ${({ theme, x, y }) => css`
    bottom: ${y ? `${theme.rfvalue(y)}px` : '10%'};
    position: absolute;
    right: ${theme.rfvalue(x)}px;
    z-index: 9999;
  `}
`;

export const ActionContainer = styled(Animated.View)`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.default.primary[80]};
    border-radius: 60px;
    height: ${theme.rwvalue(40)}px;
    justify-content: center;
    position: absolute;
    width: ${theme.rwvalue(40)}px;
    z-index: -1;
  `}
`;

export const Button = styled.Pressable`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.default.primary[80]};
    border-radius: 60px;
    elevation: 2;
    height: ${theme.rwvalue(40)}px;
    justify-content: center;
    shadow-color: #000;
    shadow-offset: 0px 3px;
    shadow-opacity: 0.27;
    shadow-radius: 4.65px;
    width: ${theme.rwvalue(40)}px;
  `}
`;

export const MainIcon = styled(Entypo).attrs(({ theme }) => ({
  color: theme.colors.default.white.main,
  size: theme.rfvalue(40),
}))``;
