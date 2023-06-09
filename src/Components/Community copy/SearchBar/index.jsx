import React from "react";
import "./styles.css";
const SearchBar = ({
  formSubmit,
  value,
  handleSearchKey,
  clearSearch,
  handleLiveSearch,
}) => (
  <div className="searchBar-wrap">
    <form onSubmit={formSubmit}>
      <input
        type="text"
        placeholder="Search By Category"
        value={value}
        onChange={(event) => {
          handleSearchKey(event);

          // Call handleLiveSearch on every change

          handleLiveSearch(event);
        }}
      />

      {value && <span onClick={clearSearch}>X</span>}

      <button>Go</button>
    </form>
  </div>
);

export default SearchBar;
