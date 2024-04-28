import React from 'react'
import useMovieTrailer from '../hooks/useMovieTrailer'
import { useSelector } from 'react-redux';

function VideoBackground({movieId}) {
  const type = "trailer"
  useMovieTrailer(movieId,type);
  const videoTrailerKey = useSelector((strore)=>strore.moviesSlice.videoTrailer);
 
  return (
    <div className='pt-10 md:pt-[3.25rem] xl:pt-[0rem]'>
        <iframe 
            className='w-full aspect-video '
            src={"https://www.youtube.com/embed/"+
            videoTrailerKey +
            "?&autoplay=1"+
            "&mute=1"
            } 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen>
        </iframe>
    </div>
  )
}

export default VideoBackground