import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const ActiveNavLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <ActiveNavLink to="/">Home</ActiveNavLink>
          </li>
          <li>
            <ActiveNavLink to="/movies">Movies</ActiveNavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
      <Toaster />
    </>
  );
};

export default Layout;
