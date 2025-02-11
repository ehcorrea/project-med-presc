import styled, { css } from 'styled-components/native';
import { Button } from '../Button/Button';

type ModalButonProps = {
  cancel?: boolean;
};

export const ModalButon = styled(Button).attrs<ModalButonProps>(
  ({ theme, cancel, ...props }) => ({
    ...props,
    label: {
      palette: cancel ? 'black' : 'white',
      size: 'small',
    },
  })
)`
  ${({ theme }) => css`
    flex: 1;
    height: ${theme.rfvalue(40)}px;
  `}
`;
