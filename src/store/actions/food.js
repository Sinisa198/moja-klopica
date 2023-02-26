export const ADD_FOOD = 'ADD_FOOD';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const addFood = (payload) => {
  return {
    type: ADD_FOOD,
    payload,
  };
};

export const removeFromCart = (payload) => {
  return {
    type: REMOVE_FROM_CART,
    payload,
  };
};

export const incrementCart = (payload) => {
  return {
    type: INCREMENT,
    payload,
  };
};
export const decrementCart = (payload) => {
  return {
    type: DECREMENT,
    payload,
  };
};
