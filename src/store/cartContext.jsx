import React from 'react';

const CartContext = React.createContext({
  addFood: (item) => {},
});

export default CartContext;
