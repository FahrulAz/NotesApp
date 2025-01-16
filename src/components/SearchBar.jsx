import React from "react";
import PropTypes from "prop-types";

function SearchBar({ keyword, setKeyword }) {
  return (
    <input
      className="search-bar"
      type="text"
      placeholder="Search..."
      value={keyword}
      onChange={(e) => setKeyword(e.target.value)}
    />
  );
}

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  setKeyword: PropTypes.func.isRequired,
};

export default SearchBar;
