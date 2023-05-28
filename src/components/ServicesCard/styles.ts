import styled from "styled-components/native";

interface PressProps {
  isPressed: boolean;
}

export const CardContainer = styled.TouchableOpacity<PressProps>`
  height: 156px;
  width: 170px;
  border-radius: 4.81px;
  display: flex;
  align-items: center;
  margin-left: 8px;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 4px;
  background-color: ${({ isPressed }) =>
    isPressed ? "#e1b12c" : "transparent"};
  border: 1px solid #60606050;
`;

export const CardImage = styled.Image`
  width: 146px;
  height: 90px;
  margin-top: 6px;
`;

export const CardTitle = styled.Text`
  font-size: 14px;
  text-align: left;
  width: 100%;
  color: #222d5b;
  margin-top: 4px;
  margin-left: 10px;
`;

export const CardSubTitle = styled.Text<PressProps>`
  font-size: 14px;
  text-align: left;
  width: 100%;
  margin-left: 10px;
  color: ${({ isPressed }) => (isPressed ? "#ffffff" : "#e1b12c")};
  elevation: 1;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 4.81px;
`;
