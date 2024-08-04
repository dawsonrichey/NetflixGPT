import { useSelector } from "react-redux";
import MovieList from "./MovieList";


const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies); 
    console.log(movies);
    return (
        movies.nowPlayingMovies && (
        // <div className="bg-black">
            <div className="pl-12 relative z-20 bg-black">
                <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
                {/* <MovieList title={"Popular"} movies={movies.popularMovies} /> */}
                {/* <MovieList title={"Top Rated"} movies={movies.topRatedMovies} /> */}
                {/* <MovieList title={"Upcoming"} movies={movies.upcomingMovies} /> */}
            </div>
        // </div>
        )

    // <div>
        // {/* <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} /> */}

        // </div>
    );
};
export default SecondaryContainer; 