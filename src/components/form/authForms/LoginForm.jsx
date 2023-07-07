import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@chakra-ui/react';
import { logIn } from 'redux/auth/operations';
import { Input } from '@chakra-ui/react';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const errorLogin = useSelector(state => state.error);

  const handleLogin = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <Box
      maxW="500px"
      mx="auto"
      mt={24}
      bgGradient={[
        'linear(to-tr, gray.400, gray.200)',
        'linear(to-t, gray.200, gray.100)',
        'linear(to-b, gray.100, gray.300)',
      ]}
      height={350}
      borderRadius="5px"
      boxShadow="dark-lg"
      p="6"
      rounded="md"
    >
      {errorLogin && <div>Error login</div>}
      <h1>Login</h1>
      <form
        onSubmit={handleLogin}
        style={{
          display: 'flex',
          flexDirection: 'column',

          padding: 15,
        }}
      >
        <label
          style={{ display: 'flex', flexDirection: 'column', marginTop: 10 }}
        >
          Email
          <Input
            type="text"
            name="email"
            placeholder="Phone number"
            outline="1px solid green"
          />
        </label>
        <label
          style={{ display: 'flex', flexDirection: 'column', marginTop: 10 }}
        >
          Password
          <Input
            type="password"
            name="password"
            placeholder="Phone number"
            outline="1px solid green"
          />
        </label>

        <Box
          as="button"
          type="submit"
          color="white"
          fontWeight="bold"
          borderRadius="md"
          bgGradient="linear(to-r, teal.500, green.500)"
          w="300px"
          h="50px"
          _hover={{
            bgGradient: 'linear(to-r, red.500, yellow.500)',
          }}
          mx="60px"
          mt={3}
        >
          Send
        </Box>
      </form>
    </Box>
  );
};
