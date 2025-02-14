import { Tabs } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { TabBar } from '@/components';
import { theme } from '@/constants';

export default function TabLayout() {
  return (
    <View style={styles.view}>
      <Tabs
        screenOptions={{ headerShown: false }}
        tabBar={(props) => <TabBar {...props} />}
      >
        <Tabs.Screen name="home" />
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
