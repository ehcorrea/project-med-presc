import { Image } from 'expo-image';
import { View } from 'react-native';

import { Text } from '@/components';

export function EmptyAlerts() {
  return (
    <View className="flex-1 items-center p-[5%]">
      <Image
        contentFit="contain"
        className="h-[200px] w-[200px]"
        source={require('@/assets/images/notification.svg')}
      />
      <Text size="large">
        Parece que você ainda não{`\n`}possui alertas configurados...
      </Text>
    </View>
  );
}
