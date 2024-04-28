import React from 'react';
import { useSelector } from 'react-redux';
import MoviesList from "./MoviesList";
import ShimmerUi from './ShimmerUi';

function GptSearchSuggetions() {
  const isSearched = useSelector(store => store.gptSlice.isSearched)
  const movieData = useSelector((store) => store.gptSlice.movieData)
  const movieNames = useSelector((store) => store.gptSlice.movieNames)

  if (isSearched) {
    return (
      <div className='bg-black w-[90%] h-[67%] m-auto overflow-y-auto left-0 right-0 absolute top-[30%]'>
        <ShimmerUi />
      </div>
    )
  }

  if(!movieNames?.length) {
    return <></>
  }

  return (
    <div className='bg-black w-[90%] mt-9 sm:mt-1 overflow-y-auto h-[67%] m-auto left-0 right-0 absolute top-[30%] overflow-x-auto bg-opacity-80 rounded-xl scrollbar-hide'>
      {
        movieNames?.map((movieName, index) => {
          return <MoviesList key={movieName} title={movieName} moviesData={movieData[index]} />
        })
      }
    </div>
  )
}

export default GptSearchSuggetions