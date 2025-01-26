// import React, { useContext } from "react";
// import { useSearchParams } from "react-router-dom";
// import SearchBar from "../components/SearchBar";
// import NoteList from "../components/NoteList";
// import { getActiveNotes } from "../utils/local-data";
// import HomePageAddBtn from "../components/HomePageAddBtn";
// import LanguageContext from "../contexts/LanguageContext";

// function HomePage() {
//   const { language } = useContext(LanguageContext);
//   const [notes] = React.useState(getActiveNotes());
//   const [searchParams, setSearchParams] = useSearchParams();
//   const keyword = searchParams.get("keyword") || "";

//   const filteredNotes = keyword
//     ? notes.filter((note) =>
//         note.title.toLowerCase().includes(keyword.toLowerCase())
//       )
//     : notes;

//   const handleKeywordChange = (newKeyword) => {
//     setSearchParams({ keyword: newKeyword });
//   };

//   return (
//     <div className="homepage">
//       <h2>{language === "EN" ? "Active Notes" : "Catatan Aktif"}</h2>
//       <SearchBar keyword={keyword} setKeyword={handleKeywordChange} />
//       {filteredNotes.length > 0 ? (
//         <NoteList notes={filteredNotes} />
//       ) : (
//         <p className="empty">
//           {language === "EN" ? "Notes is empty" : "Catatan kosong"}
//         </p>
//       )}
//       <HomePageAddBtn />
//     </div>
//   );
// }

// export default HomePage;

import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import NoteList from "../components/NoteList";
import { getActiveNotes } from "../utils/network-data";
import HomePageAddBtn from "../components/HomePageAddBtn";
import LanguageContext from "../contexts/LanguageContext";

function HomePage() {
  const { language } = useContext(LanguageContext);
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") || "";

  useEffect(() => {
    async function fetchNotes() {
      setIsLoading(true);
      const { error, data } = await getActiveNotes();
      if (!error) {
        setNotes(data);
      } else {
        alert("Failed to fetch notes");
      }
      setIsLoading(false);
    }

    fetchNotes();
  }, []);

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
      <h1>{language === "EN" ? "Active Notes" : "Catatan Aktif"}</h1>
      <SearchBar keyword={keyword} setKeyword={handleKeywordChange} />

      {isLoading ? (
        <p className="loading-item">
          {language === "EN" ? "Loading..." : "Memuat..."}
        </p>
      ) : filteredNotes.length > 0 ? (
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
