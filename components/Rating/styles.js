import styled, { css } from 'styled-components';

export const Rating = styled.span`
  ${({ theme, size }) => css`
    font-weight: ${theme.font.bold};
    color: ${theme.colors.black};
    font-size: ${size};
  `}
`;

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
`;