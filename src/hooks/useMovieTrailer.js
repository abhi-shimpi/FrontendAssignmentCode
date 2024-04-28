import { useEffect} from "react";
import { options } from "../constants/constant";
import { useDispatch, useSelector } from "react-redux";
import { addMovieVideo, addVideoTrailer } from "../utils/moviesSlice";

const useMovieTrailer = (movieId,type) =>{
    const dispatch = useDispatch();

    const videoTrailer = useSelector((store)=>store.moviesSlice.videoTrailer);
    const movieVideo = useSelector((store)=>store.moviesSlice.movieVideo);

    const fetchMovieVideo = async() => {
        const videoData = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US", options);
        const jsonData = await videoData?.json();

        const movieTrailer = jsonData?.results?.filter((movie)=>{
            return movie?.type === "Trailer";
        })
        
        if(type === "trailer") movieTrailer ? dispatch(addVideoTrailer(movieTrailer[0]?.key)) : dispatch(addVideoTrailer(jsonData.results[0]));
        if(type === "movie")movieTrailer?.length ? dispatch(addMovieVideo(movieTrailer[0]?.key)) : dispatch(addMovieVideo(null));
    }

    useEffect(()=>{
        if(!movieId)return;
        if(type === "trailer") !videoTrailer && fetchMovieVideo();
        if(type === "movie") !movieVideo && fetchMovieVideo();

    },[movieId,type,videoTrailer,movieVideo]);
}

export default useMovieTrailer;