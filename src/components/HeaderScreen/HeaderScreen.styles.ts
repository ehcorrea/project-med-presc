import styled, { css } from 'styled-components/native';

type ContainerProps = {
  top?: number;
};

export const Container = styled.View<ContainerProps>`
  ${({ theme }) => css`
    align-items: center;
    flex-direction: row;
    margin: 5%;
    margin-top: ${theme.rhvalue(50)}px;
  `}
`;
