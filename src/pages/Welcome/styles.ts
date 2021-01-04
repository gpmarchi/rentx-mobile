import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #1b1b1f;
`;

export const Logo = styled.Image`
  margin-top: 150px;
`;

export const Title = styled.Text`
  font-family: 'Archivo-SemiBold';
  font-size: 40px;
  color: #f4f5f6;
  margin-top: 130px;
`;

export const Subtitle = styled.Text`
  font-family: 'Inter-Regular';
  font-size: 15px;
  color: #dedee3;
  margin-top: 20px;
`;

export const Actions = styled.View`
  flex-direction: row;
  padding: 0 20px 0 20px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 230px;
`;

export const LoginButton = styled(RectButton)`
  width: 47%;
  height: 60px;
  background: #dc1637;
  justify-content: center;
  align-items: center;
`;

export const LoginButtonText = styled.Text`
  font-family: 'Inter-Medium';
  color: #e1e1e6;
  font-size: 15px;
`;

export const RegisterButton = styled(RectButton)`
  width: 47%;
  height: 60px;
  background: #29292e;
  justify-content: center;
  align-items: center;
`;

export const RegisterButtonText = styled.Text`
  font-family: 'Inter-Medium';
  color: #e1e1e6;
  font-size: 15px;
`;

export const ReturnButton = styled.TouchableOpacity`
  margin-top: 50px;
`;

export const ReturnButtonText = styled.Text`
  color: #7a7a80;
  font-family: 'Archivo-Medium';
  font-size: 13px;
`;
