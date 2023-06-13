import axios from 'axios';
import { toast } from 'react-hot-toast';

const baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '?api_key=daa520ad18df8c3872ae77ceafe7ed32';
const trending_all = '/trending/movie/day';
// const search_movie = '/search/movie';

export const ApiServices = async () => {
  try {
    const response = await axios.get(`${baseURL}${trending_all}${API_KEY}`);
    return response.data.results;
  } catch (error) {
    toast.error('Ошибка!!!', error);
  }
};
