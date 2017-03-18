// dependencies
import React from 'react';

// components
import Container from '../container';
import Header from './header';
import Menu from './menu';
import NavLink from './navlink';
import Wrapper from './wrapper';

const Navigation = () => (
  <Wrapper>
    <Container>
      <Header>
        Wellspring
      </Header>
      <Menu>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
      </Menu>
    </Container>
  </Wrapper>
);

export default Navigation;
