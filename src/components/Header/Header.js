import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';

const Header = () => {
  // Our site features two visual headers, but they should be
  // grouped semantically as a single header.
  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Logo />
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        {/* render a spacing component which takes as much space as the logo.
         * That way, the navigation is horizontally centered.
         * The spacer component will shrink first if no space is available. */}
        <LogoTwinSpacer />
      </MainHeader>
    </header>
  );
};

const LOGO_WIDTH = 130;
const FLEX_GAP = 48;

const MainHeader = styled.div`
  border-bottom: 1px solid ${COLORS.gray[300]};

  display: flex;
  align-items: baseline;
  padding: 22px 32px;

  & > *:first-of-type {
    padding-right: ${FLEX_GAP}px;
  }
`;

const Nav = styled.nav`
  flex-grow: 1;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${FLEX_GAP}px;
`;

const NavLink = styled.a`
  text-align: center;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const LogoTwinSpacer = styled.div`
  flex-basis: ${LOGO_WIDTH + FLEX_GAP}px;
  flex-shrink: 999999999;
`;

export default Header;
