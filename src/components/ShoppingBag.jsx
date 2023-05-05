import { useContext, useState } from 'react';
import BagIcon from '../assets/icons/Bag.icon';
import '../main.css';
import { ShoppingBagContext } from '../context/ShoppingBagContext';
import TashIcon from '../assets/icons/Tash.icon';

export default function ShoppingBag() {
  const [showBag, setShowBag] = useState(false);
  const { shoppingBagProducts, addToShoppingBag, decreaseQuantity, clearShoppingBag } =
    useContext(ShoppingBagContext);

  const ShoppingCardStyles = {
    transform: `${showBag ? 'translateX(0)' : 'translateX(100%)'}`,
  };

  function handleClick() {
    setShowBag(!showBag);
  }

  return (
    <>
      <button className='bag_button' onClick={handleClick}>
        <BagIcon />
      </button>
      <div className='bag_container' style={ShoppingCardStyles}>
        <button className='clear_button' onClick={() => clearShoppingBag()}>
          <TashIcon />
        </button>
        {shoppingBagProducts.map((product, index) => (
          <div className='bag_product' key={index}>
            <img className='bag_product_image' src={product.thumbnail} />
            <h6 className='bag_product_title'>{product.title}</h6>
            <div className='bag_product_footer'>
              <p>${product.price}</p>
              <button className='bag_product_subtract' onClick={() => decreaseQuantity(product)}>
                -
              </button>
              <span>{product.quantity}</span>
              <button className='bag_product_add' onClick={() => addToShoppingBag(product)}>
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
