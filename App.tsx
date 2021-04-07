import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import RestaurantScreen from "./src/features/restaurants/screens/restaurants-info.screen";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme/";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsScreen from "./src/features/restaurants/screens/settings.screen";
import RestaurantsLocationsScreen from "./src/features/restaurants/screens/restaurants-locations.screen";
import { SafeArea } from "./src/componentes/utils/safe-area.component";

const Tab = createBottomTabNavigator();

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Restaurant" component={RestaurantScreen} />
            <Tab.Screen
              name="RestaurantsLocations"
              component={RestaurantsLocationsScreen}
            />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
