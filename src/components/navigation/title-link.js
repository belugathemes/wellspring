// dependencies
import styled from 'styled-components';

// components
import NavLink from './nav-link';

// styles
import { font, media } from '../../styles/theme';

const TitleLink = styled(NavLink)`
  font-size: ${25 / 16}rem;
  font-weight: ${font.weight.bold};
  margin-right: 2rem;

  ${media.medium} {
    font-size: ${25 / 16}rem;
  }
`;

export default TitleLink;
