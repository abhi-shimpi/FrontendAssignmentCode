import React from 'react'
import { IMG_CDN_URL, star_img, add_btn, remove_btn, play_btn, TMDB_API_CONFIG } from '../constants/constant'
import video from "../assets/dummy_trailer.mp4"
import { useDispatch, useSelector } from 'react-redux'
import { addFavouriteMovies, removeFavouriteMovies } from "../utils/moviesSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { callPostApi } from '../services/apiServices';
import { environment } from '../environments/environment';
import { getUserDetails } from '../utils/sessionstorage/sessionstorage';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';

function MovieCard({ imageId, movieId, title, rating, overview }) {
	const watchlistedMovies = useSelector((store) => store.moviesSlice.favouriteMovies);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const userDetails = getUserDetails();
	const user = JSON.parse(userDetails) || '{}';

	const notify = () => {
		toast.success('Movie added to watchlist', {
			position: toast.POSITION.TOP_RIGHT,
			autoClose: 1000,
			style: {
				background: 'green',
				color: 'white'
			},
		});
	};
	console.log(watchlistedMovies?.find((movie) => {
		return movie.movieId === movieId ? false : true;
	}));
	const addToFavourite = () => {
		const body = {
			imageId: imageId,
			title: title,
			rating: rating,
			overview: overview,
			movieId: movieId,
			userId: user?.uid
		}

		callPostApi(`${environment.LOCALHOST_BACKEND_BASE_URL}/user/movies/add-movie-to-watchlist`, body).then(
			(response) => {
				notify();
				dispatch(addFavouriteMovies([...watchlistedMovies, body]));
			},
			(error) => {
				console.log(error);
			}
		)
	}

	const removeFromFavourite = () => {
		const body = {
			movieId: movieId,
			userId: user?.uid
		}

		callPostApi(`${environment.LOCALHOST_BACKEND_BASE_URL}/user/movies/remove/watchlisted-movie`, body).then(
			(response) => {
				dispatch(removeFavouriteMovies(imageId));
				toast.done('Movie removed from favourites', {
					position: toast.POSITION.TOP_RIGHT,
					autoClose: 1000,
					style: {
						background: 'red',
						color: 'white'
					},
				});
			},
			(error) => {
				console.log(error);
			}
		)
	}

	const handleCardClick = () => {
		navigate(`/player/${movieId}`)
	}

	return (
		<>
			{
				imageId ?
					(
						<div className='container-card' >
							<div className='card-container'>
								{watchlistedMovies.some(movie => movie.movieId === movieId) ? console.log("true"): <></>}
								<img className='w-full h-full' src={IMG_CDN_URL + imageId} alt='movieImage'></img>
							</div>
							<div className='p-5 card-with-movie bg-black'>
								<video className='w-full' autoPlay muted>
									<source src={video} type="video/mp4" />
									Your browser does not support the video tag.
								</video>
								<div className='text-white flex justify-between'>
									<h2 className=' font-bold'>{title}</h2>
									<div className='flex items-center gap-2'>
										<div className='w-4 h-4'>
											<img className='w-full h-full' src={star_img} alt='starImage'></img>
										</div>
										<span>{rating}</span>
									</div>
								</div>
								<div className='flex gap-8 py-3 items-center text-white'>
									<div className='w-7 h-7' onClick={handleCardClick}><img className='w-full h-full cursor-pointer' src={play_btn} alt='PlayButtonImage'></img></div>
									{
										watchlistedMovies.some(movie => movie.movieId === movieId) ?
											(
												<div className='pl-[65px] text-sm flex gap-2 items-center' onClick={() => {
													removeFromFavourite()
												}}>
													<span>Remove</span>
													<div className='w-5 h-5'><img className='w-full h-full cursor-pointer' src={remove_btn} alt='removeButtonImage'></img></div>
												</div>
											) :
											(
												<div className='pl-[72px] text-sm flex gap-2 items-center'>
													<span>Add To</span>
													<div className='w-5 h-5'><img className='w-full h-full cursor-pointer' src={add_btn} alt='addButtonImage' onClick={(e) => {
														addToFavourite();
													}}></img></div>
												</div>
											)


									}
								</div>
								<div className='text-white text-xs h-[100px] overflow-y-scroll scrollbar-hide text-justify'>
									{overview}
								</div>
							</div>
						</div>
					) :
					(
						<div>
							<div className='w-[160px] h-[240px] bg-slate-500 rounded-md text-white flex justify-center items-center m-auto flex-col'>
								<p>Oops!</p><span> Image not found</span>
							</div>
						</div>
					)
			}
		</>
	)
}

export default MovieCard