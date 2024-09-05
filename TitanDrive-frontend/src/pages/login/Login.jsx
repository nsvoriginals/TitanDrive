import React from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Heading,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

const Login = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      backgroundColor="gray.100"
      p={4}
    >
      <Box
        maxW="md"
        w="full"
        p={6}
        borderWidth={1}
        borderRadius="lg"
        boxShadow="lg"
        bg="white"
      >
        <Heading mb={6} textAlign="center" fontSize={useBreakpointValue({ base: '2xl', md: '3xl' })}>
          Sign In
        </Heading>
        <Stack spacing={4}>
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input type="email" placeholder="Enter your email" />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="Enter your password" />
          </FormControl>
          <Stack spacing={6}>
            <Button colorScheme="blue" size="lg" w="full">
              Log In
            </Button>
            <Text textAlign="center">
              <a href="/forgot-password" style={{ color: 'blue' }}>Forgot password?</a>
            </Text>
            <Text textAlign="center">
              Don't have an account?{' '}
              <a href="/register" style={{ color: 'blue' }}>Create an account</a>
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default Login;
