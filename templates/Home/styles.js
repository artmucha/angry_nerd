import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { Container } from 'components/Container';
import * as HeadingStyles from 'components/Heading/styles';

export const SectionBanner = styled.section`
  ${({ theme }) => css`
    margin: 0 calc(-${theme.grid.gutter} / 2) ${theme.spacings.large};
    ${media.greaterThan('medium')`
      margin-bottom: ${theme.spacings.large};
      position: relative;
      z-index: ${theme.layers.base};
    `}
  `}
`

export const SectionEyeCatcher = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: ${theme.spacings.xlarge};

    a {
      margin-top: ${theme.spacings.xsmall};
    }
  `}
`

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    text-align: center;
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.light};
    margin-top: ${theme.spacings.xxsmall};
    color: ${theme.colors.white};
    strong {
      color: ${theme.colors.primary};
    }
    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `}
`

export const SectionLight = styled.div`
  ${({ theme }) => css`
    margin-bottom: calc(${theme.spacings.xxlarge} * 2);
    ${media.greaterThan('medium')`
      margin-bottom: 0;
      padding-top: calc(${theme.spacings.xlarge} * 2);
      padding-bottom: calc(${theme.spacings.xlarge} * 2);
      background-color: ${theme.colors.lightBg};
      clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 85%);
      ${HeadingStyles.Wrapper} {
        color: ${theme.colors.black};
      }
    `}
  `}
`

export const SectionReviews = styled(Container).attrs({ as: 'section' })`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
      display: flex;
      div:first-child {
        margin-right: ${theme.spacings.medium};
      }
    `}
  `}
`;