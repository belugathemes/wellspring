// dependencies
import { Link } from 'react-router-dom';
import React from 'react';

const Title = props => (
  <h2>
    <Link to={props.url}>{props.title}</Link>
  </h2>
);

export default Title;
