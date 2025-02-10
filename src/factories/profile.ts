import { random } from 'react-native-color-toolkit';
import { randomUUID } from 'expo-crypto';

import { Profile, ProfileType } from '@/types/profile';

export function createProfile(data: Profile, id: string): Profile {
  const isCaregiving = data.type === ProfileType.CAREGIVING;
  return {
    ...data,
    id,
    color: random(),
    dependents: isCaregiving
      ? data.dependents.map((dependent) => ({
          ...dependent,
          color: random(),
          id: randomUUID(),
        }))
      : [],
  };
}
