import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '7440791f0a0892207a553d4050f3a946';

export async function fetchTrendigMovies() {
  const responce = await axios.get(
    `${API_URL}trending/movie/day?api_key=${API_KEY}`
  );

  return responce.data;
}

export async function fetchDetailsMovies(movie_id) {
  const responce = await axios.get(
    `${API_URL}/movie/${movie_id}?api_key=${API_KEY}`
  );

  return responce.data;
}

export async function getMoviesCast(movie_id) {
  const responce = await axios.get(
    `${API_URL}/movie/${movie_id}/credits?api_key=${API_KEY}`
  );

  return responce.data;
}

export async function getMoviesReviews(movie_id) {
  const responce = await axios.get(
    `${API_URL}/movie/${movie_id}/reviews?api_key=${API_KEY}`
  );

  return responce.data;
}
