export const LOGIN = 'LOGIN';
export const SET_USER = 'SET_USER';
export const AUTH_PROFILE = 'AUTH_PROFILE';
export const AUTH_CONFIRM = 'AUTH_CONFIRM';
export const AUTH_PASSWORD_FORGOT = 'AUTH_PASSWORD_FORGOT';

export const login = (payload) => ({
  type: LOGIN,
  payload,
});

export const setUser = (payload) => ({
  type: SET_USER,
  payload,
});

export const authProfile = (payload) => ({
  type: AUTH_PROFILE,
  payload,
});

export const authConfirm = (payload) => ({
  type: AUTH_CONFIRM,
  payload,
});

export const authPasswordForgot = (payload) => ({
  type: AUTH_PASSWORD_FORGOT,
  payload,
});
