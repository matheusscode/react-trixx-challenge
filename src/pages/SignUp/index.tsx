import Input from "../../components/Input";
import { useState } from "react";
import * as C from "./styles";
import { SignUpProps, SignUpValues } from "../../types";
import Button from "../../components/Button";
import { FontAwesome } from "@expo/vector-icons";

export default function SignUp({ navigation }: SignUpProps) {
  const [values, setValues] = useState<SignUpValues>({
    name: "",
    email: "",
    phone: "",
    createPassword: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<SignUpValues>({
    name: "",
    email: "",
    phone: "",
    createPassword: "",
    confirmPassword: "",
  });

  const handleChange = (name: keyof SignUpValues, inputValue: string) => {
    let formattedValue = inputValue;
    if (name === "phone") {
      formattedValue = formattedValue.replace(/\D/g, "");

      formattedValue = formattedValue.replace(
        /^(\d{2})(\d{5})(\d{4}).*/,
        "$1 $2-$3"
      );
    }

    setValues((prevValues) => ({
      ...prevValues,
      [name]: formattedValue,
    }));
  };

  const validateForm = () => {
    let hasErrors = false;
    const newErrors: SignUpValues = {
      name: "",
      email: "",
      phone: "",
      createPassword: "",
      confirmPassword: "",
    };

    if (values.name.trim() === "") {
      newErrors.name = "Nome é obrigatório";
      hasErrors = true;
    }

    if (!values.email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
      newErrors.email = "Formato de e-mail inválido";
      hasErrors = true;
    }

    if (!values.phone.match(/^\d{2} \d{5}-\d{4}$/)) {
      newErrors.phone = "Número de telefone inválido";
      hasErrors = true;
    }

    if (values.createPassword.length < 8) {
      newErrors.createPassword = "A senha deve ter pelo menos 8 caracteres";
      hasErrors = true;
    }

    if (values.confirmPassword !== values.createPassword) {
      newErrors.confirmPassword = "As senhas não coincidem";
      hasErrors = true;
    }

    setErrors(newErrors);
    return !hasErrors;
  };

  const handleSubmit = () => {
    const isFormValid = validateForm();
    if (isFormValid) {
      console.log("Form submitted:", values);
      navigation.navigate("SignIn");
    }
  };

  return (
    <C.Container>
      <C.Header animation="fadeInLeft">
        <C.Logo
          source={require("../../../assets/images/acess-logo.png")}
          resizeMode="contain"
        />
      </C.Header>
      <C.Form animation="fadeInLeft">
        <Input
          label="Nome"
          placeholder="Exemplo: João da Silva"
          handleChange={(value) => handleChange("name", value)}
          state={values.name}
          error={errors.name}
        />
        <Input
          label="E-mail"
          placeholder="Exemplo: exemplo@email.com"
          handleChange={(value) => handleChange("email", value)}
          state={values.email}
          error={errors.email}
        />
        <Input
          label="Telefone"
          placeholder="Exemplo: 92 99999-9999"
          handleChange={(value) => handleChange("phone", value)}
          state={values.phone}
          error={errors.phone}
        />
        <Input
          label="Criar senha"
          placeholder="Digite uma senha"
          handleChange={(value) => handleChange("createPassword", value)}
          state={values.createPassword}
          error={errors.createPassword}
          isPassword={true}
        />
        <Input
          label="Confirmar senha"
          placeholder="Confirme sua senha"
          handleChange={(value) => handleChange("confirmPassword", value)}
          state={values.confirmPassword}
          error={errors.confirmPassword}
          isPassword={true}
        />
        <C.LimitAreaButton animation="fadeInLeft">
          <Button
            event={handleSubmit}
            reverse={true}
            text="Criar Conta"
            margin={20}
          />
        </C.LimitAreaButton>
      </C.Form>
    </C.Container>
  );
}
