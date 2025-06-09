import { AntDesign } from '@expo/vector-icons';
import { TextInput, View, TouchableOpacity } from 'react-native';
import { useRef } from 'react';
import { useTheme } from '@emotion/react';

import { Spancing } from '../Spacing/Spacing';

import * as S from './SearchBar.styles';

export type SearchBarProps = {
  button?: React.ReactNode;
};

export function SearchBar({ button }: SearchBarProps) {
  const inputRef = useRef<TextInput>(null);
  const theme = useTheme();

  const handleFocus = () => {
    inputRef?.current?.focus();
  };

  return (
    <View className="flex-row w-full items-center justify-between">
      <TouchableOpacity
        onPress={handleFocus}
        className="bg-primary-20/30 rounded-2xl flex-row h-12 px-2.5 flex-1 items-center"
      >
        <AntDesign
          name="search1"
          size={Number(theme.fonts.size.xlarge)}
          color={theme.colors.gray[80]}
        />
        <Spancing x="5" />
        <S.Input
          ref={inputRef}
          placeholder="Buscar..."
          placeholderTextColor={theme.colors.gray[50]}
        />
      </TouchableOpacity>
      {button && <View className="w-[15%] items-end">{button}</View>}
    </View>
  );
}
