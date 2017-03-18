// dependencies
import styled from 'styled-components';

// styles
import { color } from '../../styles/theme';

const Header = styled.header`
  background: ${color.blackPrimary};
  color: ${color.white};
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 2; /* above everything else */
`;

export default Header;
