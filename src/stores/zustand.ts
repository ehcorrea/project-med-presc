import { create as _create } from 'zustand';
import type { StateCreator } from 'zustand';

const storeResetFns = new Set<() => void>();

const resetAllStores = () => {
  storeResetFns.forEach((resetFn) => {
    resetFn();
  });
};

const create = (<T>() => {
  return (stateCreator: StateCreator<T>) => {
    const store = _create(stateCreator);
    const initialState = store.getState();
    storeResetFns.add(() => {
      store.setState(initialState, true);
    });
    return store;
  };
})() as typeof _create;

export { resetAllStores, create };
