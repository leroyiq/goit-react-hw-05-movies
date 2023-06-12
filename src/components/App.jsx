import Cast from 'page/Cast';
import Home from 'page/Home';
import Layout from 'page/Layout';
import Movie from 'page/Movie';
import MovieDetails from 'page/MovieDetails';
import NotFound from 'page/NotFound';
import Reviews from 'page/Reviews';
import { Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movie />}>
            <Route path=":movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
