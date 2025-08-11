import styled, { css } from '@emotion/native';

import { Text } from '@/components';

export const Label = styled(Text)`
  color: #5b5b5e;
`;

export type ContainerInputProps = {
  isFirstItem: boolean;
};

export const ContainerInput = styled.View<ContainerInputProps>`
  ${({ isFirstItem }) => css`
    flex: 1;
    margin-top: ${isFirstItem ? '0' : '8'}px;
  `}
`;
