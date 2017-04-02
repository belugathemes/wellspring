// dependencies
import styled from 'styled-components';

// styles
import { color, radius } from '../../styles/theme';

const ToggleIconBar = styled.div`
  background: ${color.white};
  border-radius: ${radius};
  display: block;
  height: 2px;
  margin-bottom: ${4 / 16}rem;
  transition: transform 0.3s;
  width: ${22 / 16}rem;
`;

export default ToggleIconBar;
