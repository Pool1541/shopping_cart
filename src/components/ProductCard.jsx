import { useContext } from 'react';
import '../main.css';
import { ShoppingBagContext } from '../context/ShoppingBagContext';
import { checkProductInBag } from '../utilities/checkProductInBag';

export default function ProductCard({ title, description, price, thumbnail, id }) {
  const { addToShoppingBag, shoppingBagProducts, removeFromShoppingBag } =
    useContext(ShoppingBagContext);

  const isProductInBag = checkProductInBag(shoppingBagProducts, {
    title,
    description,
    price,
    thumbnail,
    id,
  });

  return (
    <div className='card'>
      <div className='card_imageContainer'>
        <img src={thumbnail} alt={title} />
      </div>
      <div className='card_info'>
        <h2 className='card_title'>{title}</h2>
        <p className='card_description'>{description}</p>
        <div className='card_footer'>
          <p className='card_price'>
            $<span>{price}</span>
          </p>
          {isProductInBag ? (
            <button
              className='danger'
              onClick={() => removeFromShoppingBag({ title, description, price, thumbnail, id })}
            >
              Remover
            </button>
          ) : (
            <button onClick={() => addToShoppingBag({ title, description, price, thumbnail, id })}>
              Agregar
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
