import React from "react";
import {
  RiDeleteBin6Line,
  RiArchiveLine,
  RiInboxUnarchiveLine,
} from "react-icons/ri";
import PropTypes from "prop-types";

function DetailPageActBtn({ id, onDelete, onArchive, isArchived }) {
  return (
    <div className="detailpage_actbtn">
      <button
        className="red"
        type="button"
        title="Delete Note"
        onClick={() => onDelete(id)}
      >
        <RiDeleteBin6Line className="detailpage_actbtn_icon" />
      </button>
      <button
        className="black"
        type="button"
        title={isArchived ? "Unarchive Note" : "Archive Note"}
        onClick={() => onArchive(id)}
      >
        {isArchived ? (
          <RiInboxUnarchiveLine className="detailpage_actbtn_icon" />
        ) : (
          <RiArchiveLine className="detailpage_actbtn_icon" />
        )}
      </button>
    </div>
  );
}

DetailPageActBtn.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  isArchived: PropTypes.bool.isRequired,
};

export default DetailPageActBtn;
