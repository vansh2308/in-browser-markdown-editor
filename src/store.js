
import { configureStore } from "@reduxjs/toolkit";
import sidebarDisplayReducer from "./features/sidebarDisplaySlice";


export default configureStore({
  reducer: {
    sidebarDisplay: sidebarDisplayReducer
  }
})