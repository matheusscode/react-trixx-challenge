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
  margin-top: 10px;
`;

export const Form = styled(Animatable.View)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  margin: 20px;
`;

export const LimitAreaButton = styled(Animatable.View)`
  width: 328px;
  height: 54px;
`;
