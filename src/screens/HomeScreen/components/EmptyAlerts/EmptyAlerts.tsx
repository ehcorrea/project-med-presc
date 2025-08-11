import { Image } from 'expo-image';
import { View } from 'react-native';

export function EmptyAlerts() {
  return (
    <View className="items-center h-5/6 justify-center aspect-square">
      <Image
        contentFit="contain"
        className="h-full w-full"
        source={require('@/assets/images/notification.png')}
      />
    </View>
  );
}
