import { useState } from "react";
import Input from "../../components/Input";
import * as C from "./styles";
import { SignInProps, SignInValues } from "../../types";
import Button from "../../components/Button";

export default function SignIn({ navigation }: SignInProps) {
  const [value, setValue] = useState<SignInValues>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<SignInValues>({
    email: "",
    password: "",
  });

  const handleChange = (name: keyof SignInValues, value: string) => {
    setValue((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    let hasErrors = false;

    if (value.email.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "O campo de email é obrigatório",
      }));
      hasErrors = true;
    } else if (!validateEmail(value.email.trim())) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email:
          "O formato do email é inválido. Por favor, use o formato exemplo@gmail.com",
      }));
      hasErrors = true;
    }

    if (value.password.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "O campo de senha é obrigatório",
      }));
      hasErrors = true;
    }

    return !hasErrors;
  };

  const handleSubmit = () => {
    const isFormValid = validateForm();
    if (isFormValid) {
      console.log("Form submitted:", value);
      navigation.navigate("DrawerRoutes");
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
      <C.Content animation="fadeInLeft">
        <C.Form>
          <Input
            label="Email"
            placeholder="Insira seu email"
            state={value.email}
            handleChange={(value) => handleChange("email", value)}
            error={errors.email}
          />
          <Input
            label="Senha"
            placeholder="Insira sua senha"
            state={value.password}
            handleChange={(value) => handleChange("password", value)}
            isPassword={true}
            error={errors.password}
          />
          <C.TextLink>
            Esqueceu a sua senha?
            <C.Link> Clique Aqui</C.Link>
          </C.TextLink>

          <C.LimitAreaButton>
            <Button
              reverse={true}
              text="Entrar"
              margin={70}
              event={handleSubmit}
            />
          </C.LimitAreaButton>

          <C.LimitAreaButton>
            <Button
              reverse={false}
              text="Criar Conta"
              margin={0}
              event={() => navigation.navigate("SignUp")}
            />
          </C.LimitAreaButton>
        </C.Form>
      </C.Content>
    </C.Container>
  );
}
