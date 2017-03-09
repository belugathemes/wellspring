/**
 *   Blog :: Grid
 */

// dependecies
import styled from 'styled-components';

const Grid = styled.div`
  margin: -0.5em;

  @media (min-width: 685px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

export default Grid;
