import React from 'react';
import MoviesList from "./MoviesList";
import { useSelector } from 'react-redux';
import useLanguageWiseMovies from "../hooks/useLanguageWiseMovies";
import { useParams } from 'react-router-dom';
import Header from './Header';
import ShimmerUi from './ShimmerUi';

/* Displays all language wise movies */
function LanguageWiseMovies() {
  useLanguageWiseMovies();

  const {langId} = useParams();

  const moviesData = useSelector((store) => {
    // Assuming I have a moviesSlice with language-specific data
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
        return []; 
    }
  });

  if(!Object.keys(moviesData)?.length) {
    return <ShimmerUi></ShimmerUi>
}

  return (
    <div className='bg-black'>
      <Header/>
      <div className='pt-[100px]'>
        <MoviesList title={"Now Playing Movies"} moviesData={moviesData[0]?.results} />
        <MoviesList title={"Popular Movies"} moviesData={moviesData[1]?.results} />
        <MoviesList title={"Top Rated Movies"} moviesData={moviesData[2]?.results} />
        <MoviesList title={"Blockbuster Movies"} moviesData={moviesData[3]?.results} />
      </div>
    </div>
  )
}

export default LanguageWiseMovies