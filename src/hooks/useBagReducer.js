import { useReducer } from 'react';
import { ShoppingBagReducer } from '../store/store';
import { initialBagState } from '../store/actions';

export function useBagReducer() {
  return useReducer(ShoppingBagReducer, initialBagState);
}
