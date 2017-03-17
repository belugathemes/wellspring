// dependecies
import styled from 'styled-components';

// styles
import { media } from '../../styles/theme';

const GridCell = styled.div`
  padding: 0.5em;
  width: 100%;

  ${media.medium} {
    flex-basis: 50%;
    max-width: 50%;
  }
`;

export default GridCell;
