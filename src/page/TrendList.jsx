import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const TrendList = ({ trendMovie }) => {
  const location = useLocation();

  return (
    <>
      <h2 style={{ marginLeft: '20px' }}>Trending today</h2>
      <ul>
        {trendMovie.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TrendList;
