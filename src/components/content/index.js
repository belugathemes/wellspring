// dependencies
import styled from 'styled-components';

// components
import Container from '../container';

// styles
import { color } from '../../styles/theme';

const Content = styled(Container)`
  background: ${color.white};
  flex: 1 0 auto; /* sticky footer */
  padding-bottom: 1.5em;
  padding-top: 1.5em;
  z-index: 1; /* above off-canvas */
`;

export default Content;
