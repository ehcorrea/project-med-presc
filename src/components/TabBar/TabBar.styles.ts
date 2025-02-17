import styled, { css } from 'styled-components/native';

type ContainerProps = {
  bottom?: number;
};

export const Container = styled.View<ContainerProps>`
  ${({ theme, bottom }) => css`
    align-items: center;
    align-self: center;
    background-color: ${theme.colors.default.white.main};
    elevation: 3;
    flex-direction: row;
    top: 0;
    bottom: 0;
    justify-content: space-around;
    padding: ${theme.rhvalue(20)}px;
    shadow-color: ${theme.colors.default.black.main};
    shadow-offset: 0px 1px;
    shadow-opacity: 0.2;
    shadow-radius: 3px;
    width: 100%;
    border-top-left-radius: ${theme.rhvalue(24)}px;
    border-top-right-radius: ${theme.rhvalue(24)}px;
  `}
`;
