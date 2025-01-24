import React, { useState, useEffect, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import NoteList from "../components/NoteList";
import { getArchivedNotes } from "../utils/local-data";
import HomePageAddBtn from "../components/HomePageAddBtn";
import PropTypes from "prop-types";
import LanguageContext from "../contexts/LanguageContext";

function HomePage() {
  const [notes, setNotes] = useState(getArchivedNotes());
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") || "";
  const { language } = useContext(LanguageContext);

  const filteredNotes = keyword
    ? notes.filter((note) =>
        note.title.toLowerCase().includes(keyword.toLowerCase())
      )
    : notes;

  const handleKeywordChange = (newKeyword) => {
    setSearchParams({ keyword: newKeyword });
  };

  return (
    <div className="archivepage">
      <h1>{language === "EN" ? "Archive Notes" : "Arsip Catatan"}</h1>
      <SearchBar keyword={keyword} setKeyword={handleKeywordChange} />
      {filteredNotes.length > 0 ? (
        <NoteList notes={filteredNotes} />
      ) : (
        <p className="empty">
          {language === "EN" ? "Notes is empty" : "Catatan kosong"}
        </p>
      )}
      <HomePageAddBtn />
    </div>
  );
}

HomePage.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default HomePage;
