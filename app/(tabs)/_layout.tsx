import { Tabs } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { HeaderUser, TabBar } from '@/components';
import { theme } from '@/constants';

export default function TabLayout() {
  return (
    <View style={styles.view}>
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

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: theme.colors.default.bg.main,
  },
});
