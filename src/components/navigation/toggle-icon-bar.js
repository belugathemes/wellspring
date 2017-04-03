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

  &:nth-child(1) {
    transform: ${props => props.navIsOpen ? 'translateY(6px) rotate(-45deg)' : 'none'};
  }

  &:nth-child(2) {
    transform: ${props => props.navIsOpen ? 'scale(0)' : 'none'};
  }

  &:nth-child(3) {
    transform: ${props => props.navIsOpen ? 'translateY(-6px) rotate(45deg)' : 'none'};
  }
`;

export default ToggleIconBar;
