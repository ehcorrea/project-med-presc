import { useEffect } from 'react';
import notifee from '@notifee/react-native';
import { ExpoRoot } from 'expo-router';
import { mapNotification } from '@/utils';

export default function App() {
  useEffect(() => {
    const notification = notifee.onForegroundEvent(mapNotification);

    return notification;
  }, []);

  return (
    <ExpoRoot
      context={(require as unknown as { context: Function }).context('./app')}
    />
  );
}
