import styled from 'styled-components/native';
import CheckBox from '@react-native-community/checkbox';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 25px 25px 25px;
`;

export const Title = styled.Text`
  font-family: 'Archivo-SemiBold';
  font-size: 40px;
  color: #3d3d4d;
  width: 60%;
`;

export const Subtitle = styled.Text`
  font-family: 'Inter-Regular';
  font-size: 15px;
  color: #7a7a80;
  width: 60%;
  line-height: 25px;
  margin-top: 30px;
  margin-bottom: 120px;
`;

export const Actions = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  width: 100%;
`;

export const RememberMe = styled(CheckBox)``;

export const RememberMeText = styled.Text`
  font-family: 'Inter-Regular';
  font-size: 13px;
  color: #737380;
  margin-left: 15px;
`;

export const ForgotPassword = styled.TouchableOpacity`
  flex: 1;
  align-items: flex-end;
`;

export const ForgotPasswordText = styled.Text`
  color: #737380;
  font-family: 'Inter-Regular';
  font-size: 13px;
`;
