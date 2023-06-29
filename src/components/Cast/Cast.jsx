import { fetchCast } from 'Api/ApiServices';

import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import defaultIMG from '../../Api/depositphotos_10275817-stock-photo-business-man.jpg';
import { UL } from './Cast.styled';

const Cast = () => {
  const [credits, setCredits] = useState('');
  const { movieId } = useParams();

  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    const getCast = async () => {
      try {
        const movieData = await fetchCast(`/movie/${movieId}/credits`);

        setCredits(movieData);
      } catch (error) {
        toast.error('Sory error credits', error);
      }
    };
    getCast();
  }, [movieId, setCredits]);

  return (
    credits && (
      <div>
        <UL>
          {credits.map(({ id, profile_path, name, character }) => (
            <li key={id}>
              <img src={profile_path ? `${imgBaseUrl}${profile_path}` : defaultIMG} alt={name} width={80} />

              <p>{name}</p>
              <span>Character : {character}</span>
            </li>
          ))}
        </UL>
      </div>
    )
  );
};

export default Cast;
