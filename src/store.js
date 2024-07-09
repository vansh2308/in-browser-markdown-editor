
import { configureStore } from "@reduxjs/toolkit";
import sidebarDisplayReducer from "./features/sidebarDisplaySlice";
import themeReducer from "./features/themeSlice";
import fullPreviewReducer from "./features/fullPreviewSlice";

export default configureStore({
  reducer: {
    sidebarDisplay: sidebarDisplayReducer,
    theme: themeReducer,
    fullPreview: fullPreviewReducer
  }
})