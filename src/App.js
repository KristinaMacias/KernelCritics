import React, { useState, createContext, useEffect } from "react";
import "./App.css";
import { fetchTrendingMovies } from "./rest/TMDBAPI";
import { fetchReviews } from "./rest/ReviewAPI";
import TrendingMovies from "./components/pages/TrendingMovies";

export const ReviewContext = createContext();
function App() {
  // state for all the movies from api
  const [trendingMovies, setTrendingMovies] = useState([]);

  // state for all the movie reviews
  const [allReviews, setAllReviews] = useState([]);

  //useEffect hook to update both states 
  useEffect(() => {
    const fetchMovieData = async () => {
      const trendingMovies = await fetchTrendingMovies();
      setTrendingMovies(trendingMovies);

      const movieReviews = await fetchReviews();
      setAllReviews(movieReviews)
      
    }

    fetchMovieData();
  }, [])


  return (
    <div className="App">
      {/* Pages */}
      <ReviewContext.Provider value={{ allReviews, setAllReviews, trendingMovies, setTrendingMovies }}>
        <TrendingMovies />
      </ReviewContext.Provider>
    </div>
  );
}

export default App;
