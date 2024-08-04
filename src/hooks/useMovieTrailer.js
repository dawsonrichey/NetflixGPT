import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addTrailerVideo } from '../utils/movieSlice';

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const getMovieVideos = async () => {
        //   const data = await fetch("https://api.themoviedb.org/3/movie/533535/videos?language=en-US", API_OPTIONS);
          const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US", API_OPTIONS);
          const json = await data.json();
          console.log("dawwson",json);
  
          const filterData = json.results?.filter(video => video.type === "Trailer");
          if(filterData !== undefined){
            const trailer = filterData?.length ? filterData[0] : json.results[0];
            // console.log("trailer" + trailer);
            dispatch(addTrailerVideo(trailer));
          }

      };
      useEffect(() => {
          getMovieVideos();
      }, []);
}

export default useMovieTrailer;