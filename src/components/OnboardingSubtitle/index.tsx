import React from 'react';
import { Container, Subtitle } from './styles';

interface OnboardingSubtitle {
  subtitle: string;
}

const OnboardingSubtitle: React.FC<OnboardingSubtitle> = ({
  subtitle: title,
}) => {
  return (
    <Container>
      <Subtitle>{title}</Subtitle>
    </Container>
  );
};

export default OnboardingSubtitle;
