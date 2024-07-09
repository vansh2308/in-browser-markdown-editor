
import { createSlice } from "@reduxjs/toolkit";

export const fullPreviewSlice = createSlice({
  name: "fullPreview",
  initialState: {
    value: false
  },
  reducers: {
    setFullPreview: (state, action) => {
        state.value = action.payload
    }
  }
})

export const { setFullPreview } = fullPreviewSlice.actions
export default fullPreviewSlice.reducer


