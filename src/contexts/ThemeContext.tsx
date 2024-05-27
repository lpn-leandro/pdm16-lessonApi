import { createContext, PropsWithChildren, useContext, useState } from "react";
import {light, dark} from "../../styles/globalStyles";
//------------------------------------------- Step 1: Define the Context | O que eu quero passar de pai para filho

interface ThemeContextProps {
  theme: string;
  setTheme: (theme:string) => void;
  toggleTheme: (theme: string) => void;
  currentTheme: typeof light;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);

//------------------------------------------- Step 2: Define the Provider

export default function ThemeContextProvider({
  children,
}: PropsWithChildren) {
  const [theme, setTheme] = useState("light");

  const currentTheme = theme === "dark" ? dark : light;

  const toggleTheme = (theme: string) => {
    if (theme === "dark") {
      setTheme("dark");
    }else{
      setTheme("light");
    }
  }

  

  const value: ThemeContextProps = {
    theme,
    setTheme,
    toggleTheme,
    currentTheme
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

//------------------------------------------- Step 3: Define the Hook

export function useThemeContext() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useThemeContext must be used inside ThemeContextProvider!"
    );
  }

  return context;
}