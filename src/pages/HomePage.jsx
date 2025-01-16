import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import HomePageAddBtn from "../components/HomePageAddBtn";
import SearchBar from "../components/SearchBar";

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") || "";
  const [notes, setNotes] = useState([]); // Assuming you have a state for notes

  const handleSearch = (newKeyword) => {
    setSearchParams({ keyword: newKeyword });
    // Filter notes based on the new keyword
    const filteredNotes = notes.filter((note) =>
      note.title.toLowerCase().includes(newKeyword.toLowerCase())
    );
    setNotes(filteredNotes);
  };

  return (
    <div className="homepage">
      <SearchBar keyword={keyword} setKeyword={handleSearch} />
      <HomePageAddBtn />
      <ul>
        {notes.map((note) => (
          <li key={note.id}>{note.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
