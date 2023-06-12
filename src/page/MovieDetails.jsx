import React from 'react';
import { Outlet } from 'react-router-dom';

const MovieDetails = () => {
  return (
    <>
      <div>MovieDetails</div>
      <Outlet />
    </>
  );
};

export default MovieDetails;
