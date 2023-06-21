import { ApiServices } from 'components/Api/ApiServices';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import TrendList from '../TrendList/TrendList';
import Endpoint from 'components/Api/Endpoint';

const Home = () => {
  const [trendMovie, setTrendMovie] = useState([]);
  const { trendMovieList } = Endpoint;

  useEffect(() => {
    const getTrend = async () => {
      try {
        const trendingMovieArray = await ApiServices(trendMovieList);
        setTrendMovie(trendingMovieArray);
      } catch (error) {
        toast.error('Sory error trending', error);
      }
    };

    getTrend();
  }, [trendMovieList]);
  console.log(trendMovie);

  return trendMovie && <TrendList trendMovie={trendMovie} />;
};

export default Home;
