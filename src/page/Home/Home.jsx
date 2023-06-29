import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import Endpoint from 'Api/Endpoint';
import TrendList from 'components/TrendList/TrendList';
import { ApiServices } from 'Api/ApiServices';

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

  return trendMovie && <TrendList trendMovie={trendMovie} />;
};

export default Home;
