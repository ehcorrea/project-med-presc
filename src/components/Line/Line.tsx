import { ViewProps } from 'react-native';

import * as S from './Line.styles';

type LineProps = S.LineProps & ViewProps;

export function Line(props: LineProps) {
  return <S.Line {...props} />;
}
