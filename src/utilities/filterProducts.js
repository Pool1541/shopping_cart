export function filterProducts(products, filters) {
  return products.filter((product) => {
    if (product.price >= filters.minPrice) {
      if (filters.category === 'all' || product.category === filters.category) {
        return product;
      }
    }
  });
}
