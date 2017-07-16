import { combineReducers } from 'redux';
import products from './productReducer';

// Combines all reducers to a single reducer function
const rootReducer = combineReducers({
  products
});

export default rootReducer;