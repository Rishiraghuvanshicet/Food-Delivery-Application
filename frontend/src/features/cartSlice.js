// In your cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const { item, quantity } = action.payload;
      const newItem = { ...item, quantity };
      state.cart.push(newItem);
    },
    removeCart: (state, action) => {
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload.id
      );
    },
  },
});

export const { addCart, removeCart } = cartSlice.actions;
export const selectCart = (state) => state.cart.cart;
export default cartSlice.reducer;
