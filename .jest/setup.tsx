export * from '@react-native-async-storage/async-storage/jest/async-storage-mock';

import mockedSafeAreaContext from 'react-native-safe-area-context/jest/mock';
import 'react-native-gesture-handler/jestSetup';
import { mockedRouter, create as mockedCreate } from '../src/test/mocks';

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);
jest.useFakeTimers();
require('react-native-reanimated').setUpTests();
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
jest.mock('react-native-safe-area-context', () => mockedSafeAreaContext);
jest.mock('expo-image', () => {
  const actualExpoImage = jest.requireActual('expo-image');
  const { Image } = jest.requireActual('react-native');
  return { ...actualExpoImage, Image };
});
jest.mock('expo-router', () => {
  const actualExpoRouter = jest.requireActual('expo-router');
  return {
    ...actualExpoRouter,
    router: mockedRouter,
  };
});
jest.mock('@/stores/zustand', () => ({
  create: mockedCreate,
}));

jest.mock('@notifee/react-native', () => {
  /**
   * Devido a vários problemas ao importar o mock oferecido pela notifee, resolvi
   * criar manualmente o mock apenas das funcionalidades que utilizamos no app.
   * https://github.com/invertase/notifee/issues/739
   */

  const notifee = {
    getInitialNotification: jest.fn().mockResolvedValue(null),
    displayNotification: jest.fn().mockResolvedValue(null),
    onForegroundEvent: jest.fn().mockReturnValue(jest.fn()),
    onBackgroundEvent: jest.fn(),
    createChannelGroup: jest.fn().mockResolvedValue('channel-group-id'),
    createChannel: jest.fn().mockResolvedValue(null),
  };

  return {
    ...jest.requireActual('@notifee/react-native/dist/types/Notification'),
    __esModule: true,
    default: notifee,
  };
});
