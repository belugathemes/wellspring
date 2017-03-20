// dependencies
import styled from 'styled-components';

// components
import Box from '../box';

// styles
import { media } from '../../styles/theme';

const NavBox = styled(Box)`

  ${media.small} {
    display: flex;
    justify-content: space-between;
  }
`;

export default NavBox;
