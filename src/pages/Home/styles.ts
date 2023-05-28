import styled from "styled-components/native";
import * as Animatable from "react-native-animatable"

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Title = styled.Text`
  color: #222d5b;
  font-size: 15px;
  font-family: Poppins_700Bold;
`;

export const LimitAreaButton = styled.View`
  width: 62px;
  height: 54px;
`;

export const SectionContainer = styled(Animatable.View)`
  width: 100%;
`;

export const SectionHeader = styled.View`
  padding: 16px;
`;

export const Map = styled.Image`
  width: 100%;
`;

export const Carousel = styled.ScrollView`
  padding: 1px;
`;

export const Footer = styled.View`
  height: 30px;
  width: 100%;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  margin-top: 28px;
  background-color: #e1b12c;
`;

export const MapButton = styled.TouchableOpacity`
  border-radius: 10px;
  width: 150px;
  height: 40px;
  background-color: #e1b12c;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
`;

export const MapButtonText = styled.Text`
  color: #ffffff;
  text-align: center;
`;
