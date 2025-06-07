import '@emotion/react';
import { ThemeType } from '@/constants/theme';

declare module '@emotion/react' {
  export type Theme = ThemeType;
  export function useTheme(): ThemeType;
}

declare module '@emotion/native' {
  export function css(...args: unknown[]): string;
  export type Theme = ThemeType;
}
