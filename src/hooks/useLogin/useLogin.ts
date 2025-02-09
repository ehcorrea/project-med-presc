import { useCallback, useState } from 'react';
import { router } from 'expo-router';

import { profileStore } from '@/stores';

export function useLogin() {
  const { selected } = profileStore();
  const [openModal, setOpenModal] = useState(false);

  const login = useCallback(() => {
    if (selected) {
      // redirecionar para home
      return router.replace('..');
    }

    return setOpenModal(true);
  }, [selected]);

  return { login, openModal, handleCloseModal: () => setOpenModal(false) };
}
