import styled, { css } from 'styled-components/native';

import { Text } from '../Text/Text';

export const Container = styled.View`
  ${({ theme }) => css`
    align-items: center;
    background-color: white;
    border-radius: ${theme.rfvalue(8)}px;
    flex-direction: row;
    height: ${theme.rhvalue(78)}px;
    justify-content: start;
    width: 100%;
    padding-horizontal: 20px;
  `}
`;

export const ContainerIcon = styled.View`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.default.primary[80]};
    border-radius: ${theme.rfvalue(14)}px;
    height: ${theme.rfvalue(48)}px;
    justify-content: center;
    width: ${theme.rfvalue(48)}px;
  `}
`;

export const TextContent = styled(Text)`
  ${({ theme }) => css`
    width: 100%;
    padding-right: ${theme.rfvalue(5)}px;
  `}
`;
