import { Stack } from 'expo-router';
import { View } from 'react-native';

import { THEME } from '@/constants';

export default function TabLayout() {
  return (
    <View style={{ flex: 1, backgroundColor: THEME.colors.background.main }}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="cadastrar/[profileId]" />
        <Stack.Screen name="detalhes/[profileId]/[id]" />
      </Stack>
    </View>
  );
}
