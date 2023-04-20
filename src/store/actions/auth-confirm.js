export const CONFIRM_TOKEN_REQUEST = 'CONFIRM_TOKEN_REQUEST';
export const CONFIRM_TOKEN_SUCCESS = 'CONFIRM_TOKEN_SUCCESS';
export const CONFIRM_TOKEN_FAILURE = 'CONFIRM_TOKEN_FAILURE';

export const confirmTokenRequest = (token) => ({
  type: CONFIRM_TOKEN_REQUEST,
  payload: { token },
});

export const confirmTokenSuccess = () => ({
  type: CONFIRM_TOKEN_SUCCESS,
});

export const confirmTokenFailure = (error) => ({
  type: CONFIRM_TOKEN_FAILURE,
  payload: { error },
});
