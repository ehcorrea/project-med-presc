import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Button = styled(TouchableOpacity)`
  ${({ theme }) => css`
    padding: ${theme.rfvalue(15)}px;
  `}
`;

export const ButtonAlert = styled(TouchableOpacity)`
  ${({ theme }) => css`
    background-color: ${theme.colors.default.error[50]};
    border-radius: ${theme.rfvalue(10)}px;
    padding: ${theme.rfvalue(10)}px;
  `}
`;
