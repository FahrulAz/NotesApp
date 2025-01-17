import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import NoteList from "../components/NoteList";
import { getActiveNotes } from "../utils/local-data";
import HomePageAddBtn from "../components/HomePageAddBtn";

function HomePage() {
  const [notes, setNotes] = useState(getActiveNotes());
  const [keyword, setKeyword] = useState("");

  const filteredNotes = keyword
    ? notes.filter((note) =>
        note.title.toLowerCase().includes(keyword.toLowerCase())
      )
    : notes;

  return (
    <div className="homepage">
      <SearchBar keyword={keyword} setKeyword={setKeyword} />
      <NoteList notes={filteredNotes} />
      <HomePageAddBtn />
    </div>
  );
}

export default HomePage;
