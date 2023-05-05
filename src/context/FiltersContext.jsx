import { createContext, useState } from 'react';

export const FiltersContext = createContext();

export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    minPrice: 0,
    category: 'all',
  });

  function changeMinPrice(e) {
    setFilters((prevFilters) => ({
      ...prevFilters,
      minPrice: e.target.value,
    }));
  }

  function changeCategory(e) {
    setFilters((prevFilters) => ({
      ...prevFilters,
      category: e.target.value,
    }));
  }

  return (
    <FiltersContext.Provider
      value={{
        filters,
        changeCategory,
        changeMinPrice,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}
