// dependecies
import styled from 'styled-components';

// styles
import { font } from '../../styles/theme';

const Entry = styled.section`
  & p:first-child {
    font-size: 1.25em;
    line-height: ${font.lineHeight} + 0.1;

    &:first-letter {
      float: left;
      font-size: 3.0625em; /* 49px */
      font-weight: ${font.weight.bold};
      line-height: 1em;
      margin-right: 0.125em;
      margin-top: 0.1875rem; /* 3px */
    }
  }
`;

export default Entry;
