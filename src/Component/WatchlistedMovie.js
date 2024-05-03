import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard';
import { callGetApi } from '../services/apiServices';
import { environment } from '../environments/environment';
import Header from './Header';
import { getUserDetails } from '../utils/sessionstorage/sessionstorage';
import ShimmerUi from './ShimmerUi';
import OverlappedLoader from './OverlappedLoader';

/* Component to display watchlisted movie */
function WatchlistedMovie() {
    const favouriteMovies = useSelector((store) => store.moviesSlice.favouriteMovies);
    const [watchlistedMovies, setWatchlistedMovies] = useState([]);
    const [isDataLoading, setIsDataLoading] = useState(false);
    const [loader, setLoader] = useState();

    const getWatchlistedMoviesData = () => {
        const userDetails = getUserDetails();
        const user = JSON.parse(userDetails);
        setIsDataLoading(true);
        callGetApi(`${environment.LOCALHOST_BACKEND_BASE_URL}/user/movies/${user?.uid}/watchlisted-movies`, {}).then(
            (response) => {
                const moviesData = response?.data || [];
                if (moviesData?.length) setWatchlistedMovies(moviesData);
                else setWatchlistedMovies([]);
                setIsDataLoading(false);
            },
            (error) => {
                console.log(error);
                setIsDataLoading(false);
            }
        )
    }
    useEffect(() => {
        getWatchlistedMoviesData();
    }, [favouriteMovies]);

    if (isDataLoading) {
        return (
            <>
                <Header />
                <ShimmerUi></ShimmerUi>
            </>
        )
    }

    return (
        <>
            <Header />
            <div className='pt-[120px] px-[30px] gap-3 sm:gap-8 bg-black h-[100vh] flex flex-wrap justify-center'>
                {
                    watchlistedMovies?.length ?
                        (watchlistedMovies.map((movie) => (
                            <MovieCard
                                imageId={movie.imageId}
                                movieId={movie.movieId}
                                overview={movie.overview}
                                rating={movie.rating}
                                title={movie.title}
                                showAddTo={false}
                                setLoader={setLoader}
                            >
                            </MovieCard>
                        ))) :
                        (
                            <div className='text-white text-3xl m-auto'>Oops! No items in List!</div>
                        )
                }
            </div>
            {loader && <OverlappedLoader status={true} size={50} />}
        </>
    )
}

export default WatchlistedMovie;