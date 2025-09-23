import React from "react";
import { View, Text, Button, Image } from "react-native";
import { useTheme } from "../theme/ThemeContext";

export const ThemeDemo = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: theme.background, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: theme.textPrimary }}>This is Main Text</Text>
      <Text style={{ color: theme.link }}>Link is Here</Text>
      <Image source={{ uri: "https://via.placeholder.com/150" }} style={{ width: 100, height: 100 }} />
      <Button title="Toggle Theme" onPress={toggleTheme} color={theme.buttonBackground} />
    </View>
  );
};
