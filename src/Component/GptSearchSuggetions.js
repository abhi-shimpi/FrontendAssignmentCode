import React from 'react';
import { useSelector } from 'react-redux';
import ShimmerUi from './ShimmerUi';
import MovieCard from './MovieCard';

function GptSearchSuggetions() {
  const isSearched = useSelector(store => store.gptSlice.isSearched)
  const moviesData = useSelector((store) => store.gptSlice.movieData)
  if (isSearched) {
    return (
      <div className='bg-black w-[90%] h-[67%] m-auto overflow-y-auto left-0 right-0 absolute top-[30%]'>
        <ShimmerUi />
      </div>
    )
  }

  if(!moviesData?.length) {
    return <></>
  }

  return (
    <div className='bg-black  flex flex-wrap gap-7 p-5 w-[90%] mt-9 sm:mt-1 overflow-y-auto h-[67%] m-auto left-0 right-0 absolute top-[30%] overflow-x-auto bg-opacity-80 rounded-xl scrollbar-hide'>
      {
        moviesData?.map((movie) => (
          <MovieCard
            key={movie.id} 
            movieId={movie.id}
            imageId={movie.poster_path}
            title={movie.original_title}
            rating={movie.vote_average}
            overview={movie.overview}
            showAddTo={true}
          />
        ))
      }
    </div>
  )
}

export default GptSearchSuggetions