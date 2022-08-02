import { Box } from 'components/Box';
import { SearchInput, Btn } from './MoveSearch,styled';

export const MoveSearch = ({ value, onChange }) => {
  return (
    <Box mt={4} display="flex">
      <SearchInput
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      <Btn type="submit">Search</Btn>
    </Box>
  );
};
