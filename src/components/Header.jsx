import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function Header() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav
      className={`navbar navbar-expand-lg sticky-top shadow-sm theme-navbar ${
        isDark ? "navbar-dark" : "navbar-light"
      }`}
    >
      <div className="container">
        <NavLink className="navbar-brand fw-bold" to="/">
          Nipesh S Portfolio
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/projects">
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
          <button
            type="button"
            className="btn btn-sm ms-lg-3 mt-3 mt-lg-0 theme-toggle-btn"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
            title={isDark ? "Switch to light theme" : "Switch to dark theme"}
          >
            {isDark ? "\u2600\uFE0F" : "\uD83C\uDF19"}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
