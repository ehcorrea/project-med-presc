import styled, { css } from 'styled-components/native';

export type LineProps = {
  color?: string;
};

export const Line = styled.View<LineProps>`
  ${({ color = '#b3b3b380' }) => css`
    background-color: ${color};
    flex: 1;
    height: 1px;
  `}
`;
