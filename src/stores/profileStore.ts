import { createJSONStorage, persist } from 'zustand/middleware';
import { randomUUID } from 'expo-crypto';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Profile, Profiles } from '@/types/profile';
import { createProfile } from '@/factories';

import { create } from './zustand';

type State = {
  profiles: Profiles;
  selected: Profile | null;
};

type Actions = {
  editProfile: (id: string, profile: Profile) => void;
  setProfile: (profile: Profile) => void;
  setSelected: (id: string) => void;
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
      setSelected(id) {
        const store = get();
        const profile = store.profiles[id];
        set({ ...store, selected: profile });
      },
    }),
    {
      name: 'profile-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
