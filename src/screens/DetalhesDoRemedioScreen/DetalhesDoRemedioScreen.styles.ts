import { ImageBackground } from 'expo-image';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Shadow as ShadowRN } from 'react-native-shadow-2';
import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

import { Input } from '@/components';

export const Background = styled(ImageBackground).attrs({
  contentFit: 'contain',
  source: require('@/assets/images/details.svg'),
  contentPosition: 'top',
})`
  flex: 1;
`;

export const Shadow = styled(ShadowRN).attrs(({ startColor, ...props }) => {
  return {
    distance: 15,
    offset: [1, 2],
    startColor: `${startColor}15`,
    ...props,
  };
})`
  ${({ theme }) => css`
    border-radius: ${theme.rfvalue(90)}px;
  `}
`;

export type AvatarContainerProps = {
  color: string;
};

export const AvatarContainer = styled.View<AvatarContainerProps>`
  ${({ theme, color }) => css`
    align-items: center;
    background-color: ${color}bb;
    border-color: aliceblue;
    border-radius: 190px;
    border-width: 10px;
    height: ${theme.rfvalue(110)}px;
    justify-content: center;
    overflow: hidden;
    width: ${theme.rfvalue(110)}px;
  `}
`;

type NotificationButtonProps = {
  backgroundColor: string;
};

export const NotificationButton = styled.TouchableOpacity<NotificationButtonProps>`
  ${({ theme, backgroundColor }) => css`
    background-color: ${backgroundColor}bb;
    border-color: ${theme.colors.default.white.main};
    border-radius: ${theme.rfvalue(90)}px;
    border-width: ${theme.rfvalue(3)}px;
    left: ${theme.rwvalue(-12)}px;
    padding: ${theme.rfvalue(3)}px;
    position: absolute;
    top: ${theme.rhvalue(10)}px;
    z-index: 99;
  `}
`;
type IconProps = {
  name?: string;
  alert?: boolean;
};

export const NotificationIcon = styled(Ionicons).attrs<IconProps>(
  ({ theme, alert }) => ({
    color: theme.colors.default.white.main,
    name: alert ? 'notifications-sharp' : 'notifications-off-sharp',
    size: theme.rfvalue(20),
  })
)``;

export const PlaceholderButton = styled(TouchableOpacity)`
  bottom: 50%;
  left: 0;
  position: absolute;
`;

export const IconMedication = styled(MaterialCommunityIcons).attrs<IconProps>(
  ({ name, theme }) => ({
    size: theme.rfvalue(75),
    color: theme.colors.default.white.main,
    name,
  })
)``;

export const DisplayInput = styled(Input).attrs(({ theme }) => {
  return {
    containerProps: { style: { height: theme.rhvalue(90) } },
    editable: false,
    labelProps: { size: 'large' },
    multiline: true,
    numberOfLines: 4,
    textAlignVertical: 'top',
  };
})``;

export const Footer = styled.View`
  bottom: 5%;
  left: 0;
  padding-horizontal: 5%;
  position: absolute;
  right: 0;
`;
