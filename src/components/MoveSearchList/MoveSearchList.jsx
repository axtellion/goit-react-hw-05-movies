import { MoviLink, List } from './MoveSearchList.styled';
import { useLocation } from 'react-router-dom';

export const MoveSearchList = ({ array }) => {
  const location = useLocation();
  console.log(location);

  const result = array.results;

  return (
    <List>
      {result.map(({ id, title }) => {
        return (
          <MoviLink to={`${id}`} key={id}>
            {title}
          </MoviLink>
        );
      })}
    </List>
  );
};
