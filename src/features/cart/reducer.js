


const cartWithoutProduct = (cart, product) => cart.filter(cartProduct => cartProduct.id !== product.id);

const productInCart = (cart, product) => cart.filter(cartProduct => cartProduct.id === product.id)[0];

const addProductToCart = (cart, product) => {
  const cartProduct = productInCart(cart, product);
  return cartProduct === undefined
    ? [ ...cartWithoutProduct(cart, product), { ...product, quantity: 1 }]
    : [ ...cartWithoutProduct(cart, product), { ...cartProduct, quantity: cartProduct.quantity+1 }]
};

const removeProductFromCart = (cart, product) => {
  return product.quantity === 1
    ? [...cartWithoutProduct(cart, product)]
    : [...cartWithoutProduct(cart, product), {...product, quantity: product.quantity-1}]
};

const removeAllFromCart = (cart, product) => {
  return [...cartWithoutProduct(cart, product)]
};

const cartReducer = (state=[], action) => {
  switch(action.type) {
    case 'ADD':
      return addProductToCart(state, action.payload);

    case 'REMOVE':
      return removeProductFromCart(state, action.payload)

    case 'REMOVE_ALL':
      return removeAllFromCart(state, action.payload)

    default:
      return state;
  }
}

export default cartReducer;