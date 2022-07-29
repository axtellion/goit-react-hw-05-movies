import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesCast } from 'services/api';
import { CastPoster, Item, List } from './Cast.style';
import defaultImg from 'Img/error_img.jpg';
import { Box } from 'components/Box';

const IMG_URL = 'https://image.tmdb.org/t/p/original';

export const Cast = () => {
  const [state, setState] = useState();
  const { id } = useParams();

  useEffect(() => {
    getMoviesCast(id).then(setState);
  }, [id]);

  return (
    <Box mt={4}>
      <List>
        {state &&
          state.cast
            .slice(0, 9)
            .map(({ id, profile_path, name, character }) => {
              const imagePoster = profile_path
                ? `${IMG_URL}${profile_path}`
                : defaultImg;

              const characterCheck = character
                ? character
                : 'Сharacter not specified';
              return (
                <Item key={id}>
                  <CastPoster src={imagePoster} alt={name} />
                  <p>{name}</p>
                  <p>{characterCheck}</p>
                </Item>
              );
            })}
      </List>
    </Box>
  );
};
