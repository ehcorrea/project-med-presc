import { Tabs } from 'expo-router';
import { View } from 'react-native';

import { HeaderUser, TabBar } from '@/components';

export default function TabLayout() {
  return (
    <View className="flex-1 bg-background-main">
      <HeaderUser />
      <Tabs
        screenOptions={{ headerShown: false }}
        tabBar={(props) => <TabBar {...props} />}
      >
        <Tabs.Screen name="home" />
        <Tabs.Screen name="remedios" />
      </Tabs>
    </View>
  );
}
