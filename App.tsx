import {
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { useFonts } from "expo-font";
import StackRoutes from "./src/routes/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <StackRoutes />
    </NavigationContainer>
  );
}
