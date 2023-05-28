export type InputProps = {
  label: string;
  placeholder: string;
  state: string;
  handleChange: (value: string) => void;
  error?: string;
  isPassword?: boolean;
};

export type SignInValues = {
  email: string;
  password: string;
};

export type SignUpValues = {
  name: string;
  email: string;
  phone: string;
  createPassword: string;
  confirmPassword: string;
};

export type InputValues<T> = {
  [K in keyof T]?: string;
};
