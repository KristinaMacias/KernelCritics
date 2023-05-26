import React, { useContext } from "react";
import { MovieContext } from "../../App";
import MovieCard from "../MovieCard";

export default function TrendingMovies() {
  //use context
  const { trendingMovies } = useContext(MovieContext);
  return (
    console.log(trendingMovies.results),
    (
      <header>
        <h1>Trending Movies</h1>
        {/* map movies to MovieCard component */}
        {/* check for null, undefined or empty array */}
        {trendingMovies.results &&
          trendingMovies.results.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
          ))}
      </header>
    )
  );
}
