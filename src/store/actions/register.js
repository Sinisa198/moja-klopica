export const REGISTER = 'REGISTER';
export const SET_REGISTER = 'SET_REGISTER';

export const register = (payload) => ({
  type: REGISTER,
  payload,
});

export const setRegister = (payload) => ({
  type: SET_REGISTER,
  payload,
});
