import styled, { css } from 'styled-components/native';
import { Button } from '../Button/Button';

type ModalButonProps = {
  cancel?: boolean;
  alert?: boolean;
};

export const ModalButon = styled(Button).attrs<ModalButonProps>(
  ({ theme, cancel, alert, ...props }) => ({
    ...props,
    ...(alert && {
      palette: 'error',
      color: 50,
    }),
    label: {
      palette: cancel ? 'black' : 'white',
      size: 'medium',
    },
  })
)`
  ${({ theme }) => css`
    flex: 1;
    height: ${theme.rfvalue(50)}px;
  `}
`;
