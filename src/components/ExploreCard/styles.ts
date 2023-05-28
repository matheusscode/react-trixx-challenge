import styled from "styled-components/native";

export const CardContainer = styled.TouchableOpacity`
  height: 101px;
  width: 108px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 0 16px;
`;

export const IconContainer = styled.View`
  background-color: #e1b12c;
  width: 108px;
  height: 70px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.Image``;

export const CardTitle = styled.Text`
  color: #222d5b;
  font-size: 14px;
`;
