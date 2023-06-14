import { ApiServices } from 'components/Api/ApiServices';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import TrendList from './TrendList';

const Home = () => {
  const [trendMovie, setTrendMovie] = useState([]);

  useEffect(() => {
    const getTrend = async () => {
      try {
        const trendingMovieArray = await ApiServices();
        setTrendMovie(trendingMovieArray);
      } catch (error) {
        toast.error('Sory error trending', error);
      }
    };
    getTrend();
  }, []);

  return trendMovie && <TrendList trendMovie={trendMovie} />;
};

export default Home;
