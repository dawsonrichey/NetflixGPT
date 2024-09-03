import { useSelector } from "react-redux";
import MovieList from "./MovieList";


const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies); 
    console.log(movies);
    return (
        movies.nowPlayingMovies && (
        <div className="bg-black">
            <div className=" -mt-52 pl-12 relative z-20">
                <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
                <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
                <MovieList title={"Popular"} movies={movies.popularMovies} />
                {/* <MovieList title={"Upcoming"} movies={movies.upcomingMovies} /> */}
            </div>
        </div>
        )

    // <div>
        // {/* <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} /> */}

        // </div>
    );
};
export default SecondaryContainer; 