import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cartSlice";
import storeSlice from "../features/storeSlice";

export default configureStore({
  reducer: {
    storeList: storeSlice,

    cartList: cartSlice,
  },
});
