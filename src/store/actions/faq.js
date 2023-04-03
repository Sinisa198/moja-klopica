export const CREATE_FAQ = 'CREATE_FAQ';
export const GET_ALL_FAQ = 'GET_ALL_FAQ';
export const UPADATE_FAQ = 'UPDATE_FAQ';
export const DELETE_FAQ = 'DELETE_FAQ';

export const createFaq = (payload) => ({
  type: CREATE_FAQ,
  payload,
});

export const getAllFaq = (payload) => ({
  type: GET_ALL_FAQ,
  payload,
  Headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

export const upadateFaq = (payload) => ({
  type: UPADATE_FAQ,
  payload,
});

export const deleteFaq = (payload) => ({
  type: DELETE_FAQ,
  payload,
});
