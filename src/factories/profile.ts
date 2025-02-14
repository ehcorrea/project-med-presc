import { randomUUID } from 'expo-crypto';
import { random } from 'react-native-color-toolkit';

import { Profiles, ProfileType } from '@/types/profile';
import { NewProfileValidator } from '@/utils';

export type CreateProfile = { profiles: Profiles; selectedId: string };

export function createProfile(data: NewProfileValidator): CreateProfile {
  const { dependents, name, type } = data;
  const profiles: Profiles = {};
  const mainId = randomUUID();
  const dependentsId: string[] = [];

  dependents?.forEach(({ name }) => {
    if (!name) return null;
    const dependentId = randomUUID();
    dependentsId.push(dependentId);
    profiles[dependentId] = {
      caregivingId: mainId,
      color: random(),
      dependents: [],
      id: dependentId,
      isDependent: true,
      isCaregiving: false,
      name: name!,
      type: ProfileType.DEPENDENT,
    };
  });

  profiles[mainId] = {
    caregivingId: undefined,
    color: random(),
    dependents: dependentsId,
    id: mainId,
    isDependent: false,
    name,
    isCaregiving: type === ProfileType.CAREGIVING,
    type: type as ProfileType,
  };

  return { profiles, selectedId: mainId };
}
