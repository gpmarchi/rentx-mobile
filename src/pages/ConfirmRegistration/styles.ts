import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #1b1b1f;
`;

export const Logo = styled.Image`
  margin-top: 120px;
`;

export const Check = styled.Image`
  margin-top: 100px;
`;

export const Title = styled.Text`
  font-family: 'Archivo-SemiBold';
  font-size: 30px;
  color: #e1e1e6;
  margin-top: 40px;
`;

export const Subtitle = styled.Text`
  font-family: 'Inter-Regular';
  font-size: 15px;
  color: #a8a8b3;
  width: 40%;
  line-height: 25px;
  margin-top: 20px;
  text-align: center;
`;

export const ConfirmButton = styled(RectButton)`
  width: 80px;
  height: 56px;
  background: #29292e;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`;

export const ConfirmButtonText = styled.Text`
  font-family: 'Inter-Medium';
  font-size: 15px;
  color: #e1e1e6;
`;
