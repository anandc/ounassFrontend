import initialState from './initialState';
import * as types from '../constants/actionTypes';
export default function (state = initialState.products, action) {
  switch (action.type) {
    default:
      return state;
  }
}