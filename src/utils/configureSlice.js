import { createSlice } from "@reduxjs/toolkit";

const configureSlice = createSlice({
    name: "Configure Slice",
    initialState : {
        language:"en"
    },
    reducers : {
        changeLaguage: (state,action) => {
            state.language = action.payload;
        }
    }
});

export const {changeLaguage} = configureSlice.actions;

export default configureSlice.reducer;