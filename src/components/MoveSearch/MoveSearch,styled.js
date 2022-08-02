import styled from 'styled-components';

export const ErrorForm = styled.div`
  color: red;
  margin-bottom: 10px;
`;

export const SearchInput = styled.input`
  width: 300px;
  height: 40px;
  outline: none;
  &:active,
  :hover,
  :focus {
    border-color: blue;
  }
`;

export const Btn = styled.button`
  width: 200px;
  color: white;
  background-color: #5f9ea0;

  padding: 5px;
`;
