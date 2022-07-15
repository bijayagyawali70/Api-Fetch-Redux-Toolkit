import { createSlice } from "@reduxjs/toolkit";

export const nameSlicer = createSlice({
    name : 'user',
    initialState:{
        userDetails : []
    },

    reducers:{
         nameFromApi:(state, action) => {
            // console.log('actions',action.payload)
            // state.userDetails = [...state.userDetails, action.payload]
            // state.userDetails.push(action.payload)
            state.userDetails = action.payload
         }
    }
})

//Action creator are generated for eacrh case reducer function
export const {nameFromApi} = nameSlicer.actions

export default nameSlicer.reducer