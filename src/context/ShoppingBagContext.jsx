import { createContext } from 'react';
import { useBagReducer } from '../hooks/useBagReducer';
import { BAG_ACTION_TYPES } from '../store/store';

export const ShoppingBagContext = createContext();

export function ShoppingBagProvider({ children }) {
  const [state, dispatch] = useBagReducer();

  function addToShoppingBag(product) {
    dispatch({
      type: BAG_ACTION_TYPES.ADD,
      payload: product,
    });
  }

  function decreaseQuantity(product) {
    dispatch({
      type: BAG_ACTION_TYPES.DECREASE,
      payload: product,
    });
  }

  function removeFromShoppingBag(product) {
    dispatch({
      type: BAG_ACTION_TYPES.REMOVE,
      payload: product,
    });
  }

  function clearShoppingBag() {
    dispatch({
      type: BAG_ACTION_TYPES.CLEAR,
    });
  }

  return (
    <ShoppingBagContext.Provider
      value={{
        shoppingBagProducts: state,
        addToShoppingBag,
        decreaseQuantity,
        removeFromShoppingBag,
        clearShoppingBag,
      }}
    >
      {children}
    </ShoppingBagContext.Provider>
  );
}
