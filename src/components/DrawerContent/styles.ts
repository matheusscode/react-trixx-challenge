import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";

export const DrawerContainer = styled.View`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const DrawerHeader = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 14px;
  width: 100%;
  background-color: #e1b12c;
  padding: 16px;
`;

export const UserAvart = styled.Image`
  height: 50px;
  width: 50px;
`;

export const UserName = styled.Text`
  font-size: 18px;
  color: #ffffff;
`;

export const DrawerBody = styled.View`
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 40px;
  align-items: center;
  height: 73%;
`;

export const Link = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 4px 0;
  border-bottom-width: 1px;
  border-bottom-color: #606060;
`;

export const Icon = styled(FontAwesome)`
  width: 28px;
`;

export const LogoutIcon = styled.Image``;

export const LinkGroup = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  width: 100%;
`;

export const TextLink = styled.Text`
  font-size: 16px;
`;

export const DrawerFooter = styled.View`
  align-self: flex-start;
  padding: 0 30px;
`;

export const LogoutButton = styled.TouchableOpacity``;

export const LogoutButtonText = styled.Text`
  color: #e1b12c;
`;
