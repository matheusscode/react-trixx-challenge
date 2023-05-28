import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "../components/DrawerContent";
import { useEffect } from "react";

import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Profile from "../pages/Profile";
import Reservation from "../pages/Reservation";
import { StatusBar } from "react-native";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DrawerRoutes"
        component={DrawerRoutes}
        options={{
          headerShown: false,
          statusBarStyle: "light",
          statusBarColor: "#e1b12c",
        }}
      />
    </Stack.Navigator>
  );
}

function DrawerRoutes() {
  return (
    <Drawer.Navigator
      drawerContent={(props: any) => <DrawerContent {...props} />}
      initialRouteName="Home"
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Reservation" component={Reservation} />
    </Drawer.Navigator>
  );
}
