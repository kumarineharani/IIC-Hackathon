import { Stack, SplashScreen } from "expo-router";
import {useFonts} from "expo-font";

import "./global.css";
import { useEffect } from "react";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Rubik-ExtraBold": require("../assets/fonts/Rubik-ExtraBold.ttf"),
    "Rubik-Bold": require("../assets/fonts/Rubik-Bold.ttf"),
    "Rubik-Medium": require("../assets/fonts/Rubik-Medium.ttf"),
    "Rubik-Light": require("../assets/fonts/Rubik-Light.ttf"),
    "Rubik-Regular": require("../assets/fonts/Rubik-Regular.ttf"),
    "Rubik-SemiBold": require("../assets/fonts/Rubik-SemiBold.ttf"),
    "Playwrite-ExtraLight": require("../assets/fonts/PlaywriteIN-ExtraLight.ttf"),
    "Playwrite-Light": require("../assets/fonts/PlaywriteIN-Light.ttf"),
    "Playwrite-Regular": require("../assets/fonts/PlaywriteIN-Regular.ttf"),
    "Playwrite-Thin": require("../assets/fonts/PlaywriteIN-Thin.ttf"),
  });

  useEffect(() => {
    if (!fontsLoaded) {
      SplashScreen.hideAsync()
    }
    console.log("Fonts loaded");
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return <Stack screenOptions={{headerShown: false}} />;
}
