import { TouchableOpacityProps } from 'react-native';
import { router } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { Text, TextProps } from '../Text/Text';

import * as S from './Button.styles';

export type ButtonProps = {
  children?: string;
  icon?: React.ReactElement;
  label?: TextProps;
} & S.ButtonProps &
  TouchableOpacityProps;

export function Button({ children, label, icon, ...props }: ButtonProps) {
  return (
    <S.Button {...props}>
      {icon}
      <Text
        className="tracking-wide mt-0.5"
        color="main"
        palette="white"
        weight="semibold"
        {...label}
      >
        {children}
      </Text>
    </S.Button>
  );
}

Button.Back = () => {
  const handlePress = () => {
    router.back();
  };

  return (
    <S.Button
      elevation
      palette="white"
      className="h-[38px] w-[38px] rounded-full pr-1 p-1"
      onPress={handlePress}
    >
      <MaterialIcons name="keyboard-arrow-left" size={28} color="black" />
    </S.Button>
  );
};

export type ButtonOptions = {
  onPress?: () => void;
  children?: React.ReactElement;
};

Button.Options = ({ onPress, children }: ButtonOptions) => {
  return (
    <S.Button
      elevation
      palette="white"
      className="h-[38px] w-[38px] rounded-full pr-1 justify-center p-1"
      onPress={onPress}
      activeOpacity={0}
    >
      {children}
      <MaterialIcons name="keyboard-control" size={28} color="black" />
    </S.Button>
  );
};
