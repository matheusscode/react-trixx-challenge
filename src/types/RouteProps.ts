import { DrawerNavigationProp } from "@react-navigation/drawer";
import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  DrawerRoutes: undefined;
};

export type RootDrawerParamList = {
  Home: undefined;
  Profile: undefined;
  Reservation: undefined;
  SignIn: undefined;
};

export type SignInScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "SignIn"
>;

export type SignInProps = {
  navigation: SignInScreenNavigationProp;
};

export type SignUpProps = {
  navigation: StackNavigationProp<RootStackParamList, "SignUp">;
};

export type DrawerRoutesProps = {
  navigation: StackNavigationProp<RootStackParamList, "DrawerRoutes">;
};

export type DrawerContentProps = {
  navigation: DrawerNavigationProp<
    RootDrawerParamList,
    keyof RootDrawerParamList
  > & {
    navigate: (screen: keyof RootDrawerParamList) => void;
  };
};
