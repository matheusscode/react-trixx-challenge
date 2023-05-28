import * as C from "./styles";
import { useNavigation, DrawerActions } from "@react-navigation/native";


export default function Navbar() {
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <C.Container animation="fadeInLeft">
      <C.DrawerButton onPress={openDrawer}>
        <C.DrawerButtonVector
          source={require("../../../assets/images/bars-icon.png")}
        />
      </C.DrawerButton>
      <C.Logo source={require("../../../assets/images/navigation-logo.png")} />
      <C.SearchButton>
        <C.SearchButtonVector
          source={require("../../../assets/images/filter-icon.png")}
        />
      </C.SearchButton>
    </C.Container>
  );
}
