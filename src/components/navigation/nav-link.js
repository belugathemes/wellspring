// dependencies
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// styles
import { color, media, nav } from '../../styles/theme';

const NavLink = styled(Link)`
  color: ${color.white};
  display: block;
  font-size: ${18 / 16}rem;
  line-height: ${nav.topbarHeight};

  &:active, &:focus, &:hover {
    color: #fff;
  }

  ${media.medium} {
    font-size: 1rem;
  }
`;

export default NavLink;
