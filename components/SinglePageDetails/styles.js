import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.small} 0;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.spacings.xsmall};
    grid-template-columns: repeat(2, 1fr);
    margin-top: ${theme.spacings.small};
    ${media.greaterThan('medium')`
      grid-template-columns: repeat(3, 1fr);
    `}
    ${media.greaterThan('large')`
      grid-template-columns: repeat(6, 1fr);
    `}
  `}
`

export const Block = styled.div``

export const Label = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.light};
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
  `}
`

export const IconsWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
`

export const Icon = styled.a`
  ${({ theme }) => css`
    display: block;
    svg {
      fill: ${theme.colors.white};
      margin-right: ${theme.spacings.xxsmall};
    }
    span {
      font-size: ${theme.font.sizes.small};
      font-weight: ${theme.font.light};
      color: ${theme.colors.white};
      vertical-align: text-bottom;
    }
  `}
`