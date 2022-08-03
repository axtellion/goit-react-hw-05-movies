import styled from 'styled-components';
import { Field, Form } from 'formik';

export const SearchInput = styled(Field)`
  width: 300px;
  height: 40px;
  outline: none;
  &:active,
  :hover,
  :focus {
    border-color: blue;
  }
`;

export const SearchForm = styled(Form)`
  display: flex;
`;

export const Btn = styled.button`
  width: 200px;
  color: white;
  background-color: #5f9ea0;

  padding: 5px;
  :hover,
  :focus {
    border-color: blue;
    background-color: #4682b4;
  }
`;
