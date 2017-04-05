// dependencies
import styled from 'styled-components';

// styles
import { color, media } from '../../styles/theme';

const Footer = styled.footer`
  background: ${color.blackPrimary};
  color: ${color.white};
  font-size: 0.875rem;
  line-height: 1.4;
  position: relative; /* to make z-index work */
  z-index: 1; /* above off-canvas */
  padding: 0.75em 0;

  ${media.medium} {
    font-size: 0.9375rem;
  }
`;

export default Footer;
