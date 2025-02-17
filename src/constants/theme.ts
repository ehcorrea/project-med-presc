import { rfvalue, rhvalue, rwvalue } from '@/utils/responsive/responsive';

const COLORS_NEUTRAL = {
  black: {
    main: '#1A1D26',
    80: '#2A2F3D',
    50: '#4D5364',
    20: '#6E7489',
  },
  white: {
    main: '#FFFFFF',
    80: '#FFFFFF',
    50: '#FFFFFF',
    20: '#FFFFFF',
  },
  gray: {
    main: '#9A9FAE',
    80: '#A8ACB9',
    50: '#C4C7D0',
    20: '#EBEBEB',
  },
  error: {
    main: '#F30000',
    80: '#F34C4C',
    50: '#F38585',
    20: '#F3BEBE',
  },
  bg: {
    main: '#F9FBFF',
    80: '#FAFCFF',
    50: '#FCFDFF',
    20: '#FEFEFF',
  },
  transparent: {
    main: 'transparent',
    80: 'transparent',
    50: 'transparent',
    20: 'transparent',
  },
};

export const theme = {
  colors: {
    default: {
      primary: {
        main: '#2196F3', // Azul principal
        80: '#4DA8F5', // Azul 80%
        50: '#90C8F9', // Azul 50%
        20: '#D1E7FB', // Azul 20%
      },
      secondary: {
        main: '#4CAF50', // Verde principal
        80: '#6FBF73', // Verde 80%
        50: '#A5D6A7', // Verde 50%
        20: '#D8EBD9', // Verde 20%
      },
      tertiary: {
        main: '#607D8B', // Cinza principal
        80: '#7F97A2', // Cinza 80%
        50: '#B0BEC5', // Cinza 50%
        20: '#E0E7EB', // Cinza 20%
      },
      ...COLORS_NEUTRAL,
    },
  },
  font: {
    weight: {
      light: 'SofiaPro-Light',
      regular: 'SofiaPro-Regular',
      medium: 'SofiaPro-Medium',
      semi: 'SofiaPro-SemiBold',
      bold: 'SofiaPro-Bold',
    },
    size: {
      small: rfvalue(12),
      medium: rfvalue(15),
      large: rfvalue(18),
      xlarge: rfvalue(24),
      huge: rfvalue(30),
      xhuge: rfvalue(36),
    },
  },
  size: {
    button: {
      small: rhvalue(45),
      medium: rhvalue(50),
      large: rhvalue(55),
      huge: rhvalue(60),
    },
  },
  rfvalue,
  rwvalue,
  rhvalue,
} as const;
