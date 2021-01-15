import React, { useCallback, useRef, useState } from 'react';
import {
  StatusBar,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import Button from '../../components/Button';
import Input from '../../components/Input';

import {
  Container,
  Title,
  Subtitle,
  Actions,
  RememberMe,
  RememberMeText,
  ForgotPassword,
  ForgotPasswordText,
} from './styles';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const navigation = useNavigation();

  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const handleSignIn = useCallback(
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
            <Title>Estamos quase lá.</Title>
            <Subtitle>
              Faça seu login para começar uma experiência incrível.
            </Subtitle>
            <Form ref={formRef} onSubmit={handleSignIn}>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                name="email"
                icon="mail-outline"
                placeholder="E-mail"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus();
                }}
              />
              <Input
                ref={passwordInputRef}
                name="password"
                icon="lock-outline"
                placeholder="Senha"
                secureTextEntry
                returnKeyType="send"
                onSubmitEditing={() => formRef.current?.submitForm()}
              />
              <Actions>
                <RememberMe
                  boxType="square"
                  onAnimationType="fill"
                  onFillColor="#1B1B1F"
                  onTintColor="#1B1B1F"
                  onCheckColor="#FFFFFF"
                  disabled={false}
                  value={toggleCheckBox}
                  onValueChange={newValue => setToggleCheckBox(newValue)}
                />
                <RememberMeText>Lembrar-me</RememberMeText>
                <ForgotPassword>
                  <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
                </ForgotPassword>
              </Actions>
              <Button
                onPress={() => {
                  formRef.current?.submitForm();
                }}
              >
                Login
              </Button>
            </Form>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignIn;
