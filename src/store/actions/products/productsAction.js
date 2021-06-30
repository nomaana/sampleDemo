import store from '../../index';

export const setLoader = () => {
  return {
    type: 'SET_LOADER',
  };
};

export const setError = () => {
  return {
    type: 'SET_ERROR',
  };
};

// FOR THE EDIT AND ADD PRODUCT
export const setTitle = (title) => {
  return {
    type: 'SET_TITLE',
    title,
  };
};

export const setImage = (imageUrl) => {
  return {
    type: 'SET_IMAGEURL',
    imageUrl,
  };
};

export const setPrice = (price) => {
  return {
    type: 'SET_PRICE',
    price,
  };
};

export const setDescription = (description) => {
  return {
    type: 'SET_DESCRIPTION',
    description,
  };
};
// END

export const setAllProducts = (availableProducts) => {
  return {
    type: 'SET_All_PRODUCTS',
    availableProducts,
  };
};

export const setReset = () => {
  return {
    type: 'SET_RESET',
  };
};

export const setFlag = () => {
  return {
    type: 'SET_FLAG',
  };
};
export const setProducts = (products) => {
  return {
    type: 'SET_PRODUCTS',
    products,
  };
};

export const setMyProducts = (myProduct) => {
  return {
    type: 'SET_MYPRODUCTS',
    myProduct,
  };
};

export const createProduct = (AddProduct) => {
  return {
    type: 'CREATE_PRODUCT',
    AddProduct,
  };
};

export const updateProduct = (product) => {
  return {
    type: 'UPDATE_PRODUCT',
    product,
  };
};

export const deleteProduct = (productId) => {
  return {
    type: 'DELETE_PRODUCT',
    productId,
  };
};

export const getDetailsById = (id) => async (dispatch) => {
  var state = store.getState();
  let arr = state.product.availableProducts.filter((data) => data.id == id);
  arr = arr.values();
  for (let val of arr) {
    arr = val;
  }
  dispatch(setMyProducts(arr));
  return;
};

export const getUserDetailsById = (id) => async (dispatch) => {
  var state = store.getState();
  let arr = state.product.userProducts.filter((data) => data.id === id);
  arr = arr.values();
  for (let val of arr) {
    arr = val;
  }
  dispatch(setTitle(arr.title));
  dispatch(setImage(arr.imageUrl));
  dispatch(setPrice(arr.price));
  dispatch(setDescription(arr.description));
  dispatch(setMyProducts(arr));
  return;
};

export const addProdcutAction = () => async (dispatch) => {
  // state.product.title.value
  var state = store.getState();
  try {
    let res = await fetch(
      'https://m-complete-guide-ba60f-default-rtdb.firebaseio.com/products.json',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          title: 'Pen & Paper',
          imageUrl:
            'https://cdn.pixabay.com/photo/2015/10/03/02/14/pen-969298_1280.jpg',
          price: 33.49,
          description:
            "Can be used for role-playing (not the kind of role-playing you're thinking about...)",
        }),
      },
    );

    let response = await res.json();
    if (response) {
      console.log(response, 'fire base response');
    } else {
      console.log(response, 'no fire base response');
    }
  } catch (e) {
    console.log(e);
  }
};

export const getProducts = () => async (dispatch) => {
  // console.log('welcome');
  dispatch(setLoader());
  try {
    let response = await fetch(
      'https://m-complete-guide-ba60f-default-rtdb.firebaseio.com/products.json',
    );
    const resData = await response.json();
    const loadedProducts = [];
    for (const key in resData) {
      loadedProducts.push({
        id: key,
        description: resData[key].description,
        fixPrice: resData[key].fixPrice,
        imageUrl: resData[key].imageUrl,
        ownerId: resData[key].ownerId,
        price: resData[key].price,
        quantity: resData[key].quantity,
        title: resData[key].title,
      });
    }
    if (loadedProducts.length) {
      dispatch(setAllProducts(loadedProducts));
      dispatch(setLoader());
    }
    // console.log(loadedProducts, 'resData for the fetching updating');
  } catch (e) {
    dispatch(setError());
    // dispatch(setLoader());

    console.log(e);
  }
};
