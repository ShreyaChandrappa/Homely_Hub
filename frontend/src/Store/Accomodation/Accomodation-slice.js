import {createSlice} from "@reduxjs/toolkit";

const accomodationSlice = createSlice({
    name:"accomodation",
    initialState:{
        accomodation: [],
        laoding: false,
        errors: null,
    },
    reducers:{
        getAccomodationRequest(state){
            state.laoding = true;
        },
        getAccomodation(state,action){
            state.accomodation = action.payload;
            state.laoding = false;
        },
        getErrors(state,action){
            state.errors = action.payload;
        },
    },
});

export const accomodationActions = accomodationSlice.actions;

export default accomodationSlice;