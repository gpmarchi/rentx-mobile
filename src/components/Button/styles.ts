import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 60px;
  background: #dc1637;
  margin-top: 30px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: 'Inter-Medium';
  color: #ffffff;
  font-size: 15px;
`;
