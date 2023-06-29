import axios from 'axios';
import { toast } from 'react-hot-toast';

const baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '?api_key=daa520ad18df8c3872ae77ceafe7ed32';

export const ApiServices = async endpoint => {
  try {
    const response = await axios.get(`${baseURL}${endpoint}${API_KEY}`);
    if (endpoint === '/trending/movie/day') {
      return response.data.results;
    } else {
      return response.data;
    }
  } catch (error) {
    toast.error('Ошибка!!!', error);
  }
};

export const fetchCast = async endpoint => {
  try {
    const response = await axios.get(`${baseURL}${endpoint}${API_KEY}`);

    return response.data.cast;
  } catch (error) {
    toast.error('Ошибка!!!', error);
  }
};

export const fetchReviews = async endpoint => {
  try {
    const response = await axios.get(`${baseURL}${endpoint}${API_KEY}`);

    return response.data.results;
  } catch (error) {
    toast.error('Ошибка!!!', error);
  }
};

export const FindMovie = async endpoint => {
  try {
    const response = await axios.get(`${baseURL}/search/movie${API_KEY}${endpoint}`);

    return response.data.results;
  } catch (error) {
    toast.error('Ошибка!!!', error);
  }
};
