import * as types from '../constants/actionTypes';
export const searchAction = (payload) => ({
  type: types.SEARCH_REQUEST,
  payload
});