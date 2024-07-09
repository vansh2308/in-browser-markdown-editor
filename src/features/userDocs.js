


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
        state.value.docsList[state.value.active].content = action.payload
    },
    deleteDoc: (state) => {
        state.value.docsList.splice(state.value.active, 1);
        if(state.value.docsList.length == 0){
            state.value.active = null;
        } else {
            state.value.active = 0;
        }
    },
    appendDoc: (state, action) => {
        state.value.docsList.push(action.payload)
        state.value.active = state.value.docsList.length - 1;
    }
  }
})

export const { setUserDocs, setActive, setSaved, setContent, deleteDoc, appendDoc } = userDocsSlice.actions
export default userDocsSlice.reducer


