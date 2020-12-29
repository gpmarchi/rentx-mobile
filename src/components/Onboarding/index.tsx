import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native';

import OnboardingHeader from '../OnboardingHeader';
import OnboardingTitle from '../OnboardingTitle';
import OnboardingSubtitle from '../OnboardingSubtitle';

import scheduleImg from '../../assets/schedule.png';
import pageNumber01 from '../../assets/01.png';
import carImg from '../../assets/car.png';
import pageNumber02 from '../../assets/02.png';

const AppOnboarding: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Onboarding
      onDone={() => navigation.navigate('Welcome')}
      pages={[
        {
          backgroundColor: '#fff',
          image: <OnboardingHeader icon={scheduleImg} page={pageNumber01} />,
          title: <OnboardingTitle title="Primeiro, escolha a data" />,
          subtitle: (
            <OnboardingSubtitle subtitle="Você é quem define um período, e nós mostraremos os carros disponíveis." />
          ),
        },
        {
          backgroundColor: '#fff',
          image: <OnboardingHeader icon={carImg} page={pageNumber02} />,
          title: <OnboardingTitle title="Depois, escolha o carro" />,
          subtitle: (
            <OnboardingSubtitle subtitle="Vários modelos para você dirigir seguro, com conforto e segurança." />
          ),
        },
      ]}
    />
  );
};

export default AppOnboarding;
