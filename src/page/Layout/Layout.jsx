import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import { ActiveNavLink, NavList } from './Layout.styled';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <>
      <nav style={{ position: 'sticky', top: '0', backgroundColor: 'white', zIndex: '99' }}>
        <NavList>
          <li>
            <ActiveNavLink to="/">Home</ActiveNavLink>
          </li>
          <li>
            <ActiveNavLink to="/movies">Movies</ActiveNavLink>
          </li>
        </NavList>
      </nav>
      <Suspense fallback={'Loading . . .'}>
        <Outlet />
      </Suspense>
      <Toaster />
    </>
  );
};

export default Layout;
