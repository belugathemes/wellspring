/**
 * Blog :: Grid Cell
 */

// dependecies
import styled from 'styled-components';

const GridCell = styled.div`
  padding: 0.5em;
  width: 100%;

  @media (min-width: 685px) {
    flex-basis: 50%;
    max-width: 50%;
  }
`;

export default GridCell;
