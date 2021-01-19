import React from 'react';
import { StatusBar, Text } from 'react-native';

import { Container } from './styles';

const CarSearch: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Container>
        <Text>Car Search</Text>
      </Container>
    </>
  );
};

export default CarSearch;
