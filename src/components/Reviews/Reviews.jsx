import { fetchReviews } from 'Api/ApiServices';

import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    const getReview = async () => {
      try {
        const movieData = await fetchReviews(`/movie/${movieId}/reviews`);

        setReviews(movieData);
      } catch (error) {
        toast.error('Sory error credits', error);
      }
    };
    getReview();
  }, [movieId]);

  if (reviews.length === 0) {
    return <p>We don't have any reviews for this movie</p>;
  }

  return (
    <ul>
      {reviews.map(({ author, content, id }) => {
        return (
          <li key={id}>
            <h3>Author: {author}</h3>
            <p>{content}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Reviews;
