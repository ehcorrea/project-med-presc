import { Shadow as ShadowRN } from 'react-native-shadow-2';
import styled, { css } from 'styled-components/native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export const Shadow = styled(ShadowRN).attrs({
  corners: { topEnd: false, topStart: false },
  distance: 3,
  sides: { top: false },
  startColor: '#00000010',
  stretch: true,
})`
  ${({ theme }) => css`
    flex: 1;
    border-radius: ${theme.rfvalue(10)}px;
  `}
`;

export const Container = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.default.white.main};
    border-radius: ${theme.rfvalue(10)}px;
    overflow: hidden;
  `}
`;

type HeaderProps = {
  backgroundColor: string;
};

export const Header = styled.View<HeaderProps>`
  ${({ theme, backgroundColor }) => css`
    align-items: center;
    background-color: ${backgroundColor};
    flex-direction: row;
    height: ${theme.rfvalue(36)}px;
    justify-content: space-between;
    padding-horizontal: ${theme.rfvalue(16)}px;
  `}
`;

type IconProps = {
  name?: string;
};

export const IconType = styled(MaterialCommunityIcons).attrs<IconProps>(
  ({ name, theme }) => ({
    size: theme.rfvalue(20),
    color: theme.colors.default.white.main,
    name,
  })
)``;

export const IconOptions = styled(MaterialCommunityIcons).attrs<IconProps>(
  ({ theme }) => ({
    color: theme.colors.default.white.main,
    name: 'dots-horizontal',
    size: theme.rfvalue(30),
  })
)``;

export const Body = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    padding: ${theme.rfvalue(16)}px;
  `}
`;

export const IconDot = styled(Ionicons).attrs<IconProps>(
  ({ color, theme, ...props }) => ({
    color,
    size: theme.rfvalue(24),
    ...props,
  })
)``;

export const Footer = styled.View`
  ${({ theme }) => css`
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: ${theme.rfvalue(16)}px;
  `}
`;

export const IconTimer = styled(Ionicons).attrs<IconProps>(({ theme }) => ({
  color: theme.colors.default.error[80],
  name: 'time-outline',
  size: theme.rfvalue(14),
}))`
  ${({ theme }) => css`
    margin-top: ${theme.rfvalue(3)}px;
  `}
`;
