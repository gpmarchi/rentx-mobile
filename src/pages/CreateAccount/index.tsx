import React from 'react';
import {
  StatusBar,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';

import { Container, Title, Subtitle, FormTitle } from './styles';

const CreateAccount: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <Title>Crie sua conta</Title>
            <Subtitle>Faça seu cadastro de forma rápida e fácil.</Subtitle>
            <FormTitle>1. Dados</FormTitle>
            <Button>Próximo</Button>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default CreateAccount;
