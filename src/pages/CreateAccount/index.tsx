import React from 'react';
import {
  StatusBar,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';
import Input from '../../components/Input';

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
            <Input name="name" icon="person-outline" placeholder="Nome" />
            <Input name="email" icon="mail-outline" placeholder="E-mail" />
            <Button>Próximo</Button>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default CreateAccount;
