import React, { useContext } from "react";
import PropTypes from "prop-types";
import LanguageContext from "../contexts/LanguageContext";

function SearchBar({ keyword, setKeyword }) {
  const { language } = useContext(LanguageContext);

  return (
    <input
      className="search-bar"
      type="text"
      placeholder={language === "EN" ? "Search notes..." : "Cari catatan..."}
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
