import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
// import {composeWithDevTools} from 'redux-devtools-extension';

import testReducer from './reducers/test/testReducer';
import productReducer from './reducers/products/productsReducer';
import cartReducer from './reducers/cart/cart';
import orderReducer from './reducers/orders/orderReducer';
const combineReducer = combineReducers({
  test: testReducer,
  product: productReducer,
  cart: cartReducer,
  order: orderReducer,
});

const store = createStore(
  combineReducer,
  // composeWithDevTools,
  applyMiddleware(thunk),
);

export default store;
