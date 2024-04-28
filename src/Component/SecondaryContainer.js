import React from 'react';
import MoviesList from './MoviesList';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';

function SecondaryContainer() {
    const moviesData = useSelector((store) => store.moviesSlice);
    // console.log("moviesData",moviesData)

    return (
        <>
            {
                moviesData?.nowPlayingMovies &&
                <div className='bg-black mt-0'>
                    <div className='lg:-mt-35 xl:-mt-52  z-10 relative w-full'>
                        <MoviesList title={"Now Playing Movie"} moviesData={moviesData?.nowPlayingMovies[0]?.results} />
                        <MoviesList title={"Popular"} moviesData={moviesData?.popular[0]?.results} />
                        <MoviesList title={"Top Rated"} moviesData={moviesData?.topRated[0]?.results} />
                        <MoviesList title={"Upcoming"} moviesData={moviesData?.upcoming[0]?.results} />
                        {/* <MoviesList type={"Animie"} moviesData={moviesData?.nowPlayingMovies[0]?.results} />
                        <MoviesList type={"Most Popular"} moviesData={moviesData?.nowPlayingMovies[0]?.results} /> */}
                    </div>
                </div>
            }
        </>
    )
}

export default SecondaryContainer