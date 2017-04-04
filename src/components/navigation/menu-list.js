// dependecies
import styled from 'styled-components';

// styles
import { media, nav } from '../../styles/theme';

const MenuList = styled.li`
  border-bottom: ${nav.offcanvasBorder};

  &:first-child {
    border-top: ${nav.offcanvasBorder};
  }

  ${media.medium} {
    border-bottom: 0; /* remove off-canvas border */
    border-right: ${nav.topbarBorder};

    &:first-child {
     border-left: ${nav.topbarBorder};
     border-top: 0; /* remove off-canvas border */
    }
  }
`;

export default MenuList;
