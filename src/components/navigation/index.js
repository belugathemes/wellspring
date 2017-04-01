// dependencies
import React from 'react';

// components
import Header from './header';
import Menu from './menu';
import MenuLink from './menu-link';
import MenuList from './menu-list';
import NavBox from './navbox';
import TitleLink from './title-link';
import Wrapper from './wrapper';

const Navigation = () => (
  <Wrapper>
    <NavBox>
      <Header>
        <TitleLink to="/">Wellspring</TitleLink>
      </Header>
      <Menu>
        <MenuList><MenuLink to="/">Home</MenuLink></MenuList>
        <MenuList><MenuLink to="/blog">Blog</MenuLink></MenuList>
        <MenuList><MenuLink to="/about">About</MenuLink></MenuList>
      </Menu>
    </NavBox>
  </Wrapper>
);

export default Navigation;
