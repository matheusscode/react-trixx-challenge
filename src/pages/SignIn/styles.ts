import styled from "styled-components/native";
import * as Animatable from "react-native-animatable";


export const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const Header = styled(Animatable.View)``;

export const Logo = styled.Image`
  width: 112.75px;
  height: 112.75px;
  margin-top: 40px;
`;

export const Content = styled(Animatable.View)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
`;

export const Form = styled.View`
  gap: 10px;
`;

export const TextLink = styled.Text`
  width: 100%;
  font-family: Poppins_400Regular;
`;

export const Link = styled.Text`
  color: #e1b12c;
  font-family: Poppins_400Regular;
`;

export const LimitAreaButton = styled.View`
  width: 328px;
`;
