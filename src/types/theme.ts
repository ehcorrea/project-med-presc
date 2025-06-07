import { THEME } from '@/constants';

export type Palette = keyof typeof THEME.colors;
export type Color = keyof typeof THEME.colors.primary;
export type FontSize = keyof typeof THEME.fonts.size;
export type FontWeight = keyof typeof THEME.fonts.weight;
