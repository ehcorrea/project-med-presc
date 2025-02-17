import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    align-items: center;
    flex-direction: row;
    margin: 5%;
    margin-top: ${theme.rhvalue(50)}px;
    justify-content: space-between;
  `}
`;
