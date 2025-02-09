import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.default.bg.main};
    flex: 1;
    padding-bottom: ${theme.rhvalue(10)}px;
  `}
`;
