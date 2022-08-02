import { Box } from 'components/Box';
import { SearchInput, Btn } from './MoveSearch,styled';

export const MoveSearch = ({ onSubmit, value, onChange }) => {
  return (
    <Box mt={4} display="flex" as="form" onSubmit={onSubmit}>
      <SearchInput
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      <Btn type="submit">Search</Btn>
    </Box>
  );
};
