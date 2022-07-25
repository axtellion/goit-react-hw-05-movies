import { Box } from 'components/Box';
import { NavItem } from './AppBar.styled';
import { BoxHeader } from './AppBar.styled';

export const AppBar = () => {
  return (
    <BoxHeader>
      <Box as="nav" display="flex">
        <NavItem to="/">Home</NavItem>
        <NavItem to="/movies">Movies</NavItem>
      </Box>
    </BoxHeader>
  );
};
