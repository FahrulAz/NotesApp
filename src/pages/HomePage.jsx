import React, { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import NoteList from "../components/NoteList";
import { getActiveNotes } from "../utils/local-data";
import HomePageAddBtn from "../components/HomePageAddBtn";
import LanguageContext from "../contexts/LanguageContext";

function HomePage() {
  const { language } = useContext(LanguageContext);
  const [notes] = React.useState(getActiveNotes());
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
    <div className="homepage">
      <h2>{language === "EN" ? "Active Notes" : "Catatan Aktif"}</h2>
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

export default HomePage;
