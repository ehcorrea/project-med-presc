import styled from 'styled-components/native';
import { FontAwesome5 } from '@expo/vector-icons';

import { Text } from '../../Text/Text';

export type TitleProps = {
  isFocused: boolean;
};

export const Icon = styled(FontAwesome5).attrs<TitleProps>(
  ({ theme, isFocused }) => ({
    size: theme.rfvalue(24),
    color: isFocused
      ? theme.colors.default.primary.main
      : theme.colors.default.gray[50],
  })
)``;

export const Title = styled(Text).attrs({
  size: 'medium',
  weight: 'semi',
  palette: 'gray',
  color: 50,
})<TitleProps>``;
