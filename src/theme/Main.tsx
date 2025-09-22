import React from "react";
import { View, Text, Button, Image } from "react-native";
import { useTheme } from "../theme/ThemeContext";
import Modu from "./Modu";

export const Main = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: theme.background, justifyContent: "center", alignItems: "center" }}>
      {/* <Text style={{ color: theme.textPrimary }}>This is Primary Text</Text>
      <Text style={{ color: theme.link }}>This is a Link</Text>
      <Image source={{ uri: "https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg" }} style={{ width: 100, height: 100 }} />
      <Button title="Toggle Theme" onPress={toggleTheme} color={theme.buttonBackground} /> */}
    <Button title="Toggle Theme" onPress={toggleTheme} color={theme.buttonBackground}/>
    <Modu/> 
    </View>
  );
};
