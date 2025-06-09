import { Image } from 'expo-image';
import { View } from 'react-native';

export function EmptyList() {
  return (
    <View className="items-center w-full justify-center aspect-square">
      <Image
        contentFit="contain"
        className="h-full w-full"
        source={require('@/assets/images/list.png')}
      />
    </View>
  );
}
