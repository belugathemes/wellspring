// dependencies
import React from 'react';

// components
import Header from './header';
import Menu from './menu';
import MenuList from './menu-list';
import NavBox from './navbox';
import NavLink from './navlink';
import Wrapper from './wrapper';

const Navigation = () => (
  <Wrapper>
    <NavBox>
      <Header>
        Wellspring
      </Header>
      <Menu>
        <MenuList><NavLink to="/">Home</NavLink></MenuList>
        <MenuList><NavLink to="/blog">Blog</NavLink></MenuList>
        <MenuList><NavLink to="/about">About</NavLink></MenuList>
      </Menu>
    </NavBox>
  </Wrapper>
);

export default Navigation;
