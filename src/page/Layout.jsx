import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const ActiveNavLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  &.active {
    color: orange;
  }
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  font-weight: bold;
  height: 100%;
  padding: 20px;
  margin: 0 auto;
  box-shadow: 0 0 11px 0 #7f8398;
  &:hover li {
    cursor: pointer;
  }
`;

const Layout = () => {
  return (
    <>
      <nav>
        <NavList>
          <li>
            <ActiveNavLink to="/">Home</ActiveNavLink>
          </li>
          <li>
            <ActiveNavLink to="/movies">Movies</ActiveNavLink>
          </li>
        </NavList>
      </nav>
      <Outlet />
      <Toaster />
    </>
  );
};

export default Layout;
