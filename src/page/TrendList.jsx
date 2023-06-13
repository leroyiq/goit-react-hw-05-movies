import React from 'react';
import { Link } from 'react-router-dom';
import MovieDetails from './MovieDetails';

const TrendList = ({ trendMovie }) => {
  return (
    <>
      <h2>Trending today</h2>
      <ul>
        {trendMovie.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link to="/movies/:movieId">{title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TrendList;
