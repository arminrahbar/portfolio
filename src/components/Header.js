import React from "react";
import "../styles/Header.css";
import { Link, useLocation } from "react-router-dom";
import Resume from "./Resume";

function Header() {
  const location = useLocation(); // This hook returns the location object that represents the current URL.
  const currentPath = location.pathname; // Determine the current route

  return (
    <header className="header">
      <div className="name">Armin Rahbar</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Resume />
          </li>

          {/* Use React Router Links for navigation */}
          <li>
            <Link to="/projects">Projects</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
