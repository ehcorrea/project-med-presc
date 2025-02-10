import styled, { css } from 'styled-components/native';
import { ImageBackground } from 'expo-image';

import { Line, Text } from '@/components';
import { MaterialIcons } from '@expo/vector-icons';
import { IconProps } from '@expo/vector-icons/build/createIconSet';

export const Header = styled(ImageBackground).attrs({
  contentFit: 'cover',
  source: require('@/assets/images/elipses.svg'),
})`
  ${({ theme }) => css`
    align-items: end;
    height: ${theme.rhvalue(90)}px;
    justify-content: flex-end;
    padding-horizontal: 5%;
    padding-vertical: 2%;
    width: 100%;
  `}
`;

export const Label = styled(Text)`
  color: #5b5b5e;
`;

export type ContainerInputProps = {
  isFirstItem: boolean;
};

export const ContainerInput = styled.View<ContainerInputProps>`
  ${({ isFirstItem }) => css`
    flex: ${isFirstItem ? 1 : 8};
  `}
`;

export const IconRemove = styled(MaterialIcons).attrs<
  Partial<IconProps<string>>
>(({ theme }) => {
  return {
    name: 'remove-circle-outline',
    size: theme.rfvalue(28),
    color: theme.colors.default.error.main,
  };
})`
  ${({ theme }) => css`
    margin-top: ${theme.rhvalue(6)}px;
  `}
`;

export const LineAdd = styled(Line).attrs(({ theme }) => {
  return {
    color: theme.colors.default.secondary.main,
  };
})``;

export const IconAdd = styled(MaterialIcons).attrs<Partial<IconProps<string>>>(
  ({ theme }) => {
    return {
      name: 'add-circle-outline',
      size: theme.rfvalue(35),
      color: theme.colors.default.secondary.main,
    };
  }
)`
  ${({ theme }) => css`
    margin-horizontal: ${theme.rwvalue(30)}px;
  `}
`;
