import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import * as RibbonStyles from 'components/Ribbon/styles';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    background: ${theme.colors.white};
    padding: ${theme.spacings.xsmall};
    ${RibbonStyles.Wrapper} {
      right: -1rem;
      &:before {
        border-right-width: 1rem;
      }
    }
    ${media.greaterThan('medium')`
      padding: ${theme.spacings.medium};
      ${RibbonStyles.Wrapper} {
        right: ${theme.spacings.small};
        top: ${theme.spacings.small};
        font-size: ${theme.font.sizes.large};
        &:before {
          border: none;
        }
      }
    `}
  `}
`

export const Info = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.gray};
  `}
`

export const ButtonsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    > button {
      width: 100%;
      margin-bottom: ${theme.spacings.xxsmall};
    }
    ${media.greaterThan('medium')`
      flex-direction: row-reverse;
      > button {
        width: initial;
        margin-bottom: 0;
      }
    `}
  `}
`