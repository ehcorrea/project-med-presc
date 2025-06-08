import { TextInput } from 'react-native';
import styled, { css, Theme } from '@emotion/native';

export type InputState = 'error' | 'focused' | 'default';

export type ContainerProps = {
  size: 'large' | 'medium';
  state: 'error' | 'focused' | 'default';
};

const containerModifiders = {
  error: (theme: Theme) => css`
    border-color: ${theme.colors.error.main};
  `,
  focused: (theme: Theme) => css`
    border-color: ${theme.colors.primary.main};
  `,
  default: (theme: Theme) => css`
    border-color: ${theme.colors.gray.main};
  `,
  medium: () => css`
    height: 50px;
  `,
  large: () => css`
    height: 60px;
  `,
};

const inputModifiders = {
  medium: (theme: Theme) => css`
    font-size: ${theme.fonts.size.large}px;
  `,
  large: (theme: Theme) => css`
    font-size: ${theme.fonts.size.xlarge}px;
  `,
};

export const Container = styled.View<ContainerProps>`
  ${({ theme, state, size }) => css`
    align-items: center;
    border-radius: 10px;
    border-width: 1px;
    flex-direction: row;
    min-height: 30px;
    padding-horizontal: 8px;
    overflow: hidden;

    ${containerModifiders[state](theme)}
    ${containerModifiders[size]()}
  `}
`;

export const Input = styled(TextInput)<Pick<ContainerProps, 'size'>>`
  ${({ theme, size }) => css`
    align-items: center;
    color: ${theme.colors.black.main};
    flex: 1;
    font-family: ${theme.fonts.weight.regular};
    font-size: ${theme.fonts.size.large}px;

    ${inputModifiders[size](theme)};
  `}
`;
