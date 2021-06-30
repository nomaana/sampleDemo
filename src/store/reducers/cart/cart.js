const initialState = {
  item: [],
  totalAmount: 0,
  quantity: 0,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        item: [...state.item, action.item],
      };
    case 'SET_QUANTITY':
      return {
        ...state,
        quantity: action.quantity,
      };
    case 'UPDATE_TO_CART':
      return {
        ...state,
        item: state.item.map((item) =>
          item.id === action.item.id ? action.item : item,
        ),
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        item: action.item,
      };
    case 'SET_TOTAL_AMOUNT':
      return {
        ...state,
        totalAmount: action.price,
      };

    // we are calling the AddReducer case when we call the add order it will clear the item state
    case 'ADD_ORDER':
      return initialState;

    //  If the product is remove from the Aadmin side so it will remove from the cart side also
    case 'DELETE_PRODUCT':
      if (!state.item.length) {
        return state;
      }
      const index = state.item.findIndex(
        (items) => items.id === action.productId,
      );
      // const updatedItem = {...state.item};
      const itemTotal = state.item[index].price;
      // delete updatedItem[action.productId];
      // console.log(updatedItem, 'updated item qqqqq');
      return {
        ...state,
        item: state.item.filter((product) => product.id !== action.productId),
        // item: updatedItem,
        totalAmount: state.totalAmount - itemTotal,
      };
  }
  return state;
};

export default cart;
