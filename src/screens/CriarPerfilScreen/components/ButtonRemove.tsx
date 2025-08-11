import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { THEME } from '@/constants';

type ButtonRemoveProps = {
  onPress: () => void;
};

export function ButtonRemove({ onPress }: ButtonRemoveProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="ml-5 items-end justify-center self-center"
    >
      <MaterialIcons
        color={THEME.colors.error.main}
        name="remove-circle-outline"
        size={Number(THEME.rfvalue(28))}
        style={{ marginTop: 6 }}
      />
    </TouchableOpacity>
  );
}
