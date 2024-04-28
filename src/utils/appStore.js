import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviesSlice from "./moviesSlice";
import gptSlice from "./gptSlice";
import configureSlice from "./configureSlice";

const appStore = configureStore({
    reducer : {
        userSlice : userSlice,
        moviesSlice : moviesSlice,
        gptSlice : gptSlice,
        configureSlice : configureSlice,
    }
})

export default appStore;