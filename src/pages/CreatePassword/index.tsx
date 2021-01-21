import React, { useCallback, useRef } from 'react';
import {
  View,
  StatusBar,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TextInput,
  Alert,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import api from '../../services/api';

import getValidationErrors from '../../utils/getValidationErrors';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Title, Subtitle, FormTitle } from './styles';

interface RouteParams {
  name: string;
  email: string;
}

interface CreatePasswordFormData {
  password: string;
  confirmation: string;
}

const CreatePassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const confirmInputRef = useRef<TextInput>(null);

  const navigation = useNavigation();

  const { params } = useRoute();

  const routeParams = params as RouteParams;

  const handleUserSignUp = useCallback(
    async (data: CreatePasswordFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          password: Yup.string().required('Senha obrigatória'),
          password_confirmation: Yup.string()
            .oneOf(
              [Yup.ref('password'), null],
              'Confirmação deve ser igual a senha',
            )
            .required('Confirmação de senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/users', { ...routeParams, ...data });

        navigation.navigate('ConfirmRegistration');
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);

          formRef.current?.setErrors(errors);

          return;
        }

        Alert.alert(
          'Erro na criação da conta',
          'Ocorreu um erro ao criar a conta, tente novamente.',
        );
      }
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
            <View>
              <FormTitle>02. Senha</FormTitle>
            </View>
            <Form ref={formRef} onSubmit={handleUserSignUp}>
              <Input
                name="password"
                icon="lock-outline"
                placeholder="Senha"
                secureTextEntry
                returnKeyType="next"
                onSubmitEditing={() => {
                  confirmInputRef.current?.focus();
                }}
              />
              <Input
                ref={confirmInputRef}
                name="password_confirmation"
                icon="lock-outline"
                placeholder="Repetir senha"
                secureTextEntry
                returnKeyType="send"
                onSubmitEditing={() => formRef.current?.submitForm()}
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
