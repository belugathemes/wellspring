// dependencies
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// styles
import { color, radius } from '../../styles/theme';

const Button = styled(Link)`
  align-items: center;
  background: ${props => props.contrast ? color.contrast : color.primary};
  border: 1px solid transparent;
  border-radius: ${radius};
  color: ${color.white};
  cursor: pointer;
  display: inline-flex;
  font-size: 1em;
  justify-content: center;
  line-height: 1;
  margin: 0.5em 1em 0.5em 0;
  padding: 0.5em 1em;
  transition: background 0.25s ease-out, color 0.25s ease-out;
  -webkit-appearance: none;

  &:hover, &:focus {
    background: ${props => props.contrast ? color.contrastDark : color.primaryDark};
    color: #fff;
  }
`;

export default Button;
