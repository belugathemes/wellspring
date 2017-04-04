// dependencies
import React from 'react';

// components
import Header from './header';
import Menu from './menu';
import MenuLink from './menu-link';
import MenuList from './menu-list';
import NavBox from './navbox';
import TitleLink from './title-link';
import Toggle from './toggle';
import ToggleIcon from './toggle-icon';
import ToggleIconBar from './toggle-icon-bar';
import ToggleText from './toggle-text';
import Wrapper from './wrapper';

const Navigation = props => (
  <Wrapper>
    <NavBox>
      <Header>
        <TitleLink to="/">Wellspring</TitleLink>
        <Toggle onClick={props.onClick}>
          <ToggleText>Menu</ToggleText>
          <ToggleIcon>
            <ToggleIconBar navIsOpen={props.navIsOpen} />
            <ToggleIconBar navIsOpen={props.navIsOpen} />
            <ToggleIconBar navIsOpen={props.navIsOpen} />
          </ToggleIcon>
        </Toggle>
      </Header>
      <Menu>
        <MenuList><MenuLink to="/" onClick={props.onClick}>Home</MenuLink></MenuList>
        <MenuList><MenuLink to="/blog" onClick={props.onClick}>Blog</MenuLink></MenuList>
        <MenuList><MenuLink to="/about" onClick={props.onClick}>About</MenuLink></MenuList>
      </Menu>
    </NavBox>
  </Wrapper>
);

export default Navigation;
