import React from "react";
import { Text, View } from "react-native";
import { useThemeContext } from "./contexts/ThemeContext";

export default function SubComponent() {
  const { theme, currentTheme } = useThemeContext();

  return (
    <View>
      <Text style={{color: currentTheme.color}}>SubComponent (Tema Atual: {theme})</Text>
    </View>
  );
}
