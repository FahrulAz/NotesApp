import React from "react";
import { showFormattedDate } from "../utils/index";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const limitWords = (text, limit) => {
  const words = text.split(" ");
  if (words.length > limit) {
    return words.slice(0, limit).join(" ") + "...";
  }
  return text;
};

function NoteItem({ id, title, body, createdAt }) {
  body = limitWords(body, 20);

  return (
    <Link to={`/notes/${id}`} className="note-item_link">
      <div className="note-item">
        <div className="text-center">
          <h3>{title}</h3>
          <p className="note-item_date">{showFormattedDate(createdAt)}</p>
        </div>
        <p className="note-item_desc">{body}</p>
      </div>
    </Link>
  );
}

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default NoteItem;
