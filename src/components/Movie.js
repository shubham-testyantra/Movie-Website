import React from "react";

const Movie = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => {
        return (
          <div className="movie-container  ">
            <div className="movie" key={movie.imdbID}>
              <img
                src={
                  movie.Poster === "N/A"
                    ? "https://www.peepultree.in/_next/static/images/noimage-94c0c57d53b1ee9771925957f29d149c.png"
                    : movie.Poster
                }
                alt={movie.Title}
              />
              <div className="movie-title">{movie.Title}</div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Movie;
