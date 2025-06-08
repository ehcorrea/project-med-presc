import styled, { css } from '@emotion/native';
import { Color, FontSize, FontWeight, Palette } from '@/types/theme';

export type TextProps = {
  color?: Color;
  customSize?: number;
  height?: number;
  palette?: Palette;
  size?: FontSize;
  weight?: FontWeight;
};

export const Text = styled.Text<TextProps>`
  ${({
    color = 'main',
    customSize,
    height,
    palette = 'primary',
    size = 'medium',
    theme,
    weight = 'regular',
  }) => css`
    color: ${theme.colors[palette][color]};
    font-family: ${theme.fonts.weight[weight]};
    font-size: ${theme.fonts.size[size]}px;
    line-height: ${theme.fonts.height[size]}px;

    ${height &&
    css`
      height: ${theme.rfvalue(height)}px;
    `}

    ${customSize &&
    css`
      font-size: ${theme.rfvalue(customSize)}px;
    `}
  `}
`;
