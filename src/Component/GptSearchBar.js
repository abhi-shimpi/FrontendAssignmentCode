import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { constants } from "../constants/languageConstants";
import openai from '../utils/openai';
import { login_bg_image, options } from '../constants/constant';
import { addMoviesData, addSearchStatus } from '../utils/gptSlice';

function GptSearchBar() {

  const langKey = useSelector((store) => store.configureSlice.language);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  //fetch data of movie by movie name
  //This function returns a promise 
  const fetchMoviesData = async (movieName) => {
    const movieData = await fetch("https://api.themoviedb.org/3/search/multi?query=" + movieName + "&include_adult=false&language=en-US&page=1", options);
    const jsonData = await movieData.json();
    return jsonData.results;
  }


  const handleGptSearch = async() => {
    dispatch(addSearchStatus(true));

    const movieData = await fetchMoviesData(searchText.current.value);

    dispatch(addMoviesData(movieData))
    dispatch(addSearchStatus(false));
  }


return (
  <>
    <div className='absolute flex flex-col sm:flex-row gap-2 items-center z-20 w-[90%] sm:w-[50%] p-6 m-auto left-0 right-0 top-[15%] bg-black rounded-lg' onSubmit={(e) => { e.preventDefault() }}>
      <input ref={searchText} className='w-[100%] sm:w-[80%] p-4 mr-3 rounded-md' placeholder={constants[langKey]?.searchPlaceholder}></input>
      <button className='py-2 px-2 sm:py-4 w-[30%] sm:w-[20%] md:w-[30%] sm:px-8 bg-red-600 text-white rounded-md' onClick={handleGptSearch}>{constants[langKey]?.search}</button>
    </div>
    <img className='md:w-full h-[100vh] object-cover relative' src={login_bg_image} alt="SearchPageImage"></img>
  </>
)
}

export default GptSearchBar