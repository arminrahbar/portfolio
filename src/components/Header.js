import React from "react";
import "../styles/Header.css";
import { Link} from "react-router-dom";

function Header() {

  return (
    <header className="header">
      <div className="name">Armin Rahbar</div>
      <nav>
        <ul>

           {/* Use React Router Links for navigation */}
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/resume">Resume</Link>
          </li>

         
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
