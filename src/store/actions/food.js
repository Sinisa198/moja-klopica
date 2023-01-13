export const ADD_FOOD = 'ADD_FOOD';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INCREMENTE = 'INCREMENTE';
export const DECREMENTE = 'DECREMENTE';

export const addFood = (payload) => {
  return {
    type: ADD_FOOD,
    payload,
  };
};

export const removeFromCart = (productId) => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: {
      productId: productId,
    },
  };
};

export const incremente = (payload) => {
  return {
    type: INCREMENTE,
    payload,
  };
};

export const decremente = (payload) => {
  return {
    type: DECREMENTE,
    payload,
  };
};
