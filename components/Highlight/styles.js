import styled, { css } from 'styled-components';
import media from 'styled-media-query';

const wrapperModifiers = {
  right: () => css`
    grid-template-areas: 'floatimage content';
    grid-template-columns: 1.3fr 2fr;
    ${Content} {
      text-align: right;
    }
  `,
  left: () => css`
    grid-template-areas: 'content floatimage';
    grid-template-columns: 2fr 1.3fr;
    ${Content} {
      text-align: left;
    }
  `
};

export const Wrapper = styled.section`
  ${({ theme, alignment }) => css`
    position: relative;
    height: 23rem;
    display: grid;
    margin-top: ${theme.spacings.small};
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
    }
    img {
      position: absolute;
      object-fit: cover;
    }
    ${media.greaterThan('medium')`
      height: 32rem;
    `}
    ${wrapperModifiers[alignment]()}
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    grid-area: content;
    z-index: ${theme.layers.base};
    padding: ${theme.spacings.xsmall};
    ${media.greaterThan('medium')`
      align-self: end;
      padding: ${theme.spacings.large};
    `}
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacings.small};
    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `}
`;