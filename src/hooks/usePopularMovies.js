import { useDispatch, useSelector } from "react-redux";
import { options } from "../constants/constant";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";


const usePopularMovies = () => {
    const dispatch = useDispatch();
    
    const popularMovies = useSelector((store)=>store.moviesSlice.popular)

    const fetchMoviesData = async () => {
        const moviesData = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', options)
        const jsonData = await moviesData.json()
        // console.log(jsonData);

        // Adding movies data to movies slice
       dispatch(addPopularMovies(jsonData));
    }

    useEffect(() => {
        !popularMovies?.length && fetchMoviesData();
    }, [popularMovies])
}

export default usePopularMovies;