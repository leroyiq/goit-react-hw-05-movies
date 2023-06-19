import React from 'react';

import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const MovieDetails = () => {
  const navigateBack = useNavigate();
  const location = useLocation();
  const onClick = () => {
    navigateBack(location.state.from);
  };
  return (
    <>
      <button type="button" onClick={onClick}>
        {'<< -  '}Go back
      </button>

      <Outlet />
    </>
  );
};

export default MovieDetails;
