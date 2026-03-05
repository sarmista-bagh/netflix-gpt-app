import React from 'react'
import { IoPlayOutline } from "react-icons/io5";

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='pt-[20%] px-20 absolute text-white'>
            <h1 className='text-4xl font-bold'>{title}</h1>
            <p className="w-1/4 text-lg md:text-base mt-2">
                {overview}
            </p>


            <div className='flex gap-2 mt-3'>
                <button className='bg-white text-black p-2 px-8 text-lg rounded-lg flex hover:bg-opacity-80 '>
                    <IoPlayOutline size={30} className='font-bold' />
                    Play
                </button>
                <button className='bg-gray-600 text-white hover:bg-opacity-80 p-2 px-8 text-lg rounded-lg flex'>
                    More Info
                </button>
            </div>
        </div>
    )
}

export default VideoTitle;
