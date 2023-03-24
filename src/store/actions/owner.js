export const GET_ALL_OWNER = 'GET_ALL_OWNER';
export const SET_ALL_OWNER = 'SET_ALL_OWNER';

export const getAllOwner = () => ({
  type: GET_ALL_OWNER,
});

export const setAllOwner = (payload) => ({
  type: SET_ALL_OWNER,
  payload,
});
