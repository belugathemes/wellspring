// dependencies
import styled from 'styled-components';

// styles
import { color, media, radius } from '../../styles/theme';

const Toggle = styled.button`
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.55);
  border-radius: ${radius};
  color: ${color.white};
  cursor: context-menu;
  display: flex;
  font-size: 1rem;
  margin: ${7 / 16}rem ${8 / 16}rem;

  &:focus {
    outline: 0;
  }

  ${media.medium} {
    display: none;
  }
`;

export default Toggle;
