import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/404page";
import AddPage from "./pages/AddPage";
import ArchivePage from "./pages/ArchivePage";
import DetailPage from "./pages/DetailPage";

function App() {
  const navigate = useNavigate();

  return (
    <div>
      <header>
        <Header />
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/new" element={<AddPage />} />
          <Route path="/archive" element={<ArchivePage />} />
          <Route path="/notes/:id" element={<DetailPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
