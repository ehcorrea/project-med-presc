import { useEffect } from 'react';
import { SplashScreen, Stack } from 'expo-router';
import { useFonts } from 'expo-font';

import { Provider } from '@/components';

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'SofiaPro-Light': require('@/assets/fonts/SofiaPro-Light.ttf'),
    'SofiaPro-Regular': require('@/assets/fonts/SofiaPro-Regular.ttf'),
    'SofiaPro-Medium': require('@/assets/fonts/SofiaPro-Medium.ttf'),
    'SofiaPro-SemiBold': require('@/assets/fonts/SofiaPro-SemiBold.ttf'),
    'SofiaPro-Bold': require('@/assets/fonts/SofiaPro-Bold.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Provider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="criar-perfil" />
      </Stack>
    </Provider>
  );
}
