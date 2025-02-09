import styled, { css } from 'styled-components/native';

type ContainerProps = {
  x: number;
  y: number;
};

export const Container = styled.View<ContainerProps>`
  ${({ theme, x, y }) => css`
    margin-horizontal: ${theme.rwvalue(x)}px;
    margin-vertical: ${theme.rhvalue(y)}px;
  `}
`;
