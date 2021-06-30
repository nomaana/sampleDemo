const initialState = {
  name: 'Noman',
};

const test = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return {
        ...state,
        name: action.name,
      };
  }
  return state;
};

export default test;

// // APP.JS
// import {connect, Provider} from 'react-redux';
// import store from '../store';
// <Provider store={store}></Provider>;

// // reducer.js

// const initialState = {
//   name: 'sampledemo',
//   address: 'address',
// };

// const test = (state = initialState, action) => {
//   switch (action.type) {
//     case 'SET_NAME':
//       return {
//         ...state,
//         name: action.name,
//       };
//     case 'SET_ADDRESS':
//       return {
//         ...state,
//         address: action.address,
//       };
//   }
//   return state;
// };

// export default test;

// // action.js

// export const setName = (name) => {
//   return {
//     type: 'SET_NAME',
//     name,
//   };
// };

// export const setAddress = (address) => {
//   return {
//     type: 'SET_ADDRESS',
//     address,
//   };
// };

// // INDEX.JS

// import {combineReducers, createStore} from 'redux';

// import test from '../test';

// const combineReducer = combineReducers({test});

// const store = createStore(combineReducer);

// export default store;

// // demo.js

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getName: (name) => dispatch(getName(name)),
//   };
// };

// const mapStateToProps = (state) => {
//   return {
//     testState: state.test,
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(demo);
