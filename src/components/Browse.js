
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import Header from './Header';
import MainContainer from './MainContainer';

import SecondaryContainers from './SecondaryContainers';

const Browse = () => {

    //Basically this one line will take care of everything now amazing
    useNowPlayingMovies();
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

