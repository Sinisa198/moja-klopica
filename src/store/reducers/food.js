import {
  ADD_FOOD,
  REMOVE_FROM_CART,
  INCREMENT,
  DECREMENT,
  removeFromCart,
} from '../actions/food';

let initState = {
  cart: [],
  sum: 0,
};

const foodReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_FOOD:
      console.log(action.payload.count);
      const sameFoodIndex = state.cart.findIndex(
        (food) => food.name === action.payload.name
      );

      if (sameFoodIndex >= 0) {
        let cart = [...state.cart];
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
      return {
        ...state,
        cart: state.cart.filter((food) => {
          if (food.id === action.payload.id) {
            newSum -= food.price * food.count;
            return false;
          }

          return food;
        }),
        sum: newSum,
      };
    case INCREMENT: {
      return {
        ...state,
        cart: state.cart.map((food) => {
          if (food.id === action.payload) {
            return { ...food, count: food.count + 1 };
          }
          return food;
        }),
      };
    }
    case DECREMENT: {
      return {
        ...state,
        cart: state.cart.map((food) => {
          if (food.id === action.payload) {
            return { ...food, count: food.count - 1 };
          }
          return food;
        }),
      };
    }
    default:
      return state;
  }
};

export default foodReducer;
