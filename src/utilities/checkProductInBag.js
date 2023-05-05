export function checkProductInBag(shoppingBagProducts, product) {
  return shoppingBagProducts.some((bagProduct) => bagProduct.id === product.id);
}
