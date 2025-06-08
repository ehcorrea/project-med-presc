import styled, { css } from '@emotion/native';

type ContainerProps = {
  bottom?: number;
};

export const Container = styled.View<ContainerProps>`
  ${({ theme }) => css`
    align-items: center;
    align-self: center;
    background-color: ${theme.colors.white.main};
    border-top-left-radius: ${theme.rhvalue(24)}px;
    border-top-right-radius: ${theme.rhvalue(24)}px;
    bottom: 0;
    elevation: 3;
    flex-direction: row;
    justify-content: space-around;
    padding: ${theme.rhvalue(20)}px;
    shadow-color: ${theme.colors.black.main};
    shadow-offset: 0px 1px;
    shadow-opacity: 0.2;
    shadow-radius: 3px;
    top: 0;
    width: 100%;
  `}
`;
