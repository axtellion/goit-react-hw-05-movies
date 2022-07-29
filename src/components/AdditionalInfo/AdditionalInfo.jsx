import { Box } from 'components/Box';
import { Outlet } from 'react-router-dom';
import { List, NavItem, Text } from './AdditionalInfo.style';

export const AdditionalInfo = () => {
  return (
    <>
      <Box borderBottom="1px solid black" borderTop="1px solid black" pb={3}>
        <Box mt={4} ml={3}>
          <Text>Additional information</Text>
          <List>
            <NavItem to="cast">Cast</NavItem>
            <NavItem to="reviews">Reviews</NavItem>
          </List>
        </Box>
      </Box>
      <Outlet />
    </>
  );
};
