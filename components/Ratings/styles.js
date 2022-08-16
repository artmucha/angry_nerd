import styled, { css } from 'styled-components';

import * as HeadingStyles from 'components/Heading/styles';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${HeadingStyles.Wrapper} {
      margin-bottom: ${theme.spacings.medium};
    }
    margin-bottom: calc(${theme.spacings.large} * 2);
  `}
`