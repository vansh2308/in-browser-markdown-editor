
import { configureStore } from "@reduxjs/toolkit";
import sidebarDisplayReducer from "./features/sidebarDisplaySlice";
import themeReducer from "./features/themeSlice";


export default configureStore({
  reducer: {
    sidebarDisplay: sidebarDisplayReducer,
    theme: themeReducer
  }
})