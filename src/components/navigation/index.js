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
        <TitleLink to="/" onClick={props.navIsOpen && props.closeNav}>
          Wellspring
        </TitleLink>
        <Toggle onClick={props.toggleNav}>
          <ToggleText>Menu</ToggleText>
          <ToggleIcon>
            <ToggleIconBar navIsOpen={props.navIsOpen} />
            <ToggleIconBar navIsOpen={props.navIsOpen} />
            <ToggleIconBar navIsOpen={props.navIsOpen} />
          </ToggleIcon>
        </Toggle>
      </Header>
      <Menu>
        <MenuList>
          <MenuLink to="/features" onClick={props.navIsOpen && props.closeNav}>Features</MenuLink>
        </MenuList>
        <MenuList>
          <MenuLink to="/typography" onClick={props.navIsOpen && props.closeNav}>Typography</MenuLink>
        </MenuList>
        <MenuList>
          <MenuLink to="/blog" onClick={props.navIsOpen && props.closeNav}>Blog</MenuLink>
        </MenuList>
        <MenuList>
          <MenuLink to="/about" onClick={props.navIsOpen && props.closeNav}>About</MenuLink>
        </MenuList>
      </Menu>
    </NavBox>
  </Wrapper>
);

export default Navigation;
