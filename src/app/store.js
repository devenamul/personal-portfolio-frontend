import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "../features/pages/Contact/ContactSlice.js";
// configer store setup

const store = configureStore({
  reducer: {
   contact: contactReducer 
  }
});

// export
export default store;
