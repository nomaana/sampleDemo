import store from '../../index';

export const setAddToCart = (item) => {
  return {
    type: 'ADD_TO_CART',
    item,
  };
};

export const setQuantity = (quantity) => {
  return {
    type: 'SET_QUANTITY',
    quantity,
  };
};

export const setUpdateToCart = (item) => {
  return {
    type: 'UPDATE_TO_CART',
    item,
  };
};

export const removeFromCart = (item) => {
  return {
    type: 'REMOVE_FROM_CART',
    item,
  };
};

export const setTotalAmount = (price) => {
  return {
    type: 'SET_TOTAL_AMOUNT',
    price,
  };
};

export const getCartTotal = () => async (dispatch) => {
  var state = store.getState();
  let arr = state.cart.item;
  let finalTotal = arr.reduce((amount, item) => item.price + amount, 0);
  // console.log(finalTotal, 'summm');
  dispatch(setTotalAmount(finalTotal));
};

export const decrementToCart = (item) => async (dispatch) => {
  // var state = store.getState();
  // let cart = state.cart.item;
  let sum = item.fixPrice;
  let total = item.price - sum;
  let updateItem = Object.assign(item, {
    quantity: item.quantity - 1,
    price: total,
  });
  // if the Quantity is less than 1 it will remove
  if (updateItem.quantity === 0) {
    dispatch(removeItemFromCart(item));
  }
  dispatch(setUpdateToCart(updateItem));
  dispatch(getCartTotal());
};

export const checkToAddToCart = (item) => async (dispatch) => {
  var state = store.getState();
  let cart = state.cart;
  const found = cart.item.some((val) => val.id === item.id);
  if (found) {
    // already  have the item in the cart
    let sum = item.fixPrice;
    let total = item.price + sum;
    let updateItem = Object.assign(item, {
      quantity: item.quantity + 1,
      price: total,
    });

    dispatch(setUpdateToCart(updateItem));
    dispatch(getCartTotal());
  } else {
    alert('successfully added to the cart');
    let updateItem = Object.assign(item, {
      quantity: item.quantity + 1,
    });
    dispatch(setTotalAmount(item.price));
    dispatch(setAddToCart(updateItem));
  }
};

export const removeItemFromCart = (item) => async (dispatch) => {
  var state = store.getState();
  var cart = state.cart.item;
  //clone the item
  let newItem = cart;
  // check if the product is exist or not
  const index = cart.findIndex((items) => items.id === item.id);
  let updateItem = Object.assign(item, {
    quantity: 0,
    price: item.fixPrice,
  });
  dispatch(setUpdateToCart(updateItem));
  if (index >= 0) {
    // item is exist in the basket,remove it
    newItem.splice(index, 1);
  }
  dispatch(removeFromCart(newItem));
  dispatch(getCartTotal());
};

// // app.js
// import {Provider} from 'react-redux';
// import store from '../index.js';
// <Provider store={store}>
//   <View></View>
// </Provider>;

// // reducer
// const initialState = {
//   name: '',
//   address: '',
// };

// const test = (state = initialState, action) => {
//   switch (action.type) {
//     case 'ADD_TEST':
//       return {
//         ...state,
//         name: action.name,
//       };
//     case 'ADD_ADDRESS':
//       return {
//         ...state,
//         address: action.address,
//       };
//   }
//   return state;
// };

// export default test;

// // ACTION
// export const setName = (name) => {
//   return {
//     type: 'ADD_TEST',
//     name,
//   };
// };

// // index.js
// import {combineReducers, createStore} from 'redux';
// import test from 'test';
// const combineReducer = combineReducers({test});

// const store = createStore(combineReducer);
// export default store;

// import React, {Component} from 'react';

// class Test extends Component {
//   render() {
//     return (
//       <View style={{flex}}>
//         <Text>name</Text>
//       </View>
//     );
//   }
// }

// export default Test;
