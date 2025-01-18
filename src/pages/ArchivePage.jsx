import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import NoteList from "../components/NoteList";
import { getArchivedNotes } from "../utils/local-data";
import HomePageAddBtn from "../components/HomePageAddBtn";

function HomePage() {
  const [notes, setNotes] = useState(getArchivedNotes());
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") || "";

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
      <h1>Archive Notes</h1>
      <SearchBar keyword={keyword} setKeyword={handleKeywordChange} />
      <NoteList notes={filteredNotes} />
      <HomePageAddBtn />
    </div>
  );
}

export default HomePage;
