import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";




  const usePopularMovies = () => {
    const dispatch = useDispatch();
    const popularMovies = useSelector((store) => store.movies.popularMovies);
  
    const getPopularMovies = useCallback(async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?page=1",
        API_OPTIONS
      );
      const json = await data.json();
      console.log("json.results", json.results);
      dispatch(addPopularMovies(json.results));
    }, [dispatch]);
  
    useEffect(() => {
      if (!popularMovies) {
        getPopularMovies();
      }
    }, [getPopularMovies, popularMovies]);
  };
  
  export default usePopularMovies;