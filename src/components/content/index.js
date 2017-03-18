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
  transition: 0.35s; /* off-canvas transition */
  z-index: 1; /* above off-canvas */

  /* content overlay when nav is opened */
  &:after {
    background: ${color.black};
    content: "";
    height: 0;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    width: 0;
    transition: opacity 0.35s, width 0.1s 0.35s, height 0.1s 0.35s;
  }
`;

export default Content;
