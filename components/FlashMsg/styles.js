import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme, color }) => css`
    display: inline-block;
    padding: ${theme.spacings.xsmall};
    background-color: ${theme.colors[color]};
    color: ${theme.colors.white};
    position: fixed;
    top: ${theme.spacings.medium};
    right: 0;
    z-index: ${theme.layers.alwaysOnTop}
  `}
`;