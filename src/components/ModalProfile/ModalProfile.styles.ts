import styled, { css } from 'styled-components/native';

export const IconContainer = styled.View`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.default.primary.main};
    border-radius: ${theme.rfvalue(20)}px;
    height: ${theme.rfvalue(48)}px;
    justify-content: center;
    width: ${theme.rfvalue(48)}px;
  `}
`;
