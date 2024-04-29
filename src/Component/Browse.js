import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSearch from './GptSearch';
import Header from "./Header";
import useWatchListMovie from '../hooks/useWatchListMovie';

/* Main body of app */
function Browse() {
  /* Custom hooks */
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useWatchListMovie();
  
  const gptSearch = useSelector((store) => store.gptSlice.gptSearch);

  return (
    <>
      {
        gptSearch ?
          (<GptSearch />) :
          (
            <>
              <div className='bg-black'>
                <Header/>
                <MainContainer />
                <SecondaryContainer />
              </div >
            </>
          )
      }

    </>
  )
}

export default Browse


/* 
-Main Container 
  -Video Background 
  -VideoTitle
-SecondaryContainer
  -MoviesList * n
    -MovieCards * n
*/