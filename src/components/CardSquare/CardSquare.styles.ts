import styled, { css } from '@emotion/native';

export const Container = styled.View`
  ${({ theme }) => css`
    aspect-ratio: 1 / 1;
    background-color: ${theme.colors.primary.main};
    border-radius: ${theme.rfvalue(14)}px;
    flex: 1;
    justify-content: space-evenly;
    align-items: center;
    padding: 2%;
    elevation: 3;
  `}
`;
