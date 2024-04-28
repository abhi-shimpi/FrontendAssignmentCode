import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "Gpt Search",
    initialState : {
        gptSearch : false,
        movieNames : null,
        movieData : null,
        isSearched : false
    },
    reducers : {
        toggleGptSearchView : (state) => {
            state.gptSearch = !state.gptSearch;
        },
        addMoviesData : (state,action) =>{
            const {movieNames , movieData} = action.payload;
            state.movieData = movieData;
            state.movieNames = movieNames;
        },
        removeMoviesData : (state) =>{
            state.movieData = null;
            state.movieNames = null;
        },
        addSearchStatus : (state,action) => {
            state.isSearched = action.payload;
        }
    }
});

export const {toggleGptSearchView,addMoviesData,removeMoviesData,addSearchStatus} = gptSlice.actions;

export default gptSlice.reducer;

