import React from 'react';
import { Image } from 'react-native';
import { Container } from './styles';

interface HeaderImages {
  icon: number;
  page: number;
}

const OnboardingHeader: React.FC<HeaderImages> = ({ icon, page }) => {
  return (
    <Container>
      <Image source={icon} />
      <Image source={page} />
    </Container>
  );
};

export default OnboardingHeader;
