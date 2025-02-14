import { Stack } from 'expo-router';

import { View } from 'react-native';
import { theme } from '@/constants';

export default function TabLayout() {
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.default.bg.main }}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="cadastrar/[id]" />
      </Stack>
    </View>
  );
}
