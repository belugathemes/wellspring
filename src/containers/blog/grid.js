// dependecies
import styled from 'styled-components';

// styles
import { media } from '../../styles/theme';

const Grid = styled.div`

  ${media.medium} {
    display: grid;
    grid-column-gap: 1em;
    grid-template-columns: calc(50% - 0.5em) calc(50% - 0.5em);
  }
`;

export default Grid;
