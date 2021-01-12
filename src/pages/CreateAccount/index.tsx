import React, { useCallback, useRef } from 'react';
import {
  View,
  StatusBar,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Title, Subtitle, FormTitle } from './styles';

const CreateAccount: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  const handleAccountCreation = useCallback(
    (data: object) => {
      console.log(data);
      navigation.navigate('CreatePassword', data);
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
              <Input name="name" icon="person-outline" placeholder="Nome" />
              <Input name="email" icon="mail-outline" placeholder="E-mail" />
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
