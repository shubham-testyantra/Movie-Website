import "./App.css";

import React, { useState, useEffect } from "react";

import Movie from "./components/Movie";
import Header from "./components/Header";
// var keyM = "http://www.omdbapi.com/?apikey=f056e2f7";

// const newAPI ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page1";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

    const response = await fetch(url);
    const responseJSON = await response.json();

    console.log(responseJSON);
    if (responseJSON.Search) {
      setMovies(responseJSON.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <>
      <div className="">
        <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className=" movieContainerBody">
        <Movie movies={movies} />
      </div>
    </>
  );
}

export default App;
