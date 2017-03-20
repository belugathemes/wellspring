// dependencies
import styled from 'styled-components';

// styles
import { media } from '../../styles/theme';

const Box = styled.div`
  padding: 0 1em;
  margin: 0 auto;
  max-width: 968px;
  min-width: 320px;
  width: 100%;

  ${media.small} {
    padding: 0 2em;
  }
`;

export default Box;
