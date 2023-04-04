import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="header">
      <div className="mid">
        <ul className="navbar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/application">Application</Link>
          </li>
          <li>
            <Link to="/resource">Resource</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Navbar;
