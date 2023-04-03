import {
  ADD_FOOD,
  REMOVE_FROM_CART,
  INCREMENT,
  DECREMENT,
} from '../actions/food';

let initState = {
  cart: [],
  sum: 0,
  count: 1,
};

const foodReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_FOOD:
      const sameFoodIndex = state.cart.findIndex(
        (food) => food.name === action.payload.name
      );

      if (sameFoodIndex >= 0) {
        let cart = [...state.cart];
        let count = state.count;
        cart[sameFoodIndex] = {
          ...cart[sameFoodIndex],
          count: cart[sameFoodIndex].count + action.payload.count,
        };

        return {
          ...state,
          sum: state.sum + action.payload.price,
          cart,
        };
      }

      return {
        ...state,
        cart: [...state.cart, action.payload],
        sum: state.sum + action.payload.price,
      };
    case REMOVE_FROM_CART:
      let newSum = state.sum;
      let count = state.count;
      return {
        ...state,
        cart: state.cart.filter((food) => {
          if (food.id === action.payload.id) {
            newSum -= food.price * count;
            return false;
          }

          return food;
        }),
        sum: newSum,
      };
    case INCREMENT: {
      let incrementSum = state.sum;
      let count = state.count;
      return {
        ...state,
        cart: state.cart.map((food) => {
          if (food.id === action.payload) {
            incrementSum += food.price;
            count++;
            return { ...food, ...count };
          }
          return food;
        }),
        sum: incrementSum,
        count: count,
      };
    }
    case DECREMENT: {
      let decrementSum = state.sum;
      let count = state.count;
      return {
        ...state,

        cart: state.cart.map((food) => {
          if (food.id === action.payload) {
            decrementSum -= food.price;
            count--;
            return { ...food, ...count };
          }
          return food;
        }),
        sum: decrementSum,
        count: count,
      };
    }
    default:
      return state;
  }
};

export default foodReducer;
