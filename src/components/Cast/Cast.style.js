import styled from 'styled-components';

export const CastPoster = styled.img`
  width: 200px;
  height: 250px;
`;

export const List = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  gap: 20px;
`;

export const Item = styled.li`
  width: 328px;
  height: 400px;
  flex-direction: column;
  flex-wrap: wrap;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 20px;

  background-color: #d3d3d3;
  color: white;
`;
