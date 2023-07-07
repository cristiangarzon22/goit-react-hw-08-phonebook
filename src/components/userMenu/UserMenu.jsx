import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import { Text } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/react';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Box
      mt={1}
      bgGradient={[
        'linear(to bottom, #F8F8F8, #EDEDED)',
        'linear(to top, #EDEDED, #F8F8F8)',
      ]}
    >
      <Text textAlign={['left', 'center']} fontSize="2em">
        Welcome : {user.name}
      </Text>

      <Button
        type="button"
        onClick={() => dispatch(logOut())}
        rightIcon={<ArrowForwardIcon />}
        colorScheme="teal"
        variant="outline"
      >
        LogOut
      </Button>
    </Box>
  );
};

export default UserMenu;
