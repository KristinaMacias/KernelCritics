import React from "react";

export default function MovieCard({ movie }) {
  return (
    <div className="card">
      <div className="card-background">
        <img
          className="card-image"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.original_title}
        />
      </div>
      <div className="card-content">
        <h2 className="card-title">{movie.title}</h2>
        <p className="card-overview">{movie.overview}</p>
        <p className="card-date">Release Date: {movie.release_date}</p>
      </div>
    </div>
  );
}
