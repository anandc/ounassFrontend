import { put, call, takeLatest } from 'redux-saga/effects';
import { fetchProducts } from '../Api/api';
import * as types from '../constants/actionTypes';
import { receiveProductAction } from '../actions/productActions';

export function* searchProductSaga({ payload }) {
  try {
    const data = yield call(fetchProducts, payload);
    let products = [];
    if (data && data.hits) {
      products = data.hits.map((item) => ({
        name: item.name,
        image: item.image,
        price: item.minPrice
      }));
    }
    yield put(receiveProductAction(products));
  } catch (error) {
    yield put({ type: 'SEARCH_ERROR', error });
  }
}

export function* searchProducts() {
  yield takeLatest(types.SEARCH_REQUEST, searchProductSaga)
}
