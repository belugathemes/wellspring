// dependecies
import styled from 'styled-components';

// styles
import { color, media } from '../../styles/theme';

const Wrapper = styled.article`
  border: 1px solid ${color.gray};
  border-radius: 3px;
  padding: 1em;

  ${media.medium} {
    font-size: ${18 / 16}rem;
    min-height: 22em;
  }
`;

export default Wrapper;
