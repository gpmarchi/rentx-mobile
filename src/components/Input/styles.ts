import styled from 'styled-components/native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  width: 100%;
  height: 56px;
  margin-bottom: 8px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const IconContainer = styled.View`
  width: 16%;
  height: 56px;
  padding: 0 10px;
  background: #f2f2fa;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(MaterialIcon)`
  color: #7a7a80;
`;

export const TextInputContainer = styled.View`
  width: 83%;
  height: 56px;
  padding: 0 16px;
  background: #f2f2fa;

  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #a0a0b2;
  font-size: 15px;
  font-family: 'Inter-Regular';
`;
