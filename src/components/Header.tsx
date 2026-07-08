import React from 'react';
import { View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/headerStyles';

export default function Header() {
  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <MaterialCommunityIcons name="beer-outline" size={28} color="#000" />
          <Text style={styles.title}>Salva Craft Beer</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
