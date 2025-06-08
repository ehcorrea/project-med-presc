import { TextInput } from 'react-native';
import styled, { css } from '@emotion/native';

export const Input = styled(TextInput)`
  ${({ theme }) => css`
    align-items: center;
    flex: 1;
    font-family: ${theme.fonts.weight.regular};
    font-size: ${theme.fonts.size.large};
    height: 100%;
    line-height: ${theme.fonts.height.large};
  `}
`;
