import { getCategories } from '../utilities/getCategories';
import { useGetProducts } from './useGetProducts';

export default function useCategories() {
  const { data: products, isLoading } = useGetProducts();

  if (!isLoading) {
    const categories = getCategories(products);
    return categories;
  }

  return [];
}
