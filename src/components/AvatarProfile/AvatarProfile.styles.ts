import styled, { css } from 'styled-components/native';

export type ContainerProps = {
  color: string;
};

export const Container = styled.View<ContainerProps>`
  ${({ theme, color }) => css`
    align-items: center;
    background-color: ${color};
    border-radius: ${theme.rfvalue(20)}px;
    height: ${theme.rfvalue(48)}px;
    justify-content: center;
    width: ${theme.rfvalue(48)}px;
  `}
`;
