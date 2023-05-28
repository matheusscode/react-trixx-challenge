import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";

export const InputBox = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2px;
`;

export const Label = styled.Text`
  font-size: 14px;
  color: #666666;
  font-family: Poppins_400Regular;
`;

export const InputContainer = styled.View`
  display: flex;
  align-items: center;
  position: relative;
`;

export const Input = styled.TextInput`
  width: 328px;
  height: 46px;
  padding: 12px 16px 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  border: 1px solid #666666;
  color: #666666;
  border-radius: 8px;
  font-family: Poppins_400Regular;
`;

export const PasswordToggle = styled.TouchableOpacity`
  right: 4px;
  top: 6px;
  padding: 4px 10px;
  position: absolute;
`;

export const ToggleIcon = styled(FontAwesome)`
  font-size: 20px;
  color: #999;
`;

export const ErrorInfo = styled.View`
  margin-top: 2px;
`;

export const ErrorText = styled.Text`
  font-size: 13px;
  color: #e1b12c;
`;
