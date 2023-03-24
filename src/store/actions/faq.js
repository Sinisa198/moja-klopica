export const FAQ = 'FAQ';
export const GET_ALL_FAQ = 'GET_ALL_FAQ';
export const UPADATE_FAQ = 'UPDATE_FAQ';
export const DELETE_FAQ = 'DELETE_FAQ';

export const faq = (payload) => ({
  type: FAQ,
  payload,
});
export const getAllFaq = (payload) => ({
  type: GET_ALL_FAQ,
  payload,
});
export const updateFaq = (payload) => ({
  type: UPADATE_FAQ,
  payload,
});
export const deleteFaq = (payload) => ({
  type: DELETE_FAQ,
  payload,
});
