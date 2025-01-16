import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FiHome, FiPlusCircle } from "react-icons/fi";
import { FiArchive } from "react-icons/fi";

const Navigation = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isArchivePage = location.pathname === "/archive";
  const isAddPage = location.pathname === "/new";

  return (
    <nav className="navigation">
      <ul>
        {isHomePage && (
          <li>
            <Link to="/archive">
              <FiArchive className="navigation_icon" />
            </Link>
          </li>
        )}
        {(isArchivePage || isAddPage) && (
          <li>
            <Link to="/">
              <FiHome className="navigation_icon" />
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
