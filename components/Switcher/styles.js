import styled, { css } from 'styled-components';

export const Switches = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Switch = styled.button`
  cursor: pointer;
  border: 0;
  outline: 0;
  flex: 1;
  background-color: transparent;
  font-weight: 600;
  font-size: 1.6rem;
  ${({ theme, selected }) => (
    selected &&
    css`
      color: ${theme.colors.primary};
  `)}
`;

export const Content = styled.div`
  width: 100%;
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container};
    margin-left: auto;
    margin-right: auto;
    padding-left: calc(${theme.grid.gutter} / 2);
    padding-right: calc(${theme.grid.gutter} / 2);
  `}
`