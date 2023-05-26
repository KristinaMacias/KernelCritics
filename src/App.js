import React, { useState, createContext, useEffect } from "react";
import "./App.css";
import { fetchTrendingMovies } from "./rest/TMDBAPI";
import { fetchReviews } from "./rest/ReviewAPI";
import TrendingMovies from "./components/pages/TrendingMovies";

export const MovieContext = createContext();
function App() {
  // state for all the movies from api
  const [trendingMovies, setTrendingMovies] = useState([]);

  // state for all the movie reviews
  const [allReviews, setAllReviews] = useState([]);

  //useEffect hook to update both states 
  useEffect(() => {
    const fetchMovieData = async () => {
      const trendingMovies = await fetchTrendingMovies(); //calling api utility function to get trending movies
      setTrendingMovies(trendingMovies); //updating my movie state

      const movieReviews = await fetchReviews(); //calling my api utility function to get movie reviews
      setAllReviews(movieReviews); //updating my review state
    }
    fetchMovieData();
  }, [])


  return (
    <div className="App">
      {/* Pages */}
      <MovieContext.Provider value={{ allReviews, setAllReviews, trendingMovies, setTrendingMovies }}>
        <TrendingMovies />
      </MovieContext.Provider>
    </div>
  );
}

export default App;
