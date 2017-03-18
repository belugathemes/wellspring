// dependencies
import styled from 'styled-components';

// styles
import { color, media, nav } from '../../styles/theme';

const Menu = styled.ul`
    background: ${color.grayPrimary};
    bottom: 0;
    color: ${color.white};
    font-size: 1rem;
    list-style-type: none;
    margin: 0;
    overflow: scroll;
    padding: 0 0 3rem;
    height: calc(100vh - ${nav.topbarHeight}); /* for safari */
    position: absolute;
    right: 0;
    top: ${nav.topbarHeight};
    width: ${nav.offcanvasWidth};

    /* topbar on desktop */
    ${media.medium} {
      background: ${color.primaryDark};
      display: flex;
      height: ${nav.topbarHeight};
      padding: 0;
      position: static;
      width: auto;
    }
`;

export default Menu;
