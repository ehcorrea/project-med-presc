import { TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { profileStore } from '@/stores';
import { theme } from '@/constants';

import { Text } from '../Text/Text';
import { AvatarProfile } from '../AvatarProfile/AvatarProfile';
import { Spancing } from '../Spacing/Spacing';

import * as S from './HeaderUser.styles';

export function HeaderUser() {
  const { selected } = profileStore();

  return (
    <S.Container>
      <View className="flex-row items-center">
        <AvatarProfile name={selected?.name} color={selected?.color} />
        <Spancing x={4} />
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
          size={theme.font.size.xlarge}
          color="black"
        />
      </TouchableOpacity>
    </S.Container>
  );
}
