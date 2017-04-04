// dependencies
import styled from 'styled-components';

// components
import Box from '../box';

// styles
import { color, media, nav } from '../../styles/theme';

const Content = styled(Box)`
  background: ${color.white};
  flex: 1 0 auto; /* sticky footer */
  padding: 1.5em 1em;
  position: relative; /* to make z-index work */
  transform: ${props => props.navIsOpen ? `translate3d(-${nav.offcanvasWidth}, 0, 0)` : 'none'};
  transition: 0.35s; /* off-canvas transition */
  z-index: 1; /* above off-canvas */

  ${media.small} {
    padding: 1.5em 2em;
  }

  /* content overlay when nav is opened */
  &:after {
    background: ${color.black};
    content: "";
    height: ${props => props.navIsOpen ? '100%' : '0'};
    left: 0;
    opacity: ${props => props.navIsOpen ? '0.4' : '0'};
    position: absolute;
    top: 0;
    transition: ${props => props.navIsOpen ? 'opacity 0.35s' : 'opacity 0.35s, width 0.1s 0.35s, height 0.1s 0.35s'};
    width: ${props => props.navIsOpen ? '100%' : '0'};
  }
`;

export default Content;
