import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import HomePageAddBtn from "../components/HomePageAddBtn";
import SearchBar from "../components/SearchBar";
import NoteList from "../components/NoteList";
import { getActiveNotes } from "../utils/local-data";

function HomePage() {
  const [notes, setNotes] = useState(getActiveNotes());

  return (
    <div className="homepage">
      <SearchBar />
      <NoteList notes={notes} />
      <HomePageAddBtn />
    </div>
  );
}

export default HomePage;
