export const ADD_FOOD = 'ADD_FOOD';
export const DELETE_FOOD = 'DELETE_FOOD';
export const INCREMENTE = 'INCREMENTE';
export const DECREMENTE = 'DECREMENTE';

export const addFood = (payload) => {
  return {
    type: ADD_FOOD,
    payload,
  };
};

export const deleteFood = (payload) => (dispatch) => {
  return {
    type: DELETE_FOOD,
    payload,
  };
};

export const incremente = (payload) => (dispatch) => {
  return {
    type: INCREMENTE,
    payload,
  };
};

export const decremente = (payload) => (dispatch) => {
  return {
    type: DECREMENTE,
    payload,
  };
};
