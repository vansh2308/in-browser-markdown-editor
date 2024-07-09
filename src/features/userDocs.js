


import { createSlice } from "@reduxjs/toolkit";
import defaultData from "./../assets/data.json"

export const userDocsSlice = createSlice({
  name: "userDocs",
  initialState: {
    value: {
        active: 0,
        docsList: defaultData
    }
  },
  reducers: {
    setUserDocs: (state, action) => {
        state.value = action.payload
    },
    setActive: (state, action) => {
        state.value = { ...state.value, active: action.payload }
    },
    setSaved: (state, action) => {
        if(action.payload.type=="unsaved"){
            if(!state.value.docsList[state.value.active].name.endsWith("*")){
                state.value.docsList[state.value.active].name += "*"
            }
        } else if(action.payload.type=="saved") {
            if(state.value.docsList[state.value.active].name.endsWith("*")){
                state.value.docsList[state.value.active].name = state.value.docsList[state.value.active].name.slice(0, -1);
            }
        }
    },
    setContent: (state, action) => {
        console.log("Setting content...");
        state.value.docsList[state.value.active].content = action.payload
    }
  }
})

export const { setUserDocs, setActive, setSaved, setContent } = userDocsSlice.actions
export default userDocsSlice.reducer


