import PRODUCTS from '../../../data/dummy-data';
initialState = {
  availableProducts: [],
  myProduct: {},
  userProducts: PRODUCTS.filter((prod) => prod.ownerId === 'u1'),
  title: {
    value: '',
    error: '',
  },
  imageUrl: {
    value: '',
    error: '',
  },
  price: {
    value: 0,
    error: '',
  },
  description: {
    value: '',
    error: '',
  },
  flag: false,
  isLoading: false,
  error: false,
};

const product = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ERROR':
      return {
        ...state,
        error: !state.error,
      };
    case 'SET_LOADER':
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    case 'SET_FLAG':
      return {
        ...state,
        flag: !state.flag,
      };
    case 'SET_All_PRODUCTS':
      return {
        ...state,
        availableProducts: action.availableProducts,
      };
    case 'SET_TITLE':
      return {
        ...state,
        title: action.title,
      };
    case 'SET_IMAGEURL':
      return {
        ...state,
        imageUrl: action.imageUrl,
      };
    case 'SET_PRICE':
      return {
        ...state,
        price: action.price,
      };
    case 'SET_DESCRIPTION':
      return {
        ...state,
        description: action.description,
      };
    case 'SET_PRODUCTS':
      return {
        ...state,
        products: action.products,
      };
    case 'SET_MYPRODUCTS':
      return {
        ...state,
        myProduct: action.myProduct,
      };
    case 'CREATE_PRODUCT':
      return {
        ...state,
        userProducts: [action.AddProduct, ...state.userProducts],
      };
    case 'UPDATE_PRODUCT':
      userProducts = state.userProducts.map((productValue) =>
        productValue.id === action.product.id ? action.product : productValue,
      );
      console.log(userProducts, 'user products reducer');
      return {
        ...state,
        userProducts: state.userProducts.map((productValue) =>
          productValue.id == action.product.id ? action.product : productValue,
        ),
      };

    case 'DELETE_PRODUCT':
      return {
        ...state,
        userProducts: state.userProducts.filter(
          (product) => product.id !== action.productId,
        ),
        availableProducts: state.availableProducts.filter(
          (product) => product.id !== action.productId,
        ),
      };
    case 'SET_RESET':
      return {
        ...state,
        title: '',
        imageUrl: '',
        price: 0,
        description: '',
        flag: false,
        myProduct: {},
      };
  }
  return state;
};

export default product;
