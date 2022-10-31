import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchFilms = async () => {
    const response = await axios.get('/trending/all/day', {
      params: {
        api_key: 'ac2f015efbd63aedea7bf25c08e7a150',
      }
    })
    
    return response.data.results;
};

export const fetchFilmsById = async (id) => {
    const response = await axios.get(`/movie/${id}`, {
      params: {
        api_key: 'ac2f015efbd63aedea7bf25c08e7a150',
      }
    })
  
    return response.data;
};

export const fetchFilmsByCredits = async (id) => {
    const response = await axios.get(`/movie/${id}/credits`, {
      params: {
        api_key: 'ac2f015efbd63aedea7bf25c08e7a150',
      }
    })
  
    return response.data.cast;
};

export const fetchFilmsReviews = async (id) => {
    const response = await axios.get(`/movie/${id}/reviews`, {
      params: {
        api_key: 'ac2f015efbd63aedea7bf25c08e7a150',
      }
    })
  
  return response.data.results;
};

export const fetchFilmsByQuery = async (query) => {
    const response = await axios.get(`/search/movie`, {
      params: {
        api_key: 'ac2f015efbd63aedea7bf25c08e7a150',
        query: query,
      }
    })
  
  return response.data.results;
};




  


