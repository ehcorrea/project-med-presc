import { Shadow as ShadowRN } from 'react-native-shadow-2';
import styled, { css } from '@emotion/native';

export const Shadow = styled(ShadowRN)`
  border-radius: 10px;
  flex: 1;
`;

export const Container = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.white.main};
    border-radius: 10px;
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

export const Body = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    padding: ${theme.rfvalue(16)}px;
  `}
`;

export const Footer = styled.View`
  ${({ theme }) => css`
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: ${theme.rfvalue(16)}px;
  `}
`;
