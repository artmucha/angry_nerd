import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import * as BannerStyles from 'components/Banner/styles';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    .slick-dots {
      list-style: none;
      display: flex !important;
      align-items: center;
      justify-content: center;
      margin-top: ${theme.spacings.small};
      li {
        background: ${theme.colors.white};
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 ${theme.spacings.xxsmall};
        cursor: pointer;
        transition: box-shadow ${theme.transition.default};
        &.slick-active {
          background: ${theme.colors.primary};
        }
        &:focus-within {
          box-shadow: 0 0 0 0.3rem ${theme.colors.secondary};
        }
      }
      button {
        opacity: 0;
        width: 1.2rem;
        height: 1.2rem;
        cursor: pointer;
      }
    }
    .slick-slide {
      visibility: hidden;
      &.slick-active.slick-current {
        visibility: visible;
      }
    }
    ${media.greaterThan('large')`
      ${BannerStyles.Wrapper} {
        margin-left: calc(${theme.grid.gutter} / 2);
        margin-right: calc(${theme.grid.gutter} / 2);
      }
    `}
  `}
`