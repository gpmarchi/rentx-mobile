import React from 'react';
import { TextInputProps } from 'react-native';

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
  return (
    <Container>
      <IconContainer>
        <Icon name={icon} size={28} />
      </IconContainer>

      <TextInputContainer>
        <TextInput
          keyboardAppearance="dark"
          placeholderTextColor="#A0A0B2"
          {...rest}
        />
      </TextInputContainer>
    </Container>
  );
};

export default Input;
