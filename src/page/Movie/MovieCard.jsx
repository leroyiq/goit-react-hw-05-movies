import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { AddInfo, ButtonBack, DIV, DIVinfo, IMG } from './MovieDetails.styled';
import { Link, Outlet } from 'react-router-dom';

const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';

const MovieCard = ({ dataCard, onClick }) => {
  const { poster_path, title, vote_average, overview, genres, release_date } = dataCard;

  return (
    <>
      <ButtonBack type="button" onClick={onClick}>
        <BsFillArrowLeftCircleFill style={{ fontSize: 18 }} /> Back
      </ButtonBack>
      <DIV>
        <IMG src={`${imgBaseUrl}${poster_path}`} alt={title} width={250} style={{ marginTop: '20px' }} />
        <DIVinfo>
          <h2>
            {title} ({release_date.split('-')[0]})
          </h2>
          <p>User score : {parseInt(vote_average * 10)}%</p>
          <br />
          <p>
            <b>Overview</b>
          </p>
          <br />
          <p style={{ maxWidth: '500px' }}>{overview}</p>

          <br />
          <span>
            <b>Genres</b>
          </span>
          {genres && <p>{genres.map(genre => genre.name + '  ')}</p>}
        </DIVinfo>
      </DIV>
      <AddInfo>
        <h3>Additional information</h3>

        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </AddInfo>

      <Outlet />
    </>
  );
};

export default MovieCard;
