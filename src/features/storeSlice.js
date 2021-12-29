import { createSlice } from "@reduxjs/toolkit";

export const StoreSlice = createSlice({
  name: "storeList",
  initialState: [],
  reducers: {
    addToStore: (state, action) => state.push(action.payload),

    addAllToStore: (state, action) => [...state, ...action.payload],
  },
});

export const { addToStore, addAllToStore } = StoreSlice.actions;

export default StoreSlice.reducer;
