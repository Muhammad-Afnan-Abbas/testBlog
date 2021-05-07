import React, { Component } from "react";
import "./Css/searchBar.css";
const SearchBar = (props) => {
  return (
    <>
      <i class="fa fa-search sClass"></i>
      <input
        type="search"
        className="search"
        placeholder={props.placeholder}
        onChange={props.handleChange}
      ></input>
    </>
  );
};

export default SearchBar;
