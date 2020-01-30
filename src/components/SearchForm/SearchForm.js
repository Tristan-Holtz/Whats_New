import React from 'react';
import './SearchForm.css';

const SearchForm = props => {
  return (
    <nav className="nav">
      <input className="nav-search"></input>
      <button onclick={props.runSearch}>SEARCH</button>
    </nav>
  );
};

export default SearchForm;
