import React, { useRef } from "react";
import MovieCard from "./MovieCard";

export default function CustomCarousel({ movies }) {
  const carouselRef = useRef(null);

  const scrollToNext = () => {
    carouselRef.current.scrollBy({
      left: window.innerWidth,
      behavior: "smooth",
    });
  };

  const scrollToPrev = () => {
    carouselRef.current.scrollBy({
      left: -window.innerWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="custom-carousel">
      <button className="carousel-button prev" onClick={scrollToPrev}>
        &lt;
      </button>
      <div className="carousel-container" ref={carouselRef}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <button className="carousel-button next" onClick={scrollToNext}>
        &gt;
      </button>
    </div>
  );
}
