import { Platform, TextInput } from 'react-native';
import styled, { css, DefaultTheme } from 'styled-components/native';

export type InputState = 'error' | 'focused' | 'default';

export type ContainerProps = {
  state: 'error' | 'focused' | 'default';
  size: 'small' | 'medium';
};

const containerModifiders = {
  error: (theme: DefaultTheme) => css`
    border-color: ${theme.colors.default.error.main};
  `,
  focused: (theme: DefaultTheme) => css`
    border-color: ${theme.colors.default.primary.main};
  `,
  default: (theme: DefaultTheme) => css`
    border-color: ${theme.colors.default.gray.main};
  `,
  small: (theme: DefaultTheme) => css`
    height: ${theme.rhvalue(40)}px;
    padding: ${theme.rfvalue(10)}px;
  `,
  medium: (theme: DefaultTheme) => css`
    height: ${theme.rhvalue(50)}px;
    padding: ${theme.rfvalue(15)}px;
  `,
};

const inputModifiders = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.size.medium}px;
    line-height: ${Platform.OS === 'ios' ? 20 : 21}px;
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.size.large}px;
    line-height: ${Platform.OS === 'ios' ? 20 : 25}px;
  `,
};

export const Container = styled.View<ContainerProps>`
  ${({ theme, state, size }) => css`
    align-items: center;
    border-radius: ${theme.rfvalue(10)}px;
    border-width: 1px;
    flex-direction: row;
    min-height: ${theme.rhvalue(20)}px;
    overflow: hidden;
    justify-content: center;
    ${containerModifiders[state](theme)}
    ${containerModifiders[size](theme)}
  `}
`;

export const Input = styled(TextInput).attrs(({ theme, ...props }) => ({
  placeholderTextColor: '#C4C4C4',
  ...props,
}))<Pick<ContainerProps, 'size'>>`
  ${({ theme, size }) => css`
    flex: 1;
    font-family: ${theme.font.weight.regular};
    font-size: ${theme.font.size.large}px;
    height: 100%;
    color: ${theme.colors.default.black.main};
    justify-content: center;
    align-items: center;

    ${inputModifiders[size](theme)};
  `}
`;
