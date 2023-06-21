import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import { ActiveNavLink, NavList } from './Layout.styled';

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
