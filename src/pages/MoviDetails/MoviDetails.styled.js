import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const PosterImg = styled.img`
  width: 200px;
  height: 300px;

  margin-right: 20px;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;

  gap: 20px;
`;

export const Title = styled.h2`
  display: inline-block;
  margin-right: 10px;
`;

export const List = styled.ul`
  display: flex;
  gap: 10px;
`;

export const NavItem = styled(NavLink)`
  border-radius: 5px;
  border: 1px solid black;
  display: flex;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  color: white;
  text-decoration: none;

  gap: 10px;

  width: 150px;
  height: 40px;
  background-color: #00bfff;

  :hover {
    color: orange;
  }

  svg {
    width: 40px;
    height: 40px;
  }
`;
