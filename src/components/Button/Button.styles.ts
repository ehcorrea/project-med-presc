import styled, { css } from '@emotion/native';

import { Color, Palette } from '@/types/theme';

export type ButtonProps = {
  color?: Color;
  elevation?: boolean;
  palette?: Palette;
};

const buttonModifiers = {
  elevation: () => css`
    elevation: 2;
    shadow-color: #000;
    shadow-offset: 0px 3px;
    shadow-opacity: 0.1;
    shadow-radius: 5px;
  `,
};

export const Button = styled.TouchableOpacity<ButtonProps>`
  ${({ theme, elevation = false, palette = 'primary', color = 'main' }) => css`
    align-items: center;
    background-color: ${theme.colors[palette][color]};
    border-radius: 30px;
    flex-direction: row;
    height: 48px;
    justify-content: space-evenly;
    width: 100%;

    ${elevation && buttonModifiers.elevation()}
  `}
`;
