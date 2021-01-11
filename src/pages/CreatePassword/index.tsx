import React, { useCallback, useRef } from 'react';
import {
  StatusBar,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Title, Subtitle, FormTitle } from './styles';

interface RouteParams {
  name: string;
  email: string;
}

const CreatePassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();
  const { params } = useRoute();

  const routeParams = params as RouteParams;

  const handleUserSignUp = useCallback(
    (data: object) => {
      console.log(routeParams);
      console.log(data);
      navigation.navigate('ConfirmRegistration');
    },
    [navigation, routeParams],
  );

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
            <FormTitle>02. Senha</FormTitle>
            <Form ref={formRef} onSubmit={handleUserSignUp}>
              <Input
                name="password"
                icon="lock-outline"
                placeholder="Senha"
                secureTextEntry
              />
              <Input
                name="confirmation"
                icon="lock-outline"
                placeholder="Repetir senha"
                secureTextEntry
              />
              <Button
                onPress={() => {
                  formRef.current?.submitForm();
                }}
              >
                Cadastrar
              </Button>
            </Form>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default CreatePassword;
