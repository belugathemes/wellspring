// dependencies
import styled from 'styled-components';

// components
import NavLink from './nav-link';

// styles
import { color, media, nav } from '../../styles/theme';

const MenuLink = styled(NavLink)`
  color: ${color.white};
  padding: 0 1rem;
  text-align: center;

  &:hover {
    background: rgba(0, 0, 0, 0.3);
    color: #fff;

    ${media.medium} {
      background: rgba(0, 0, 0, 0.15);
    }
  }

  ${media.large} {
    padding: 0 1.75rem;
  }
`;

export default MenuLink;
