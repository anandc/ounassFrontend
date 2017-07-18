import * as types from '../constants/actionTypes';
const searchAction = (payload) => ({
  type: types.SEARCH_REQUEST,
  payload
});
function receiveProductAction(payload) {
    return {
        type: types.RECEIVE_PRODUCTS,
        payload
    }
}
export {
	searchAction,
	receiveProductAction
};