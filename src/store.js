
import { configureStore } from "@reduxjs/toolkit";
import sidebarDisplayReducer from "./features/sidebarDisplaySlice";
import themeReducer from "./features/themeSlice";
import fullPreviewReducer from "./features/fullPreviewSlice";
import markdownReducer from "./features/markdownSlice";
import userDocsSlice from "./features/userDocs";

export default configureStore({
  reducer: {
    sidebarDisplay: sidebarDisplayReducer,
    theme: themeReducer,
    fullPreview: fullPreviewReducer,
    markdown: markdownReducer,
    userDocs: userDocsSlice
  }
})