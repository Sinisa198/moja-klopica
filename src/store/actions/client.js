export const GET_ALL_CLIENTS = 'GET_ALL_CLIENTS';
export const SET_ALL_CLIENTS = 'SET_ALL_CLIENTS';

export const getAllClients = () => ({
  type: GET_ALL_CLIENTS,
});

export const setAllClients = (payload) => ({
  type: SET_ALL_CLIENTS,
  payload,
});
