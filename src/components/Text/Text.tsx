import { TextProps as TextPropsRN } from 'react-native';

import * as S from './Text.styles';

export type TextProps = TextPropsRN & S.TextProps;

export function Text(props: TextProps) {
  return <S.Text {...props} />;
}

Text.Title = (props: TextProps) => {
  return <Text size="huge" weight="bold" {...props} />;
};

Text.Subtitle = (props: TextProps) => {
  return <Text size="large" weight="semibold" {...props} />;
};
