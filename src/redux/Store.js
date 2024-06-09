// create the centralized store for slices(Data)

// ekk centralized store create krte hai by "configureStore" jisme hum key(slice ka naam hota hai) and value (slice function hota hai)

import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./Slices/CartSlice";
export const store = configureStore({
  reducer: {
    cart: CartSlice.reducer,
  },
});
