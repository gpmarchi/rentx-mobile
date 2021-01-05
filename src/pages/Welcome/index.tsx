import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Logo,
  Title,
  Subtitle,
  Actions,
  LoginButton,
  LoginButtonText,
  RegisterButton,
  RegisterButtonText,
  ReturnButton,
  ReturnButtonText,
} from './styles';

import logo from '../../assets/logo.png';

const Welcome: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <StatusBar barStyle="light-content" />
      <Container>
        <Logo source={logo} />
        <Title>Seja Bem-vindo</Title>
        <Subtitle>O que você deseja fazer?</Subtitle>
        <Actions>
          <LoginButton>
            <LoginButtonText>Login</LoginButtonText>
          </LoginButton>
          <RegisterButton onPress={() => navigation.navigate('CreateAccount')}>
            <RegisterButtonText>Cadastro</RegisterButtonText>
          </RegisterButton>
        </Actions>
        <ReturnButton onPress={() => navigation.navigate('Onboarding')}>
          <ReturnButtonText>Voltar</ReturnButtonText>
        </ReturnButton>
      </Container>
    </>
  );
};

export default Welcome;
