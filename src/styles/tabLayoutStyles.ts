import { StyleSheet } from 'react-native';

export const tabLayoutOptions = {
  tabBarActiveTintColor: '#000000',
  tabBarInactiveTintColor: '#333333',
  tabBarShowLabel: true,
  tabBarStyle: {
    backgroundColor: '#FFFFFF',
    height: 75,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    paddingBottom: 15,
    paddingTop: 5,
  },
  tabBarLabelStyle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: -5,
  },
  headerShown: false,
};

export const styles = StyleSheet.create({
  // Caso precise de estilos adicionais para containers ou views dentro do layout
});
