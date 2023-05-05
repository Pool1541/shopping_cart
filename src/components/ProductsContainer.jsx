import useFilters from '../hooks/useFilters';
import { filterProducts } from '../utilities/filterProducts';
import ProductCard from './ProductCard';
import { useGetProducts } from '../hooks/useGetProducts';
import '../main.css';
import './spinner.css';

export default function ProductsContainer() {
  const { data: products, isLoading } = useGetProducts();
  const { filters } = useFilters();

  const filteredProducts = !isLoading && filterProducts(products, filters);

  if (isLoading)
    return (
      <div className='loader_container'>
        <span className='loader'></span>
      </div>
    );

  return (
    <div className='grid_container'>
      {filteredProducts.map((product, i) => (
        <ProductCard key={i} {...product} />
      ))}
    </div>
  );
}
