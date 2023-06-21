import React from 'react';
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';

import { useEffect } from 'react';
import { ApiServices } from 'components/Api/ApiServices';
import { toast } from 'react-hot-toast';
import Endpoint from 'components/Api/Endpoint';
import { useState } from 'react';
import { ButtonBack } from './MovieDetails.styled';

const MovieDetails = () => {
  const navigateBack = useNavigate();
  const location = useLocation();
  const [movieInfo, setMovieInfo] = useState('');

  const { movieId } = useParams();
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';

  const onClick = () => {
    location.state ? navigateBack(location.state.from) : navigateBack('/');
  };

  useEffect(() => {
    const getMovie = async () => {
      try {
        const movieData = await ApiServices(`${Endpoint.movieInfo}${movieId}`);

        setMovieInfo(movieData);
      } catch (error) {
        toast.error('Sory error trending', error);
      }
    };
    getMovie();
  }, [movieId]);

  const { poster_path, title, vote_average, overview, genres } = movieInfo;

  return (
    <>
      <ButtonBack type="button" onClick={onClick}>
        <BsFillArrowLeftCircleFill style={{ fontSize: 18 }} /> Back
      </ButtonBack>
      <div>
        <img src={`${imgBaseUrl}${poster_path}`} alt={title} width={250} />
        <h2>{title}</h2>
        <p>User score : {parseInt(vote_average * 10)}%</p>
        <br />
        <p>
          <b>Overview</b>
        </p>
        <br />
        <p>{overview}</p>
        <br />
        <span>
          <b>Genres</b>
        </span>
        {genres && <p>{genres.map(genre => genre.name + '  ')}</p>}
      </div>

      <div>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </div>

      <Outlet />
    </>
  );
};

export default MovieDetails;
