import { View } from 'react-native';

type LineProps = {
  color?: string;
};

export function Line({ color = '#b3b3b380' }: LineProps) {
  return (
    <View
      className="flex-1 max-h-[1px] h-1"
      style={{ backgroundColor: color }}
    />
  );
}
