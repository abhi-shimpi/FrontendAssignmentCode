import React from 'react'
import { useNavigate } from 'react-router-dom';

function VideoTitle({ title, overview, movieId }) {
    const navigate = useNavigate();

    const handlePlay = () => {
        navigate(`/player/${movieId}`)
    }

    return (
        <div className='absolute pt-[400px] px-[50px] md:px-[100px] md:pb-[100px] text-white bg-gradient-to-tr from-black w-full aspect-video'>
            <div className='absolute top-[154px] sm:top-[230px] md:top-[15rem] lg:top-[400px]'>
                <h2 className='md:text-lg lg:text-5xl font-bold mb-4'>{title}</h2>
                <p className='hidden md:block md:text-sm w-[30%] mb-4' >{overview}</p>
                <div className='flex gap-3'>
                    <button onClick={handlePlay} className='py-1 px-3 sm:py-2 md:px-3 xl:px-5 rounded-md bg-white text-black flex gap-2 items-center hover:bg-opacity-60'>
                        <img className='w-4 md:w-3 xl:w-5' src={require("../assets/images/video_resume.png")} alt='resumeImage'></img>
                        <span className='text-xs md:text-sm xl:text-lg'>Play</span>
                    </button>
                    <button className='hidden sm:flex py-2 px-5 rounded-md bg-[#b1adad] text-white bg-opacity-50  gap-2 items-center'>
                        <img className='w-3 md:w-4 xl:w-5' src={require("../assets/images/more_info.png")} alt='infoImage'></img>
                        <span className='text-xs md:text-sm xl:text-lg'>More Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default VideoTitle