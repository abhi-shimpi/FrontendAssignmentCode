import { useDispatch, useSelector } from "react-redux";
import { options } from "../constants/constant";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";


const useUpcomingMovies = () => {
    const dispatch = useDispatch();

    // Memoization
    const upcomingMovies = useSelector((store)=>store.moviesSlice.upcoming)
    
    const fetchMoviesData = async () => {
        const moviesData = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', options)
        const jsonData = await moviesData.json()

        // Adding movies data to movies slice
         dispatch(addUpcomingMovies(jsonData));
    }

    useEffect(() => {
        !upcomingMovies?.length && fetchMoviesData();
    }, [upcomingMovies])
}

export default useUpcomingMovies;