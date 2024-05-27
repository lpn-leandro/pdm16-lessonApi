import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useThemeContext } from "./contexts/ThemeContext";


export default function Header() {
  const { toggleTheme, theme, currentTheme} = useThemeContext();

  const changeTheme = (buttonTheme: string) => {
    toggleTheme(buttonTheme);
    console.log(buttonTheme)
  };

  return (
    <View style={styles.container}>
      <Button title="Tema Claro" onPress={() => changeTheme("light")}/>
      <Button title="Tema Escuro" onPress={() => changeTheme("dark")}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    height: 60,
    backgroundColor: '#AAA',
  } 
});