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
      const isExisting = state.cart.find((product) => product._id === item._id);
      
      if (isExisting) {
        alert("Item already added to cart");
      } else {
        const newItem = { ...item, quantity };
        state.cart.push(newItem);
      }
    },
    removeCart: (state, action) => {
      // Use _id to remove the correct item from the cart
      state.cart = state.cart.filter((product) => product._id !== action.payload._id);
    },
  },
});

export const { addCart, removeCart } = cartSlice.actions;
export const selectCart = (state) => state.cart.cart;
export default cartSlice.reducer;
