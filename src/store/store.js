import { add, clear, decrease, remove } from './actions';

export const BAG_ACTION_TYPES = {
  ADD: 'ADD_TO_BAG',
  DECREASE: 'DECREASE_QUANTITY',
  REMOVE: 'REMOVE_FROM_BAG',
  CLEAR: 'CLEAR_BAG',
};

export function ShoppingBagReducer(state, action) {
  switch (action.type) {
    case BAG_ACTION_TYPES.ADD:
      return add(state, action);
    case BAG_ACTION_TYPES.DECREASE:
      return decrease(state, action);
    case BAG_ACTION_TYPES.REMOVE:
      return remove(state, action);
    case BAG_ACTION_TYPES.CLEAR:
      return clear();
    default:
      throw new Error('Acción desconocida ', action.type);
  }
}
