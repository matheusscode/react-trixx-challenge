import { InputProps } from "../../types";
import * as C from "./styles";
import { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

export default function Input({
  label,
  placeholder,
  state,
  handleChange,
  error,
  isPassword,
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <C.InputBox>
      <C.Label>{label}</C.Label>
      <C.InputContainer>
        <C.Input
          placeholder={placeholder}
          onChangeText={handleChange}
          value={state}
          secureTextEntry={!showPassword && isPassword}
        />
        {isPassword && (
          <C.PasswordToggle onPress={togglePasswordVisibility}>
            <FontAwesome
              name={showPassword ? "eye" : "eye-slash"}
              size={24}
              color="#999"
            />
          </C.PasswordToggle>
        )}
      </C.InputContainer>

      {error && (
        <C.ErrorInfo>
          <C.ErrorText>{error}</C.ErrorText>
        </C.ErrorInfo>
      )}
    </C.InputBox>
  );
}
