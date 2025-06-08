import styled, { css } from '@emotion/native';

export type ContainerProps = {
  x?: string;
  y?: string;
};

export const Container = styled.View<ContainerProps>`
  ${({ x = '5', y = '5' }) => css`
    margin-horizontal: ${x}px;
    margin-vertical: ${y}px;
  `}
`;
