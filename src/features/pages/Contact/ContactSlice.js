import { createSlice } from "@reduxjs/toolkit";
import { createContactData } from "./contactApi";

// Initial state
const initialState = {
    contacts: [],
    loading: false,  
    message: null,
    error: null  
};

// Create Slice
const contactSlice = createSlice({
    name: "contact",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createContactData.fulfilled, (state, { payload }) => {
            state.contacts.push(payload);
        });
    } 
});

// export selector
export const getAllContactData = (state) => state.contact;
export default contactSlice.reducer;
