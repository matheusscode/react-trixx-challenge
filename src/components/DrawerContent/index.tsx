import * as C from "./styles";
import { DrawerContentProps, RootDrawerParamList } from "../../types";
import { FontAwesome } from "@expo/vector-icons";

const renderLinks = [
  {
    id: 1,
    text: "Inicio",
    icon: "home",
    screenName: "Home",
  },
  {
    id: 2,
    text: "Perfil",
    icon: "user",
    screenName: "Profile",
  },
  {
    id: 3,
    text: "Minhas Reservas",
    icon: "check-square",
    screenName: "Reservation",
  },
] as const;

export default function DrawerContent({ navigation }: DrawerContentProps) {
  const navigateToScreen = <T extends keyof RootDrawerParamList>(
    screenName: T
  ) => {
    navigation.navigate(screenName);
  };

  return (
    <C.DrawerContainer>
      <C.DrawerHeader>
        <C.UserAvart
          source={require("../../../assets/images/user-avatar.png")}
        />
        <C.UserName>Matheus</C.UserName>
      </C.DrawerHeader>
      <C.DrawerBody>
        {renderLinks.map((item) => (
          <C.Link
            key={item.id}
            onPress={() => navigateToScreen(item.screenName)}
          >
            <C.LinkGroup>
              <C.Icon name={item.icon} size={30} color="#606060" />
              <C.TextLink>{item.text}</C.TextLink>
            </C.LinkGroup>
            <FontAwesome name="angle-right" size={30} color="#606060" />
          </C.Link>
        ))}
      </C.DrawerBody>

      <C.DrawerFooter>
        <C.LogoutButton onPress={() => navigation.navigate("SignIn")}>
          <C.LogoutIcon
            source={require("../../../assets/images/logout-icon.png")}
          />
          <C.LogoutButtonText>Sair</C.LogoutButtonText>
        </C.LogoutButton>
      </C.DrawerFooter>
    </C.DrawerContainer>
  );
}
