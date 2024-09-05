import React, { useState } from 'react';
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

const CarDetails = () => {
  const [carDetails, setCarDetails] = useState({
    model: '',
    brand: '',
    price: '',
    mileage: '',
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarDetails({ ...carDetails, [name]: value });
  };

  const handleFileChange = (e) => {
    setCarDetails({ ...carDetails, photo: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Car Details Submitted:', carDetails);
  };

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
          Car Details
        </Heading>
        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <FormControl id="model" isRequired>
              <FormLabel>Car Model</FormLabel>
              <Input
                type="text"
                name="model"
                placeholder="Enter car model"
                value={carDetails.model}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="brand" isRequired>
              <FormLabel>Brand</FormLabel>
              <Input
                type="text"
                name="brand"
                placeholder="Enter car brand"
                value={carDetails.brand}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="price" isRequired>
              <FormLabel>Price</FormLabel>
              <Input
                type="number"
                name="price"
                placeholder="Enter car price"
                value={carDetails.price}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="mileage" isRequired>
              <FormLabel>Mileage</FormLabel>
              <Input
                type="text"
                name="mileage"
                placeholder="Enter car mileage"
                value={carDetails.mileage}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="photo" isRequired>
              <FormLabel>Car Photo</FormLabel>
              <Input
                type="file"
                name="photo"
                accept="image/*"
                onChange={handleFileChange}
              />
            </FormControl>
            <Button type="submit" colorScheme="blue" size="lg" w="full">
              Submit
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  );
};

export default CarDetails;
