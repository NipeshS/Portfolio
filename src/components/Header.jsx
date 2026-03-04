import { FaMoon, FaSun } from "react-icons/fa";
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
        <a className="navbar-brand fw-bold" href="#home">
          Nipesh S Portfolio
        </a>
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
          <ul className="navbar-nav ms-auto d-flex align-items-center">
            <li className="nav-item">
              <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
            <li className="nav-item d-flex align-items-center ms-2">
              <span
                className="theme-toggle-icon"
                onClick={toggleTheme}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    toggleTheme();
                  }
                }}
                aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
                title={isDark ? "Switch to light theme" : "Switch to dark theme"}
              >
                {isDark ? (
                  <FaSun aria-hidden="true" size={17} />
                ) : (
                  <FaMoon aria-hidden="true" size={15} />
                )}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
