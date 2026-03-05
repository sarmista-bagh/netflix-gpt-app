import React from 'react'
import MovieList from '../secondaryContainer/MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainers = () => {
    const movies = useSelector((store) => store.movies);
    return (
        movies.nowPlayingMovies && (
            <div className='bg-black'>
                <div className='-mt-[260px] pl-3 relative z-10'>
                    <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
                    <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
                    <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
                    <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
                </div>

                {
                    /**
                     MoviesList - Popular
                     MovieCard *n
                     MovieList - Now Playing
                     MovieList - Trending
                     MovieList - Upcoming
                     */
                }
            </div>
        )
    );
};
export default SecondaryContainers;
