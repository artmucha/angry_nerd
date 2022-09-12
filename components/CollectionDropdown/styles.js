import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${({ theme }) => css`
		width: 26rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
		border: 0;
    background: ${theme.colors.white};
    color: ${theme.colors.black};
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    transition: background, color, ${theme.transition.default};
    &:hover {
      background: ${theme.colors.primary};
      color: ${theme.colors.white};
    }

    &:not(:last-of-type) {
      border-bottom: 0.1rem solid ${theme.colors.lightGray};
    }
  `}
`;