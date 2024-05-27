import React from "react";
import { Text, View } from "react-native";
import SubComponent from "./SubComponent";
import { useThemeContext } from "./contexts/ThemeContext";


export default function Content() {
  const {theme, currentTheme} = useThemeContext();

  return (
    <View>
      <Text style={{color: currentTheme.color}}>Teste de temas</Text>
      <Text style={{color: currentTheme.color}}>Tema Atual: {theme}</Text>

      <SubComponent />
    </View>
  );
}
