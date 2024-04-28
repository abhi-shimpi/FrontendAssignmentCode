import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addHindiMovies,addKanadaMovies ,addTamilMovies,addMalyalamMovies} from "../utils/moviesSlice";
import { useParams } from "react-router-dom";

const useLanguageWiseMovies = () => {
    const dispatch = useDispatch();
    const {langId} = useParams();
    // console.log(langId)

    const moviesData = useSelector((store) => {
        // Assuming you have a moviesSlice with language-specific data
        switch (langId) {
          case 'hi':
            return store.moviesSlice.hindiMovies;
          case 'ta':
            return store.moviesSlice.tamilMovies;
          case 'kn':
              return store.moviesSlice.kanadaMovies;
          case 'ml':
              return store.moviesSlice.malyalamMovies;
          default:
            return []; // Fallback to a default value
        }
      });
    

    const languageWiseActionsArray = {
        "hi" : (jsonData) => {
            dispatch(addHindiMovies(jsonData));
        },
        "kn" : (jsonData) => {
            dispatch(addKanadaMovies(jsonData));
        },
        "ta" : (jsonData) => {
            dispatch(addTamilMovies(jsonData));
        },
        "ml" : (jsonData) => {
            dispatch(addMalyalamMovies(jsonData));
        }
    }

    
    const fetchNowPlayingMovies = async () =>{
        const movies = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=009d356f2e927f0e77fc3ccfd395a7e5&with_original_language="+langId+"&page=1");
        const jsonData = await movies.json();
        // console.log(jsonData)

        languageWiseActionsArray[langId](JSON.parse(JSON.stringify(jsonData)));
    }

    const fetchtoRatedovies = async () =>{
        const movies = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=009d356f2e927f0e77fc3ccfd395a7e5&with_original_language="+langId+"&page=2");
        const jsonData = await movies.json();
        // console.log(jsonData)


        languageWiseActionsArray[langId](JSON.parse(JSON.stringify(jsonData)));
    }

    const fetchPopularMovies = async () =>{
        const movies = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=009d356f2e927f0e77fc3ccfd395a7e5&with_original_language="+langId+"&page=3");
        const jsonData = await movies.json();
        // console.log(jsonData)


        languageWiseActionsArray[langId](JSON.parse(JSON.stringify(jsonData)));
    }

    const fetchTopRatedMovies = async () =>{
        const movies = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=009d356f2e927f0e77fc3ccfd395a7e5&with_original_language="+langId+"&page=4");
        const jsonData = await movies.json();
        // console.log(jsonData)


        languageWiseActionsArray[langId](JSON.parse(JSON.stringify(jsonData)));
    }

    useEffect(()=>{
        // console.log("length",moviesData.length)
        !moviesData.length && fetchNowPlayingMovies();
        !moviesData.length&& fetchtoRatedovies();
        !moviesData.length&&fetchPopularMovies();
        !moviesData.length&&fetchTopRatedMovies();
    },[langId,moviesData])
}

export default useLanguageWiseMovies;