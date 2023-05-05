import { useContext } from 'react';
import { FiltersContext } from '../context/FiltersContext';

export default function useFilters() {
  return useContext(FiltersContext);
}
