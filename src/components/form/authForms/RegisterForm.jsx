import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Box } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
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
      mt={20}
      bgGradient={[
        'linear(to-tr, gray.400, gray.200)',
        'linear(to-t, gray.200, gray.100)',
        'linear(to-b, gray.100, gray.300)',
      ]}
      height={450}
      borderRadius="5px"
      boxShadow="dark-lg"
      p="6"
      rounded="md"
    >
      <h1>Register</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',

          padding: 15,
        }}
      >
        <label
          style={{ display: 'flex', flexDirection: 'column', marginTop: 10 }}
        >
          First name <i style={{ fontSize: 12 }}>(5 - 12 chars)</i>
          <Input
            type="text"
            name="name"
            placeholder="name"
            pattern="\w{5,12}"
            outline="1px solid gray"
          />
        </label>

        <label
          style={{ display: 'flex', flexDirection: 'column', marginTop: 10 }}
        >
          Email
          <Input
            type="email"
            name="email"
            placeholder="email"
            outline="1px solid gray"
          />
        </label>
        <label
          style={{ display: 'flex', flexDirection: 'column', marginTop: 10 }}
        >
          Password <i style={{ fontSize: 12 }}>(5 - 12 chars)</i>
          <Input
            type="password"
            name="password"
            placeholder="password"
            outline="1px solid gray"
          />
        </label>
        <button type="submit" style={{ marginTop: 20 }}>
          <Box
            as="button"
            color="white"
            fontWeight="bold"
            borderRadius="md"
            bgGradient="linear(to-r, teal.500, green.500)"
            w="300px"
            h="50px"
            _hover={{
              bgGradient: 'linear(to-r, red.500, yellow.500)',
            }}
          >
            Send
          </Box>
        </button>
      </form>
    </Box>
  );
};
