import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MoviLink = styled(NavLink)`
  display: flex;
  flex-direction: column;

  text-decoration: none;

  color: blue;

  &:active {
    color: red;
  }
`;

export const List = styled.ul`
  margin-left: 30px;
  display: flex;
  flex-direction: column;

  gap: 5px;
`;
