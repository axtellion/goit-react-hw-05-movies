import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  margin-left: 10px;
  display: flex;
  flex-direction: column;

  gap: 10px;
`;

export const Text = styled.h3`
  margin-bottom: 20px;
`;

export const NavItem = styled(NavLink)`
  text-decoration: none;
  color: blue;

  :active,
  :hover {
    color: red;
  }
`;
