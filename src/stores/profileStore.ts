import { createJSONStorage, persist } from 'zustand/middleware';
import * as SecureStore from 'expo-secure-store';
import { randomUUID } from 'expo-crypto';

import { Profile, Profiles } from '@/types/profile';
import { createProfile } from '@/factories';

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
  profiles: {},
  selected: null,
};

export const profileStore = create(
  persist<State & Actions>(
    (set, get) => ({
      ...initialStateAuth,
      setProfile(profile) {
        const store = get();
        const id = randomUUID();
        const profiles = {
          ...store.profiles,
          [id]: createProfile(profile, id),
        };
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
