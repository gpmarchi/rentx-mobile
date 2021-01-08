import React, { useRef, useEffect } from 'react';
import { TextInputProps } from 'react-native';
import { useField } from '@unform/core';

import {
  Container,
  IconContainer,
  Icon,
  TextInputContainer,
  TextInput,
} from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

interface InputValueReference {
  value: string;
}
const Input: React.FC<InputProps> = ({ name, icon, ...rest }) => {
  const inputElementRef = useRef<any>(null);

  const { registerField, defaultValue = '', fieldName, error } = useField(name);
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(ref: any, value) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({ text: value });
      },
      clearValue() {
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <IconContainer>
        <Icon name={icon} size={28} />
      </IconContainer>

      <TextInputContainer>
        <TextInput
          keyboardAppearance="light"
          placeholderTextColor="#A0A0B2"
          defaultValue={defaultValue}
          onChangeText={value => {
            inputValueRef.current.value = value;
          }}
          {...rest}
        />
      </TextInputContainer>
    </Container>
  );
};

export default Input;
