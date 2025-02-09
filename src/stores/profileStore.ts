import { createJSONStorage, persist } from 'zustand/middleware';
import * as SecureStore from 'expo-secure-store';
import { randomUUID } from 'expo-crypto';

import { Profile, Profiles, ProfileType } from '@/types/profile';

import { create } from './zustand';

type State = {
  profiles: Profiles;
  selected: Profile | null;
};

type Actions = {
  setProfile: (profile: Profile) => void;
  editProfile: (id: string, profile: Profile) => void;
};

export const initialStateAuth: State = {
  profiles: {
    '01': {
      dependents: [],
      id: '01',
      type: ProfileType.PERSONAL,
      name: 'Emilio H. Corrêa',
      color: 'red',
    },
    '02': {
      dependents: [],
      id: '02',
      type: ProfileType.PERSONAL,
      name: 'Zezo H. Corrêa',
      color: 'green',
    },
  },
  selected: null,
};

export const profileStore = create(
  persist<State & Actions>(
    (set, get) => ({
      ...initialStateAuth,
      setProfile(profile) {
        const store = get();
        const profiles = { ...store.profiles, [randomUUID()]: profile };
        set({ ...store, profiles });
      },
      editProfile(id, profile) {},
    }),
    {
      name: 'profile-storage',
      storage: createJSONStorage(() => ({
        ...SecureStore,
        removeItem: SecureStore.deleteItemAsync,
      })),
    }
  )
);
