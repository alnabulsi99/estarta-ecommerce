import * as CART_CONSTANTS from "./constants";

const initialState = {
  items: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_CONSTANTS.ADD_TO_CART:
      const newItem = action.payload;
      const existingItemIndex = state.items.findIndex(item => item.id === newItem.id);
      const updatedItems = existingItemIndex !== -1
        ? state.items.map(item => item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item)
        : [...state.items, { ...newItem, quantity: 1 }];
      return { ...state, items: updatedItems };
    case CART_CONSTANTS.UPDATE_CART_ITEM:
      return {
        ...state,
        items: state.items.map(item => item.id === action.payload.id ? action.payload : item),
      };
    case CART_CONSTANTS.REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id),
      };
    case CART_CONSTANTS.EMPTY_CART:
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
