import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { ApiServices } from 'Api/ApiServices';
import { toast } from 'react-hot-toast';
import Endpoint from 'Api/Endpoint';
import { useState } from 'react';
import MovieCard from './MovieCard';



const MovieDetails = () => {
  const navigateBack = useNavigate();
  const location = useLocation();
  const [movieInfo, setMovieInfo] = useState('');

  const { movieId } = useParams();

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

  return movieInfo && <MovieCard dataCard={movieInfo} onClick={onClick} />;
};

export default MovieDetails;
