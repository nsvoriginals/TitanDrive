import React, { useEffect, useState } from 'react';
import { Box, Grid, Card, CardBody, CardHeader, Heading, Text, Image, Stack ,Button} from '@chakra-ui/react';
import axios from 'axios';

const CarList = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Mock API call with sample data
    const fetchCars = async () => {
      try {
        // Simulating an API call with sample data
        const mockData = [
          { id: 1, brand: 'Toyota', model: 'Corolla', price: '20000', mileage: '15000', photo: 'https://example.com/images/toyota-corolla.jpg' },
          { id: 2, brand: 'Honda', model: 'Civic', price: '22000', mileage: '12000', photo: 'https://example.com/images/honda-civic.jpg' },
          { id: 3, brand: 'Ford', model: 'Mustang', price: '30000', mileage: '8000', photo: 'https://example.com/images/ford-mustang.jpg' },
          { id: 4, brand: 'Chevrolet', model: 'Camaro', price: '28000', mileage: '10000', photo: 'https://example.com/images/chevrolet-camaro.jpg' },
          { id: 5, brand: 'BMW', model: '3 Series', price: '35000', mileage: '5000', photo: 'https://example.com/images/bmw-3-series.jpg' }
        ];
        setCars(mockData);
      } catch (err) {
        setError('Failed to fetch cars');
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text color="red.500">{error}</Text>;

  return (
    <Box
      p={4}
      minHeight="100vh"
      backgroundColor="gray.100"
    >
      <Heading mb={6} textAlign="center">Available Cars</Heading>
      <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={6}>
        {cars.map((car) => (
          <Card key={car.id} borderWidth={1} borderRadius="lg" boxShadow="lg" bg="white">
            <CardHeader>
              <Heading size="md">{car.brand} {car.model}</Heading>
            </CardHeader>
            <CardBody>
              <Stack spacing={4}>
                {car.photo && (
                  <Image
                    src={car.photo} 
                    alt={`${car.brand} ${car.model}`}
                    borderRadius="md"
                  />
                )}
                <Text><strong>Model:</strong> {car.model}</Text>
                <Text><strong>Price:</strong> ${car.price}</Text>
                <Text><strong>Mileage:</strong> {car.mileage} miles</Text>
                <Button colorScheme="blue">Buy</Button>
                <Button colorScheme="blue">Delete</Button>
              </Stack>
            </CardBody>
          </Card>
        ))}
      </Grid>
    </Box>
  );
};

export default CarList;
