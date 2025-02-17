
import { createSlice } from "@reduxjs/toolkit";
import defaultData from "./../assets/data.json"


export const markdownSlice = createSlice({
  name: "markdown",
  initialState: {
    value: null,
  },
  reducers: {
    setMarkdown: (state, action) => {
        state.value = action.payload
    }
  }
})

export const { setMarkdown } = markdownSlice.actions
export default markdownSlice.reducer


