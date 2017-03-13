/**
 * Navigation
 */

// dependencies
import React from 'react';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';

const Navigation = () => (
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/blog">Blog</Link></li>
    <li><Link to="/about">About</Link></li>
  </ul>
);

export default Navigation;
