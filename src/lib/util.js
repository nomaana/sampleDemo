export const titleValidator = (title) => {
  if (!title || title.length == 0) {
    return {value: title, error: 'Title can not be empty'};
  } else {
    return {value: title, error: ''};
  }
};

export const imageValidator = (imageurl) => {
  if (!imageurl || imageurl.length == 0) {
    return {value: imageurl, error: 'ImageUrl can not be empty'};
  } else {
    return {value: imageurl, error: ''};
  }
};

export const priceValidator = (price) => {
  if (!price || price.length == 0) {
    return {value: price, error: 'price can not be empty'};
  } else {
    return {value: price, error: ''};
  }
};

export const descriptionValidator = (desc) => {
  if (!desc || desc.length == 0) {
    return {value: desc, error: 'Description can not be empty'};
  } else {
    return {value: desc, error: ''};
  }
};
