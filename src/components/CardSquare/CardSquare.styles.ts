import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    aspect-ratio: 1 / 1;
    background-color: ${theme.colors.default.primary.main};
    border-radius: ${theme.rfvalue(14)}px;
    height: ${theme.rhvalue(100)}px;
    justify-content: center;
    align-items: center;
  `}
`;
