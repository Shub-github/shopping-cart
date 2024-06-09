// creation of slice
//import createSlice

//initialize the key:value i.e. name, initialState, reducers(functionality)

// reducer function humesha input me 2 cheej laite hai state and action
// two parameter will be handle by function (state,action), where state is the initial state jisme hum push and remove karegai item ko  and action.payload(parameter) will handle the value coming from another function to add() and remove  function
import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload); //jo bhi value aa rhi vo push karegai
    },
    remove: (state, action) => {
      return state.filter((item) => item.id !== action.payload); // jo bhi id aa rhi uslo chor kr baki ek array me save karegai.
    },
  },
});

//export the functionality with reducer
export const { add, remove } = CartSlice.actions;
export default CartSlice.reducer;
