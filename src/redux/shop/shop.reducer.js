import SHOP_DATA from "./shop.data";

const INITIA_STATE = {
  collections: SHOP_DATA,
};

const shopReducer = (state = INITIA_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
