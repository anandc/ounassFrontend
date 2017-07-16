import { put, call } from 'redux-saga/effects';
import { fetchProducts } from '../Api/api';
import * as types from '../constants/actionTypes';

export function* searchSaga({ payload }) {
  try {
    const products = yield call(fetchProducts, payload);
    yield [
      put({ type: types.SHUTTER_VIDEOS_SUCCESS, videos }),
      put({ type: types.SELECTED_VIDEO, video: videos[0] }),
      put({ type: types.FLICKR_IMAGES_SUCCESS, images }),
      put({ type: types.SELECTED_IMAGE, image: images[0] })
    ];
  } catch (error) {
    yield put({ type: 'SEARCH_ERROR', error });
  }
}