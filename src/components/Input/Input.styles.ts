import { TextInput } from 'react-native';
import styled, { css, DefaultTheme } from 'styled-components/native';

export type InputState = 'error' | 'focused' | 'default';

type ContainerProps = {
  state: InputState;
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
};

export const Container = styled.View<ContainerProps>`
  ${({ theme, state }) => css`
    align-items: center;
    border-radius: ${theme.rfvalue(10)}px;
    border-width: 1px;
    flex-direction: row;
    min-height: ${theme.rhvalue(50)}px;
    overflow: hidden;
    padding: ${theme.rfvalue(15)}px;

    ${containerModifiders[state](theme)}
  `}
`;

export const Input = styled(TextInput).attrs(({ theme, ...props }) => ({
  placeholderTextColor: '#C4C4C4',
  ...props,
}))`
  ${({ theme }) => css`
    flex: 1;
    font-family: ${theme.font.weight.regular};
    font-size: ${theme.font.size.large}px;
    height: 100%;
  `}
`;
