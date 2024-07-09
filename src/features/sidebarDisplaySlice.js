
import { createSlice } from "@reduxjs/toolkit";

export const sidebarDisplaySlice = createSlice({
  name: "sidebarDisplay",
  initialState: {
    value: false
  },
  reducers: {
    setSidebarDisplay: (state, action) => {
        state.value = action.payload
    }
  }
})

export const { setSidebarDisplay } = sidebarDisplaySlice.actions
export default sidebarDisplaySlice.reducer
