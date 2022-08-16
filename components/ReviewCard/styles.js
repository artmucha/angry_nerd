import styled, { css } from 'styled-components';

export const Wrapper = styled.article`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    padding: ${theme.spacings.xsmall} 0;
    border-top: 1px solid ${theme.colors.lightGray};
  `}
`

export const ImageBox = styled.a`
  position: relative;
  width: 80px;
  min-width: 80px;
  height: 120px;
  background: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-size: cover;
  animation: placeholderShimmer 1s linear infinite forwards;
  @keyframes placeholderShimmer {
    0% {
      background-position: -40rem 0;
    }
    100% {
      background-position: 40rem 0;
    }
  }
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    height: 100%;
    margin-left: ${theme.spacings.xsmall};
  `}
`

export const Info = styled.a`
  text-decoration: none;
`

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    line-height: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`

export const Meta = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.gray};
    font-weight: ${theme.font.normal};
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`
export const Text = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.gray};
    font-weight: ${theme.font.normal};
    max-height: calc(${theme.font.sizes.huge} * 2);
    overflow: hidden;
    -webkit-line-clamp: 5;
    display: -webkit-box;
    -moz-box-orient: vertical;
  `}
`