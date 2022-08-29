import styled, { css } from 'styled-components';

export const Wrapper = styled.h1`
  ${({ theme, color }) => css`
    width: calc(${theme.spacings.xxlarge} * 2);
    width: max-content;
    height: ${theme.spacings.xlarge};
    line-height: calc(${theme.spacings.large} * 2);
    color: ${theme.colors[color]};
    font-size: ${theme.font.sizes.medium};
    text-align: center;
    background-image: url('/logo_${color}.svg');
    background-size: contain;
    background-position: 50% 0;
    background-repeat: no-repeat;
  `}
`