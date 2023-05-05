import Filters from './components/Filters';
import ProductsContainer from './components/ProductsContainer';
import ShoppingBag from './components/ShoppingBag';
import { ShoppingBagProvider } from './context/ShoppingBagContext';
import './main.css';

export default function App() {
  return (
    <ShoppingBagProvider>
      <div>
        <h1>Electronic Commerce</h1>
        <Filters />
        <ProductsContainer />
        <ShoppingBag />
      </div>
    </ShoppingBagProvider>
  );
}
