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

const Register = () => {
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
          Create an Account
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
          <FormControl id="confirm-password" isRequired>
            <FormLabel>Confirm Password</FormLabel>
            <Input type="password" placeholder="Confirm your password" />
          </FormControl>
          <FormControl id="name" isRequired>
            <FormLabel>UserName</FormLabel>
            <Input type="text" placeholder="Enter your full name" />
          </FormControl>
          <Stack spacing={6}>
            <Button colorScheme="blue" size="lg" w="full">
              Register
            </Button>
            <Text textAlign="center">
              Already have an account?{' '}
              <a href="/login" style={{ color: 'blue' }}>Log in</a>
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default Register;
