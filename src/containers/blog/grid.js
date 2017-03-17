// dependecies
import styled from 'styled-components';

// styles
import { media } from '../../styles/theme';

const Grid = styled.div`
  margin: -0.5em;

  ${media.medium} {
    display: flex;
    flex-wrap: wrap;
  }
`;

export default Grid;
