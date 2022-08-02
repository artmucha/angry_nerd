import styled, { css } from 'styled-components';

export const Title = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    color: ${theme.colors.white};
    position: relative;
    display: flex;
    align-items: center;
    padding-right: 2.4rem;
    z-index: ${theme.layers.alwaysOnTop};
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 60rem;
    cursor: auto;
    display: flex;
    flex-direction: column;
    padding: ${theme.spacings.small};
    background: ${theme.colors.white};
    color: ${theme.colors.black};
    z-index: ${theme.layers.alwaysOnTop};
  `}
`;

export const Overlay = styled.div`
  ${({ theme }) => css`
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: ${theme.layers.overlay};
  `}
`;

const wrapperModifiers = {
  open: () => css`
    opacity: 1;
    pointer-events: auto;
    visibility: visible;
  `,
  close: () => css`
    opacity: 0;
    pointer-events: none;
    visibility: hidden;
  `
};

export const Wrapper = styled.div`
  ${({ theme, isOpen }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    padding: 0 ${theme.spacings.xsmall};
    z-index: ${theme.layers.overlay};
    ${Content},
    ${Overlay} {
      transition: transform 0.2s ease-in, opacity ${theme.transition.default};
      ${isOpen && wrapperModifiers.open()};
      ${!isOpen && wrapperModifiers.close()};
    }
  `}
`;