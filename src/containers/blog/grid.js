// dependecies
import styled from 'styled-components';

// styles
import { media } from '../../styles/theme';

const Grid = styled.div`

  ${media.medium} {
    display: grid;
    grid-column-gap: 1em;
    grid-template-columns: 50% 50%;
  }
`;

export default Grid;
