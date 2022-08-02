import { useLocation } from 'react-router-dom';
import { MoviLink, List } from './MoveSearchList.styled';

export const MoveSearchList = ({ array }) => {
  const result = array.results;
  const location = useLocation();

  return (
    <List>
      {result.map(({ id, title }) => {
        return (
          <MoviLink to={`${id}`} key={id} state={{ from: location }}>
            {title}
          </MoviLink>
        );
      })}
    </List>
  );
};
