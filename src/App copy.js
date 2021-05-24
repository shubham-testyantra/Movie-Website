import "./App.css";

import React, { useState, useEffect } from "react";

// import Home from "./components/Home";
import Movie from "./components/Movie";
// var keyM = "http://www.omdbapi.com/?apikey=f056e2f7";

// const newAPI ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page1";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const apiKEY = `http://www.omdbapi.com/?s=Star&apikey=7f718266`;
  const formSubmit = (e) => {
    e.preventDefault();
    fetch(apiKEY)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.Search);
      });
  };
  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
    // console.log(setSearchTerm);
  };

  useEffect(() => {
    fetch(apiKEY)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.Search);
      });
  }, []);

  return (
    <>
      <div className="mb-5">
        <nav className="navbar navbar-expand-lg navbar-dark py-2  navbar-main">
          <div className="container">
            <div className="col-3">
              <a className="navbar-brand py-2" href="/">
                <span className="logo-color">M</span>y
                <span className="logo-color">M</span>ovie
                <span className="logo-color">L</span>ibrary
              </a>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <div className="col-md-8 ">
                <form onSubmit={formSubmit} className="d-flex py-3">
                  <input
                    className="form-control  top-search"
                    type="search"
                    placeholder="Search for a movie, TV Show or celebrity that you are looking for"
                    aria-label="Search"
                    value={searchTerm}
                    onChange={handleOnChange}
                  />
                  <span className="search-icon position-relative">
                    <button className="btn  text-light" type="submit">
                      Search
                    </button>
                  </span>
                </form>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className=" movieContainer">
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)}
      </div>
    </>
  );
}

export default App;
