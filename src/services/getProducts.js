const FAKESTORE_GET_URL = 'https://fakestoreapi.com/products';
const DUMMYJSON_GET_URL = 'https://dummyjson.com/products';

export async function getProducts() {
  const response = await fetch(FAKESTORE_GET_URL);
  const products = await response.json(); // { products } for DummyJSON
  return products.map((product) => transformData(product));
}

function transformData(data) {
  const parseObject = {
    id: data.id,
    title: data.title,
    category: data.category,
    description: data.description,
    thumbnail: data.image, // data.thumbnail for DummyJSON
    price: data.price,
  };

  return parseObject;
}
