import { useDispatch, useSelector } from "react-redux";
import { options } from "../constants/constant";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";


const useTopRatedMovies = () => {
    const dispatch = useDispatch();

    const topRatedMovies = useSelector((store)=>store.moviesSlice.topRated)

    const fetchMoviesData = async () => {
        const moviesData = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', options)
        const jsonData = await moviesData.json()

        // Adding movies data to movies slice
        dispatch(addTopRatedMovies(jsonData));
    }

    useEffect(() => {
        !topRatedMovies?.length &&  fetchMoviesData();
    }, [topRatedMovies])
}

export default useTopRatedMovies;