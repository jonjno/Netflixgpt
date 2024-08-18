import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovie && (
      <div className='bg-black'>
        <div className='-mt-10 relative z-20'>
          <MovieList title={"Nowplaying"} movies={movies.nowPlayingMovie} />
          <MovieList title={"popular"} movies={movies.popularMovies} />
          <MovieList title={"Horror"} movies={movies.nowPlayingMovie} />
          <MovieList title={"Upcomming"} movies={movies.nowPlayingMovie} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
