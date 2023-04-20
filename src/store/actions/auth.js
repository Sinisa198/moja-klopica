export const LOGIN = 'LOGIN';
export const SET_USER = 'SET_USER';
export const AUTH_PROFILE = 'AUTH_PROFILE';
export const AUTH_CONFIRM = 'AUTH_CONFIRM';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loginFailure = (stateError) => ({
  type: LOGIN_FAILURE,
  stateError,
});
export const login = (payload) => ({
  type: LOGIN,
  payload,
});

export const setUser = (payload) => ({
  type: SET_USER,
  payload,
});

export const getUserProfile = (payload) => ({
  type: AUTH_PROFILE,
  payload,
});

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});
