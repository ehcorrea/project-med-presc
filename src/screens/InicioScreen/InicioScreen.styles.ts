import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';
import { LinearGradient, LinearGradientProps } from 'expo-linear-gradient';

import { Text } from '@/components';

export const BackgroundLinearGradient = styled(LinearGradient).attrs<
  Partial<LinearGradientProps>
>({
  colors: ['#191B2F', '#494D6330', '#494D6370'],
})`
  flex: 1;
  padding: 5%;
`;

type TitleProps = {
  size: number;
};

export const Title = styled(Text.Title).attrs({
  adjustsFontSizeToFit: true,
  color: 80,
  numberOfLines: 1,
})<TitleProps>`
  ${({ theme, size }) => css`
    font-size: ${theme.rfvalue(size)}px;
    line-height: ${theme.rfvalue(55)}px;
  `}
`;

export const Subtitle = styled(Text).attrs({ size: 'xlarge' })`
  ${({ theme }) => css`
    color: #cdd7f8;
    line-height: ${theme.rfvalue(30)}px;
    margin-top: ${theme.rhvalue(15)}px;
  `}
`;

export const TextSocial = styled(Text).attrs({
  adjustsFontSizeToFit: true,
  numberOfLines: 1,
  size: 'large',
  weight: 'medium',
})`
  ${({ theme }) => css`
    color: ${theme.colors.default.white.main};
    flex: 1;
    margin-horizontal: ${theme.rwvalue(20)}px;
    text-align: center;
  `}
`;

export const ButtonLogin = styled(TouchableOpacity)`
  ${({ theme }) => css`
    align-items: center;
    background-color: #ffffff6b;
    border-color: ${theme.colors.default.white.main};
    border-radius: ${theme.rfvalue(30)}px;
    border-width: 1px;
    justify-content: center;
    min-height: ${theme.rhvalue(50)}px;
    padding-horizontal: ${theme.rhvalue(10)}px;
    padding-vertical: ${theme.rhvalue(10)}px;
    width: 100%;
  `}
`;

export const TextLogin = styled(Text).attrs({ size: 'large' })`
  color: white;
`;

export const Footer = styled.View`
  ${({ theme }) => css`
    align-items: baseline;
    background-color: #191b2f;
    flex-direction: row;
    height: 8%;
    justify-content: center;
    padding-top: ${theme.rhvalue(10)}px;
    width: 100%;
  `}
`;

type TextSignUpProps = {
  textDecoration?: 'underline';
};

export const TextSignUp = styled(Text)<TextSignUpProps>`
  ${({ theme, textDecoration = 'none' }) => css`
    color: ${theme.colors.default.white.main};
    font-family: ${theme.font.weight.medium};
    font-size: ${theme.font.size.large}px;
    text-decoration-line: ${textDecoration};
  `}
`;
