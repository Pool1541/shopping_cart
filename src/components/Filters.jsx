import { useId } from 'react';
import '../main.css';
import useFilters from '../hooks/useFilters';
import useCategories from '../hooks/useCategories';

export default function Filters() {
  const { changeCategory, changeMinPrice, filters } = useFilters();
  const categories = useCategories();

  const minPriceID = useId();
  const categoryID = useId();

  return (
    <div className='prices_container'>
      <div>
        <label htmlFor={minPriceID}>Min Price</label>
        <input
          id={minPriceID}
          type='range'
          min={0}
          max={1000}
          value={filters.minPrice}
          onChange={changeMinPrice}
        />
        <span>
          $ <span>{filters.minPrice}</span>
        </span>
      </div>
      <div>
        <label htmlFor={categoryID}>Category</label>
        <select id={categoryID} onChange={changeCategory}>
          <option value='all'>All</option>
          {categories.map((category, i) => (
            <option value={category} key={i}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
