import React from 'react';
import MovieCard from "./MovieCard";
import "../index.css"

function MoviesList({ title, moviesData }) {
  const handleMouseEnter = () => {
    // setIsMouseEnter(true);
  }
  return (
    <>
      <h1 className='text-white px-[50px] sm:px-[100px] text-lg md:text-2xl font-bold my-3'>{title}</h1>
      <div className='px-[50px] sm:px-[100px] w-[100%] py-4 overflow-x-auto overflow-y-hidden scrollbar-hide border-green-800'>
        <div className='flex w-fit  gap-4 z-0 relative h-fit' onMouseEnter={handleMouseEnter}>
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
      </div>
    </>
  )
}

export default MoviesList