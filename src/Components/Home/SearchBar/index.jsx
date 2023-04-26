import React from 'react';
import './styles.css';

const SearchBar = ({ formSubmit, value, handleSearchKey, clearSearch}) => (
  <div className='searchBar-wrap'>
    <form onSubmit={formSubmit}>
      <input
        type='text'
        placeholder='Search By Category'
        value={value}
        onChange={(event) => {
          handleSearchKey(event);

          // Call handleLiveSearch on every change

          // handleLiveSearch(event);
        }} 
      />
      {value && <button onClick={clearSearch}>X</button>}
      <button>Go</button>
    </form>
  </div>
);

export default SearchBar;
