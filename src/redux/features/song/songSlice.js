import { createSlice } from "@reduxjs/toolkit";

const initialState={};

const songSlice=createSlice({
    name:"counter",
    initialState:initialState,
    reducers:{
        selectSong: (state, action)=> action.payload
    }
})


export const {selectSong} = songSlice.actions; 
export default songSlice.reducer; 