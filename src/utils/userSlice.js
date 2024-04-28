import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "userSlice",
    initialState : {
        userDetails : {}
    },
    reducers : {
        addUser : (state,action) =>{
            console.log(action.payload);
            state.userDetails = action.payload;
        },
        removeUser : (state,action) =>{
            state.userDetails = {};
        }
    }
})

export const {addUser,removeUser} = userSlice.actions;

export default userSlice.reducer;