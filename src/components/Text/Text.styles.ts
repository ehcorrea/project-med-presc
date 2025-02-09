import { Color, FontSize, FontWeight, Palette } from '@/types/theme';
import styled, { css } from 'styled-components/native';

export type TextProps = {
  color?: Color;
  palette?: Palette;
  size?: FontSize;
  weight?: FontWeight;
};

export const Text = styled.Text<TextProps>`
  ${({
    theme,
    color = 'main',
    palette = 'black',
    size = 'medium',
    weight = 'regular',
  }) => css`
    color: ${theme.colors.default[palette][color]};
    font-family: ${theme.font.weight[weight]};
    font-size: ${theme.font.size[size]}px;
  `}
`;
