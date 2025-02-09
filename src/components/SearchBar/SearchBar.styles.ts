import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';

export const Container = styled(TouchableOpacity)`
  ${({ theme }) => css`
    background-color: ${theme.colors.default.white.main};
    border-radius: ${theme.rfvalue(14)}px;
    flex-direction: row;
    height: ${theme.rhvalue(48)}px;
    padding-horizontal: ${theme.rwvalue(10)}px;
    width: 85%;
  `}
`;

export const SearchIcon = styled(AntDesign).attrs(({ theme }) => ({
  color: theme.colors.default.gray[80],
  size: theme.rfvalue(20),
}))``;

export const SearchInput = styled.TextInput.attrs(({ theme }) => ({
  placeholder: 'Buscar...',
  placeholderTextColor: theme.colors.default.gray[50],
}))`
  ${({ theme }) => css`
    flex: 1%;
    font-size: ${theme.font.size.medium}px;
  `}
`;
