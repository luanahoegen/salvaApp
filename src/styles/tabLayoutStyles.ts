import { StyleSheet } from 'react-native';

export const tabLayoutOptions = {
  tabBarActiveTintColor: '#000000',   // Ícone e texto pretos quando selecionado
  tabBarInactiveTintColor: '#333333', // Cinza bem escuro quando não selecionado (quase preto)
  tabBarShowLabel: true,              // Força a exibição do texto
  tabBarStyle: {
    backgroundColor: '#FFFFFF',
    height: 75,                       // Altura um pouco maior para caber tudo
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    paddingBottom: 15,                // Espaço para o texto não ficar colado embaixo
    paddingTop: 5,
  },
  tabBarLabelStyle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: -5,                    // Traz o texto um pouco mais para cima, perto do ícone
  },
  headerShown: false,
};

export const styles = StyleSheet.create({
  // Caso precise de estilos adicionais para containers ou views dentro do layout
});
