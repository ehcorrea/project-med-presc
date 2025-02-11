import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

export const FilterIcon = styled(Entypo).attrs(({ theme }) => ({
  color: theme.colors.default.white.main,
  size: theme.rfvalue(28),
}))``;

export const FilterButton = styled(TouchableOpacity)`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.default.primary.main};
    border-radius: 14px;
    height: 48px;
    justify-content: center;
    transform: rotate(90deg);
    width: 48px;
  `}
`;
