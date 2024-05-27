import { StyleSheet, View } from 'react-native';
import ThemeContextProvider, { useThemeContext } from './src/contexts/ThemeContext';
import Header from './src/Header';
import Content from './src/Content';

function AppContent() {
  const { theme, currentTheme } = useThemeContext();

  return (
    <View style={[styles.container,{ backgroundColor: currentTheme.backgroundColor}]}>
      <Header />
      <Content />
    </View>
  );
}

export default function App() {
  return (
    <ThemeContextProvider>
      <AppContent />
    </ThemeContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
