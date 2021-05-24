import React, { useState } from "react";

function Header(props) {
  return (
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="col-md-8 ">
              <form className="d-flex py-3">
                <input
                  className="form-control  top-search"
                  type="search"
                  placeholder="Search for a movie, TV Show or celebrity that you are looking for"
                  aria-label="Search"
                  value={props.value}
                  onChange={(e) => props.setSearchValue(e.target.value)}
                />
                <span className="search-icon ">
                  {/* <button className="btn  text-light" type="submit">
                    Search
                  </button> */}
                </span>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
