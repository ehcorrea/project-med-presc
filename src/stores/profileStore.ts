import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Profile, Profiles } from '@/types/profile';

import { create } from './zustand';

type State = {
  profiles: Profiles;
  selected: Profile | null;
};

type Actions = {
  editProfile: (id: string, profile: Profile) => void;
  getProfile: (id: string) => Profile;
  setProfile: (profiles: Profiles, select?: string) => void;
  setSelected: (id?: string) => void;
};

export const initialStateAuth: State = {
  profiles: {},
  selected: null,
};

export const profileStore = create(
  persist<State & Actions>(
    (set, get) => ({
      ...initialStateAuth,
      setProfile(newProfiles, select) {
        const store = get();
        const profiles = {
          ...store.profiles,
          ...newProfiles,
        };
        set({ ...store, profiles });
        get().setSelected(select);
      },
      setSelected(id) {
        if (!id) return null;
        const store = get();
        const profile = store.profiles[id];
        set({ ...store, selected: profile });
      },
      getProfile(id) {
        const store = get();
        const profile = store.profiles[id];
        return profile;
      },
      editProfile(id, profile) {},
    }),
    {
      name: 'profile-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
