import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet, NavLink } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
      <Toaster />
    </>
  );
};

export default Layout;
