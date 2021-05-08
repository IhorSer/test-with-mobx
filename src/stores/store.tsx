import RootStore from './rootStore';
import { createContext, useContext } from 'react';

export const store = new RootStore();

export const StoreContext = createContext(store);

export function useStore() {
  return useContext(StoreContext);
}