import { all, fork } from 'redux-saga/effects'
import { searchProducts } from './productSaga';
import * as types from '../constants/actionTypes';

export default function* watchSearch() {
	yield all([
        fork(searchProducts)
    ])
}
