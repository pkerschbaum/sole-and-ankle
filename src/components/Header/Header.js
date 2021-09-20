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
        <SideSpacer>
          <Logo />
        </SideSpacer>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <SideSpacer />
      </MainHeader>
    </header>
  );
};

const FLEX_GAP = 48;

const MainHeader = styled.div`
  border-bottom: 1px solid ${COLORS.gray[300]};

  display: flex;
  align-items: baseline;
  /* omit padding on the right side since there will be a "gap" anyway (because of the empty SideSpacer element) */
  padding: 22px 0 22px 32px;
  gap: 32px;
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

const SideSpacer = styled.div`
  flex: 1;
`;

export default Header;
