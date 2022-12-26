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

export const deleteFood = (payload) => {
  return {
    type: DELETE_FOOD,
    payload,
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
