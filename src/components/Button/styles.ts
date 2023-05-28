import styled, { css } from "styled-components/native";

interface StyledProps {
  reverse: boolean;
}

export const Touchable = styled.TouchableOpacity<StyledProps>`
  width: 100%;
  height: 54px;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  align-items: center;
  letter-spacing: 1px;
  border: 1px solid #606060;

  ${(props) =>
    props.reverse &&
    css`
      background-color: #e1b12c;
      border-color: #e1b12c;
    `}
`;

export const TouchableText = styled.Text<StyledProps>`
  text-align: center;
  font-size: 16px;
  width: 100%;
  font-weight: 400;
  color: #666666;
  font-family: Poppins_400Regular;

  ${(props) =>
    props.reverse &&
    css`
      color: #ffffff;
    `}
`;
