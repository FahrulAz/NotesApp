import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getNote,
  unarchiveNote,
  archiveNote,
  deleteNote,
} from "../utils/local-data";
import { FaArrowLeft } from "react-icons/fa";
import { showFormattedDate } from "../utils";
import DetailPageActBtn from "../components/DetailPageActBtn";
import Toast from "../components/Toast";
import PropTypes from "prop-types";
import LanguageContext from "../contexts/LanguageContext";

function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const note = getNote(id);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const { language } = useContext(LanguageContext);

  if (!note) {
    return (
      <p>
        {language === "EN" ? "Note not found!" : "Catatan tidak ditemukan!"}
      </p>
    );
  }

  const showToast = (message) => {
    setToastMessage(message);
  };

  const handleBackClick = () => {
    navigate("/");
  };

  const handleArchive = () => {
    if (note.archived) {
      unarchiveNote(id);
      showToast("Note unarchived successfully!");
    } else {
      archiveNote(id);
      showToast("Note archived successfully!");
    }
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalConfirm = () => {
    showToast("Note deleted success!");
    setTimeout(() => {
      deleteNote(id);
      navigate("/");
    }, 1000);
    setIsModalOpen(false);
  };

  return (
    <div className="detailpage">
      <div>
        <button onClick={handleBackClick} className="back-button">
          <FaArrowLeft /> {language === "EN" ? "Back" : "Kembali"}
        </button>
        <h1>{note.title}</h1>
        <p className="detailpage_date">{showFormattedDate(note.createdAt)}</p>
      </div>
      <p className="detailpage_desc">{note.body}</p>
      <DetailPageActBtn
        id={id}
        onDelete={handleDeleteClick}
        onArchive={handleArchive}
        isArchived={note.archived}
      />

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <p>
              {language === "EN"
                ? "Are you sure you want to delete this note?"
                : "Apakah Kamu Yakin ingin Mengapus Catatan?"}
            </p>
            <button className="black" onClick={handleModalConfirm}>
              {language === "EN" ? "Yes" : "Ya"}
            </button>
            <button className="red" onClick={handleModalClose}>
              {language === "EN" ? "No" : "Tidak"}
            </button>
          </div>
        </div>
      )}
      {toastMessage && (
        <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
      )}
    </div>
  );
}

DetailPage.propTypes = {
  id: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default DetailPage;
