import { useDispatch, useSelector } from "react-redux";
import { options } from "../constants/constant";
import { addFavouriteMovies, addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { getUserDetails } from "../utils/sessionstorage/sessionstorage";
import { callGetApi } from "../services/apiServices";
import { environment } from "../environments/environment";


const useWatchListMovie = () => {
    const dispatch = useDispatch();

    const fetchWatchlistedMoviesData = async () => {
        const userDetails = getUserDetails();
        const user = JSON.parse(userDetails);
        callGetApi(`${environment.LOCALHOST_BACKEND_BASE_URL}/user/movies/${user?.uid}/watchlisted-movies`, {}).then(
            (response) => {
                const moviesData = response?.data || [];
                dispatch(addFavouriteMovies(moviesData));
            },
            (error) => {
                console.log(error);
            }
        )
    }

    useEffect(() => {
        fetchWatchlistedMoviesData();
    }, [])
}

export default useWatchListMovie;