import styled, { css } from '@emotion/native';

export const Container = styled.View`
  align-items: center;
  background-color: white;
  border-radius: 8px;
  flex-direction: row;
  height: 78px;
  justify-content: start;
  padding-horizontal: 20px;
  width: 100%;
`;

export const ContainerIcon = styled.View`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.primary[80]};
    border-radius: 14px;
    height: 48px;
    justify-content: center;
    width: 48px;
  `}
`;
