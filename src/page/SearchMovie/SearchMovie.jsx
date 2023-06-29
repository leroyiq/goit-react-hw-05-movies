import { FindMovie } from 'components/Api/ApiServices';

import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const SearchMovie = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movieList, setMovieList] = useState();
  const query = searchParams.get('query');
  const location = useLocation();

  const inputChange = ({ target }) => {
    if (target.value === '') return setSearchParams({});
    setSearchParams({ query: target.value });
  };

  const getSearch = async () => {
    try {
      const movieData = await FindMovie(`&query=${query}`);
      if (movieData.length === 0) {
        return toast.error('Movies not found. Please try again.');
      }
      setMovieList(movieData);
    } catch (error) {
      toast.error('Sory error request movies', error);
    }
  };

  const searchSubmit = event => {
    event.preventDefault();

    getSearch();
  };

  useEffect(() => {
    if (!query) return;
    getSearch();
  }, []);

  return (
    <>
      <form onSubmit={searchSubmit} style={{ margin: '15px' }}>
        <input type="text" name="query" value={query ?? ''} required onChange={inputChange} />
        <button type="submit">Search</button>
      </form>
      {movieList && (
        <ul>
          {movieList.map(({ id, title }) => {
            return (
              <li key={id}>
                <Link to={`/movies/${id}`} state={{ from: location }}>
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default SearchMovie;
