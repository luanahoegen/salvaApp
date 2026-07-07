import React from 'react';
import { Tabs } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { tabLayoutOptions } from '../../styles/tabLayoutStyles';

export default function TabLayout() {
  return (
    <Tabs screenOptions={tabLayoutOptions}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'HOME',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="produtos"
        options={{
          title: 'PRODUTOS',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bottle-wine-outline" color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}
