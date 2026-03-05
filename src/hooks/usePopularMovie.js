import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesslice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";


const usePopularMovie = () => {

    //Fetch Data from TMDB API and update store
    const dispatch = useDispatch();
    const getPopularMovie = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
        const json = await data.json();
        console.log("Popular Movies:", json.results);
        dispatch(addPopularMovies(json.results)); //Getting 200 is actually a good thing ✅. It means your API request worked successfully.
    };

    useEffect(() => {
        getPopularMovie();
    }, []);



};

export default usePopularMovie;