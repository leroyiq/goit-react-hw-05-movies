import React from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import styled from 'styled-components';
import { useEffect } from 'react';
import { ApiServices } from 'components/Api/ApiServices';
import { toast } from 'react-hot-toast';
import Endpoint from 'components/Api/Endpoint';
import { useState } from 'react';

const ButtonBack = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #d6e1e3;
  margin-left: 15px;
  cursor: pointer;
  transition: transform 250ms ease-out;
  &:hover {
    background-color: #20329d;
    color: #d6e1e3;
    transform: translate(0px, 0px) scale(1.03, 1.03);
  }
`;

const MovieDetails = () => {
  const navigateBack = useNavigate();
  const location = useLocation();
  const [movieInfo, setMovieInfo] = useState([]);

  const params = useParams();

  const onClick = () => {
    location.state ? navigateBack(location.state.from) : navigateBack('/');
  };

  useEffect(() => {
    const getMovie = async () => {
      try {
        const movieData = await ApiServices(`${Endpoint.movieInfo}${params.movieId}`);
        console.log(Endpoint.movieInfo + params.movieId);
        setMovieInfo(movieData);
      } catch (error) {
        toast.error('Sory error trending', error);
      }
    };

    getMovie();
  }, [params.movieId]);

  console.log(movieInfo);

  return (
    <>
      <ButtonBack type="button" onClick={onClick}>
        <BsFillArrowLeftCircleFill style={{ fontSize: 18 }} /> Back
      </ButtonBack>

      <Outlet />
    </>
  );
};

export default MovieDetails;
