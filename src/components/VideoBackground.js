
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

//import { wait } from '@testing-library/user-event/dist/utils';

const VideoBackground = ({ movieId }) => {
    //To get trailer video need to use useSelector 

    const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

    useMovieTrailer(movieId);

    return (
        <div className='w-screen'>
            <iframe
                className='w-screen aspect-video'
                src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1"} //put the optional chain otherwise if the trailer video will be null,this will throw an error
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            >
            </iframe>
        </div>
    )
};

export default VideoBackground;
