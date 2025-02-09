import * as S from './Spacing.styles';

export type SpancingProps = {
  x?: number;
  y?: number;
};

export function Spancing({ x = 0, y = 0 }: SpancingProps) {
  return <S.Container testID="spacing" x={x} y={y} />;
}
