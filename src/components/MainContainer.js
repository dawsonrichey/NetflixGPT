import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
    const movies = useSelector(store=>store.movies?.nowPlayingMovies);
    console.log(movies);
    if(!movies) return;

    const mainMovie = movies[0];
    // console.log(mainMovie);

    const { original_title, overview, id } = mainMovie;
    console.log("hey");
    console.log(mainMovie);
    // console.log(mainMovie.original_title);
    // console.log(original_title, overview, id, poster_path);

    return (
        <div>
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieId={id} />
        </div>
    );
};
export default MainContainer;