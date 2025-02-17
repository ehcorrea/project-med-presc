import { TouchableOpacityProps } from 'react-native';
import { router } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { TextProps } from '../Text/Text';

import * as S from './Button.styles';

export type ButtonProps = {
  children?: string;
  icon?: React.ReactElement;
  label?: TextProps;
} & Partial<S.ButtonProps> &
  TouchableOpacityProps;

export function Button({ children, label, icon, ...props }: ButtonProps) {
  return (
    <S.Button {...props}>
      {icon}
      <S.Label {...label}>{children}</S.Label>
    </S.Button>
  );
}

Button.Back = () => {
  const handlePress = () => {
    router.back();
  };

  return (
    <S.ButtonIcon elevation palette="white" onPress={handlePress}>
      <MaterialIcons name="keyboard-arrow-left" size={28} color="black" />
    </S.ButtonIcon>
  );
};

export type ButtonOptions = {
  onPress?: () => void;
  children?: React.ReactElement;
};

Button.Options = ({ onPress, children }: ButtonOptions) => {
  return (
    <S.ButtonIcon elevation palette="white" onPress={onPress} activeOpacity={0}>
      {children}
      <MaterialIcons name="keyboard-control" size={28} color="black" />
    </S.ButtonIcon>
  );
};
