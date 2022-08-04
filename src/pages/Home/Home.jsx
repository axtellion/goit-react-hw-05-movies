import { Box } from 'components/Box';
import { useEffect, useState } from 'react';
import { fetchTrendigMovies } from '../../services/api';
import { MoviLink, List } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const tranding = fetchTrendigMovies();

    tranding.then(res => {
      return setMovies([...res.results]);
    });
  }, []);

  return (
    <Box>
      <Box as="h1" my={4}>
        Tranding today
      </Box>
      <List>
        {movies.map(({ id, title }) => (
          <MoviLink to={`movies/${id}`} key={id}>
            {title}
          </MoviLink>
        ))}
      </List>
    </Box>
  );
};

export default Home;
