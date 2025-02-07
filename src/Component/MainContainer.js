import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

/* Component for video and title above video */
const MainContainer = () => {

  const movieDetails = useSelector((store) => store.moviesSlice);

  if (!movieDetails) return;

  const title = movieDetails?.nowPlayingMovies[0]?.results[2]?.title;
  const overview = movieDetails?.nowPlayingMovies[0]?.results[2]?.overview;
  const id = movieDetails?.nowPlayingMovies[0]?.results[2]?.id;
  return (
    <div >
      <VideoTitle title={title} overview={overview} movieId={id} />
      <VideoBackground movieId={id} />
    </div>
  )
}

export default MainContainer;