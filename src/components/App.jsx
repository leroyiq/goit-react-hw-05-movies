import Cast from 'page/Cats/Cast';
import Home from 'page/Home/Home';
import Layout from 'page/Layout/Layout';
import Movie from 'page/Movie/Movie';
import MovieDetails from 'page/Movie/MovieDetails';
import NotFound from 'page/NotFound/NotFound';
import Reviews from 'page/Reviews/Reviews';
import { Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movie />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
