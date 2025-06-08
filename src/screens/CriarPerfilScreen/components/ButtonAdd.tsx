import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from '@emotion/react';

import { Line, Spancing } from '@/components';

type ButtonAddProps = {
  onPress: () => void;
};

export function ButtonAdd({ onPress }: ButtonAddProps) {
  const theme = useTheme();
  return (
    <TouchableOpacity onPress={onPress} className="flex-row items-center">
      <Line color={theme.colors.secondary.main} />
      <Spancing x="5" />
      <MaterialIcons
        name="add-circle-outline"
        size={Number(theme.rfvalue(35))}
        color={theme.colors.secondary.main}
        className="m-1"
      />
      <Spancing x="5" />
      <Line color={theme.colors.secondary.main} />
    </TouchableOpacity>
  );
}
