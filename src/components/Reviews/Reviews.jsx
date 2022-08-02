import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesReviews } from 'services/api';
import { Item, List } from './Reviews.styled';

export const Reviews = () => {
  const [state, setState] = useState();
  const { id } = useParams();

  useEffect(() => {
    getMoviesReviews(id).then(setState);
  }, [id]);
  return (
    <List>
      {state && state.results.length > 0 ? (
        state.results.map(({ id, author, content }) => {
          return (
            <Item key={id}>
              <h3>Author: {author}.</h3>
              <p>{content}</p>
            </Item>
          );
        })
      ) : (
        <h3>We don't have any reviews for this movie</h3>
      )}
    </List>
  );
};
