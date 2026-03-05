
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovie from '../hooks/usePopularMovie';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import Header from './Header';
import MainContainer from './MainContainer';

import SecondaryContainers from './SecondaryContainers';

const Browse = () => {

    //Basically this one line will take care of everything now amazing
    useNowPlayingMovies(); //This was fetchng the nowPlayingMovies and updating the store 
    usePopularMovie();  //similarly i am fetching the nowpopular movies and updating the store
    useUpcomingMovies();
    return (
        <div>
            <Header />
            <MainContainer />
            <SecondaryContainers />


            {/*
                MainContainer
                  -VideoBackground
                  -VideoTitle
                SecondaryContainer
                  -MovieList * n
                  -Cards * n  
            **/}
        </div>
    )
}

export default Browse;

