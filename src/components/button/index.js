/**
 * Button
 */

import { Link } from 'react-router';
import styled from 'styled-components';

const Button = styled(Link)`
  align-items: center;
  background: ${props => props.contrast ? '#ea4429' : '#077dc9'};
  border: 1px solid transparent;
  border-radius: 3px;
  color: #f3f6f8;
  cursor: pointer;
  display: inline-flex;
  font-size: 1em;
  justify-content: center;
  line-height: 1;
  margin: 0.5em 1em 0.5em 0;
  padding: 0.5em 1em;
  transition: background 0.25s ease-out, color 0.25s ease-out;
  -webkit-appearance: none;

  &:hover,
  &:focus {
    background: ${props => props.contrast ? '#ec5840' : '#088ce2'};
    color: #fff;
  }
`;

export default Button;
