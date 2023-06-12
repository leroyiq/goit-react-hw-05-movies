import React from 'react';
import { Outlet } from 'react-router-dom';

const Movie = () => {
  return (
    <>
      <p>Movie</p>
      <Outlet />
    </>
  );
};

export default Movie;
