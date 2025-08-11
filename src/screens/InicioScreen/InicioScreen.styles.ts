import { TouchableOpacity } from 'react-native';
import styled, { css } from '@emotion/native';

export const ButtonLogin = styled(TouchableOpacity)`
  ${({ theme }) => css`
    align-items: center;
    background-color: #ffffff6b;
    border-color: ${theme.colors.white.main};
    border-radius: ${theme.rfvalue(30)}px;
    border-width: 1px;
    justify-content: center;
    padding: 4%;
    width: 100%;
  `}
`;
