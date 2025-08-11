import { Shadow as ShadowRN } from 'react-native-shadow-2';
import { TouchableOpacity } from 'react-native';
import styled, { css } from '@emotion/native';

export const Shadow = styled(ShadowRN)`
  border-radius: 90px;
`;

export type AvatarContainerProps = {
  color: string;
};

export const AvatarContainer = styled.View<AvatarContainerProps>`
  ${({ color }) => css`
    align-items: center;
    background-color: ${color}bb;
    border-color: aliceblue;
    border-radius: 190px;
    border-width: 10px;
    height: 110px;
    justify-content: center;
    overflow: hidden;
    width: 110px;
  `}
`;

type NotificationButtonProps = {
  backgroundColor: string;
};

export const NotificationButton = styled.TouchableOpacity<NotificationButtonProps>`
  ${({ theme, backgroundColor }) => css`
    background-color: ${backgroundColor}bb;
    border-color: ${theme.colors.white.main};
    border-radius: 90px;
    border-width: 3px;
    left: -12px;
    padding: 3px;
    position: absolute;
    top: 10px;
    z-index: 99;
  `}
`;

export const PlaceholderButton = styled(TouchableOpacity)`
  bottom: 50%;
  left: 0;
  position: absolute;
`;

export const Footer = styled.View`
  bottom: 5%;
  left: 0;
  padding-horizontal: 5%;
  position: absolute;
  right: 0;
`;
