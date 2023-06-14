import React from 'react';
import { BiCaretLeft } from 'react-icons/bi';
import { Link, Outlet } from 'react-router-dom';

const MovieDetails = () => {
  return (
    <>
      <Link>
        <BiCaretLeft /> Go back
      </Link>
      <div>
        <input type="text" aria-label="Movie Search"></input>
        <button type="button">Search</button>
      </div>
      <Outlet />
    </>
  );
};

export default MovieDetails;
