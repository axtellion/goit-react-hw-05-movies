import { Box } from 'components/Box';
import { SearchInput, Btn, SearchForm } from './MoveSearch,styled';
import * as yup from 'yup';
import { Formik } from 'formik';

const schema = yup.object().shape({
  search: yup.string().required(),
});

export const MoveSearch = ({ onSubmit }) => {
  return (
    <Box mt={4}>
      <Formik
        initialValues={{ search: '' }}
        validationSchema={schema}
        onSubmit={onSubmit}
      >
        <SearchForm>
          <SearchInput type="text" name="search"></SearchInput>
          <Btn type="submit">Search</Btn>
        </SearchForm>
      </Formik>
    </Box>
  );
};
