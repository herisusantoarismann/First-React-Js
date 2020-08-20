import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="header">
      <nav>
        <ul>
          <li className="logo">
            <Link to="/" className="mLogo">
              Logo
            </Link>
          </li>
          <div className="navbar">
            <li>
              <Link to="/" className="navbar-link">
                About
              </Link>
            </li>
            <li>
              <Link to="/project" className="navbar-link">
                Project
              </Link>
            </li>
            <li>
              <Link to="/contact" className="navbar-link">
                Contact
              </Link>
            </li>
          </div>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
    </div>
  );
};

export default Navbar;
