import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import rentx from '../../assets/rentx.png';
import check from '../../assets/check.png';

import {
  Container,
  Logo,
  Check,
  Title,
  Subtitle,
  ConfirmButton,
  ConfirmButtonText,
} from './styles';

const ConfirmRegistration: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <StatusBar barStyle="light-content" />
      <Container>
        <Logo source={rentx} />
        <Check source={check} />

        <Title>Conta criada!</Title>
        <Subtitle>Agora é só fazer login e aproveitar.</Subtitle>
        <ConfirmButton
          onPress={() => {
            navigation.navigate('Onboarding');
          }}
        >
          <ConfirmButtonText>Ok</ConfirmButtonText>
        </ConfirmButton>
      </Container>
    </>
  );
};

export default ConfirmRegistration;
