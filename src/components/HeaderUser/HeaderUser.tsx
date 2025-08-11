import { TouchableOpacity, View } from 'react-native';
import { useTheme } from '@emotion/react';
import Ionicons from '@expo/vector-icons/Ionicons';

import { profileStore } from '@/stores';

import { AvatarProfile } from '../AvatarProfile/AvatarProfile';
import { Spancing } from '../Spacing/Spacing';
import { Text } from '../Text/Text';

export function HeaderUser() {
  const { selected } = profileStore();
  const theme = useTheme();

  return (
    <View className="flex-row items-center justify-between m-[5%] mt-[50px]">
      <View className="flex-row items-center">
        <AvatarProfile name={selected?.name} color={selected?.color} />
        <Spancing x="4" />
        <View>
          <Text palette="gray" size="large">
            {selected?.name}
          </Text>
          <Text palette="primary" size="medium">
            {selected?.type}
          </Text>
        </View>
      </View>
      <TouchableOpacity>
        <Ionicons
          name="notifications-outline"
          size={Number(theme.fonts.size.xlarge)}
          color="black"
        />
      </TouchableOpacity>
    </View>
  );
}
