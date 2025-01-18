import React, { useState } from "react";
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

function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const note = getNote(id);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  if (!note) {
    return <p>Note not found!</p>;
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
          <FaArrowLeft /> Back
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
            <p>Are you sure you want to delete this note?</p>
            <button className="black" onClick={handleModalConfirm}>
              Yes
            </button>
            <button className="red" onClick={handleModalClose}>
              No
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

export default DetailPage;
