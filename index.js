import { registerRootComponent } from 'expo';
import notifee from '@notifee/react-native';

import { mapNotification } from './src/utils';

import Root from './App';

notifee.onBackgroundEvent(mapNotification);

registerRootComponent(Root);
