import React from "react";
import { RiPlayListAddFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function HomePageAddBtn() {
  const navigate = useNavigate();

  return (
    <div className="homepage_addbtn">
      <button
        type="button"
        title="Add New Note"
        onClick={() => navigate("/new")}
      >
        <RiPlayListAddFill className="homepage_addbtn_icon" />
      </button>
    </div>
  );
}

HomePageAddBtn.propTypes = {
  navigate: PropTypes.func,
};

export default HomePageAddBtn;
