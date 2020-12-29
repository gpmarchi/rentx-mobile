import React from 'react';
import { Container, Title } from './styles';

interface OnboardingTitle {
  title: string;
}

const OnboardingHeader: React.FC<OnboardingTitle> = ({ title }) => {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
};

export default OnboardingHeader;
