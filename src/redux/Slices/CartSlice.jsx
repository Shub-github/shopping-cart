// creation of slice
//import createSlice
import { createSlice } from "@reduxjs/toolkit";

//initialize the key:value i.e. name, initialState, reducers(functionality)
export const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add: () => {},
    remove: () => {},
  },
});

//export the functionality with reducer
export const { add, remove } = CartSlice.actions;
export default CartSlice.reducer;
