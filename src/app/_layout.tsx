import { Stack } from 'expo-router';
import Header from '../components/Header';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        header: () => <Header />,
        headerShown: true,
      }}
    >
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="register" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerTitle: '' }} />
    </Stack>
  );
}
