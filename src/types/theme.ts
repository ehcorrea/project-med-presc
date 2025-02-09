import { theme } from '@/constants';

export type Palette = keyof typeof theme.colors.default;
export type Color = keyof typeof theme.colors.default.primary;
export type FontSize = keyof typeof theme.font.size;
export type FontWeight = keyof typeof theme.font.weight;
export type SizeButton = keyof typeof theme.size.button;
