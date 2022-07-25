import { Box } from 'components/Box';
import { useEffect } from 'react';
import { useState } from 'react';
import { fetchTrendigMovies } from '../services/api';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const tranding = fetchTrendigMovies();

    tranding.then(res => {
      return setMovies([...res.results]);
    });
  }, []);

  return (
    <Box>
      <Box as="h1" my={[4]}>
        Tranding today
      </Box>
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </Box>
  );
};
