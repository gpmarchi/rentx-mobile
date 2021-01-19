import React, { useCallback, useRef } from 'react';
import {
  View,
  StatusBar,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Title, Subtitle, FormTitle } from './styles';

interface CreateAccountFormData {
  name: string;
  email: string;
}

const CreateAccount: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const emailInputRef = useRef<TextInput>(null);

  const navigation = useNavigation();

  const handleAccountCreation = useCallback(
    async (data: CreateAccountFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        navigation.navigate('CreatePassword', data);
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);

          formRef.current?.setErrors(errors);
        }
      }
    },
    [navigation],
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
              <FormTitle>01. Dados</FormTitle>
            </View>
            <Form ref={formRef} onSubmit={handleAccountCreation}>
              <Input
                name="name"
                icon="person-outline"
                placeholder="Nome"
                returnKeyType="next"
                onSubmitEditing={() => {
                  emailInputRef.current?.focus();
                }}
              />
              <Input
                ref={emailInputRef}
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                name="email"
                icon="mail-outline"
                placeholder="E-mail"
                returnKeyType="send"
                onSubmitEditing={() => formRef.current?.submitForm()}
              />
              <Button
                onPress={() => {
                  formRef.current?.submitForm();
                }}
              >
                Próximo
              </Button>
            </Form>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default CreateAccount;
