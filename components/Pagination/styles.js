import styled, { css } from 'styled-components';

export const Button = styled.li`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 3.2rem;
    width: 3.2rem;
    height: 3.2rem;
    margin: 0 ${theme.spacings.xxsmall};
    border-radius: 50%;
    border: 1px solid transparent;
    text-align: center;
    cursor: pointer;
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
  `}
`;

export const Pagination = styled.ul`
  ${({ theme, currentPage }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 400px;
    margin: ${theme.spacings.small} auto 0 auto;
    ${Button} {
      &:nth-of-type(${currentPage}) {
        background-color: ${theme.colors.primary};
      }
    }
  `}
`;