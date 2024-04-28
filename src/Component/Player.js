import React from 'react'
import useMovieTrailer from '../hooks/useMovieTrailer';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { left_arrow } from '../constants/constant';
import { addMovieVideo } from '../utils/moviesSlice';

function Player() {
    const type = "movie";
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const prevRoute = useSelector(store => store.moviesSlice.movieRoute);
    useMovieTrailer(id, type);
    const videoTrailerKey = useSelector((store) => store.moviesSlice.movieVideo);

    const handleVideoClose = () => {
        navigate(".." + prevRoute);
        dispatch(addMovieVideo(null));
    }

    return (
        <div>
            <div className='absolute top-12 left-16 z-30 cursor-pointer' onClick={handleVideoClose}>
                <img className='image' src={left_arrow} alt='leftArrowImage'></img>
            </div>
            <div className=''>
                <iframe
                    className='absolute w-full aspect-video h-full'
                    src={"https://www.youtube.com/embed/" +
                        videoTrailerKey +
                        "?&autoplay=1"
                    }
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen>
                </iframe>
            </div>
        </div>
    )
}

export default Player