import { Stack } from 'expo-router';
import { SQLiteProvider } from 'expo-sqlite';
import { initializeDatabase } from '../database/initializeDatabase';

export default function RootLayout() {
  return (
    <SQLiteProvider databaseName="salva.db" onInit={initializeDatabase}>
      <Stack initialRouteName="login">
          <Stack.Screen
              name="login"
              options={{ headerShown: false }}
          />

          <Stack.Screen
              name="(tabs)"
              options={{ headerShown: false }}
          />
      </Stack>
    </SQLiteProvider>
  );
}