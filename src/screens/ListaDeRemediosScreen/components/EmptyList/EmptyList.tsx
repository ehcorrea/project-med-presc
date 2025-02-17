import { Image } from 'expo-image';
import { useWindowDimensions, View } from 'react-native';

import { Spancing, Text } from '@/components';

export function EmptyList() {
  const { width } = useWindowDimensions();

  return (
    <View className="flex-1 items-center p-[5%]">
      <Image
        contentFit="contain"
        style={{ width: width / 2, height: width / 2 }}
        source={require('@/assets/images/list.svg')}
      />
      <Spancing y={4} />
      <Text size="large" className="text-center">
        Parece que você ainda {`\n`}não tem nada cadastrado...
      </Text>
    </View>
  );
}
