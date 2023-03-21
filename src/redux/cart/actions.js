import * as CART_CONSTANTS from "./constants";

export const addToCart = (product) => (dispatch) => {
  dispatch({
    type: CART_CONSTANTS.ADD_TO_CART,
    payload: product,
  });
};

export const removeFromCart = (product) => (dispatch) => {
  dispatch({
    type: CART_CONSTANTS.REMOVE_FROM_CART,
    payload: product,
  });
};

export const updateCartItem = (item) => {
  return {
    type: CART_CONSTANTS.UPDATE_CART_ITEM,
    payload: item,
  };
};
export const emptyCart = () => {
  return {
    type: 'EMPTY_CART'
  };
};
