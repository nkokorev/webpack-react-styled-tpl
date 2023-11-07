import styled from 'styled-components';

import LeftArrow from '../svg/LeftArrow.svg';

export const LeftArrowIcon = styled(LeftArrow)`
  &, & path {
    fill: ${(props) => props.theme.colors.icons.fill};
  },
`;
