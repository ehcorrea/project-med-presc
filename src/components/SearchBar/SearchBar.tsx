import { TextInput, View } from 'react-native';
import { useRef } from 'react';

import * as S from './SearchBar.styles';
import { Spancing } from '../Spacing/Spacing';

export type SearchBarProps = {
  button?: React.ReactNode;
};

export function SearchBar({ button }: SearchBarProps) {
  const inputRef = useRef<TextInput>(null);

  const handleFocus = () => {
    inputRef?.current?.focus();
  };

  return (
    <View className="flex-row w-full items-center">
      <S.Container onPress={handleFocus}>
        <View className="flex-row w-full items-center">
          <S.SearchIcon name="search1" />
          <Spancing x={5} />
          <S.SearchInput ref={inputRef} />
        </View>
      </S.Container>
      <View className="w-[15%] items-end">{button}</View>
    </View>
  );
}
