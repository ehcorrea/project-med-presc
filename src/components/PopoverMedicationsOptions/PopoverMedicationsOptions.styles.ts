import { TouchableOpacity } from 'react-native';
import styled, { css } from '@emotion/native';

export const Button = styled(TouchableOpacity)`
  padding: 15px;
`;

export const ButtonAlert = styled(TouchableOpacity)`
  ${({ theme }) => css`
    background-color: ${theme.colors.error[50]};
    border-radius: 10px;
    padding: 10px;
  `}
`;
