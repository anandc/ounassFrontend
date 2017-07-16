import { takeLatest } from 'redux-saga/effects';
import { searchProductSaga } from './productSaga';
import * as types from '../constants/actionTypes';

export default function* watchSearch() {
  yield takeLatest(types.SEARCH_REQUEST, searchProductSaga);
}