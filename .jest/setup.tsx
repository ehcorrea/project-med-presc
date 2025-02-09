import mockedSafeAreaContext from 'react-native-safe-area-context/jest/mock';
import 'react-native-gesture-handler/jestSetup';
import { mockedRouter, create as mockedCreate } from '../src/test/mocks';

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
