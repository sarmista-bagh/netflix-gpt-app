import { createSlice } from "@reduxjs/toolkit";



const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        upcomingMovies: null,
        trailerVideo: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addUpComingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        }
    },
});
export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies, addUpComingMovies } = moviesSlice.actions;
//here exported action addNowPlayingMovies
export default moviesSlice.reducer;