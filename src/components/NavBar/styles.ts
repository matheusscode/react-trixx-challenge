import styled from "styled-components/native";
import * as Animatable from "react-native-animatable"

export const Container = styled(Animatable.View)`
  width: 100%;
  height: 80px;
  background-color: #e1b12c;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const DrawerButton = styled.TouchableOpacity``;

export const DrawerButtonVector = styled.Image``;

export const Logo = styled.Image`
  width: 50px;
  height: 50px;
`;

export const SearchButton = styled.TouchableOpacity``;

export const SearchButtonVector = styled.Image``;
