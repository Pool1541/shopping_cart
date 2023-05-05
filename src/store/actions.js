export const initialBagState = JSON.parse(localStorage.getItem('bag')) || [];

export function add(state, action) {
  const newBag = structuredClone(state);
  const productInBag = newBag.find((item) => item.id === action.payload.id);

  if (productInBag) {
    productInBag.quantity += 1;
    localStorage.setItem('bag', JSON.stringify(newBag));
    return newBag;
  }

  const newState = [
    ...newBag,
    {
      ...action.payload,
      quantity: 1,
    },
  ];
  localStorage.setItem('bag', JSON.stringify(newState));
  return newState;
}

export function decrease(state, action) {
  const newBag = structuredClone(state);

  const productInBag = newBag.find((item) => item.id === action.payload.id);

  if (productInBag.quantity > 1) {
    productInBag.quantity -= 1;
    localStorage.setItem('bag', JSON.stringify(newBag));
    return newBag;
  } else {
    return remove(state, action);
  }
}

export function remove(state, action) {
  const newBag = state.filter((item) => item.id !== action.payload.id);
  localStorage.setItem('bag', JSON.stringify(newBag));
  return newBag;
}

export function clear() {
  localStorage.setItem('bag', JSON.stringify([]));
  return [];
}
