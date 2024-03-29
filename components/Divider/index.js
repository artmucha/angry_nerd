import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Divider = styled.hr`
  ${({ theme }) => css`
    margin: ${theme.spacings.xxlarge} auto ${theme.spacings.medium};
    height: 0.1rem;
    background: rgba(181, 181, 181, 0.3);
    border: 0;
    ${media.greaterThan('medium')`
      margin: calc(${theme.spacings.xlarge} * 2) auto ${theme.spacings.xxlarge};
    `}
  `}
`