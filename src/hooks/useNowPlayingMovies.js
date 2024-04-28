import { useDispatch, useSelector } from "react-redux";
import { options } from "../constants/constant";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";


const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const nowPlayingMovies = useSelector((store)=>store.moviesSlice.nowPlayingMovies);

    const fetchMoviesData = async () => {
        const moviesData = await fetch('https://api.themoviedb.org/3/movie/now_playing?&page=1', options)
        const jsonData = await moviesData.json()
        // console.log(jsonData);

        // Adding movies data to movies slice
        dispatch(addNowPlayingMovies(jsonData));
    }

    useEffect(() => {
        !nowPlayingMovies?.length && fetchMoviesData();
    }, [nowPlayingMovies])
}

export default useNowPlayingMovies;