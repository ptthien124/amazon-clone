import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cartList",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },

    removeFromCart(state, action) {
      state.splice(
        state.findIndex((product) => product.cartId === action.payload),
        1
      );
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
