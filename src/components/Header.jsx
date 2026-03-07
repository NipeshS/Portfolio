import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" }
];

function Header() {
  const { isDark, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg sticky-top shadow-sm theme-navbar ${
        isDark ? "navbar-dark" : "navbar-light"
      }`}
    >
      <div className="container">
        <a className="navbar-brand fw-bold" href="#home">
          Nipesh S
        </a>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`navbar-collapse custom-mobile-menu ${mobileMenuOpen ? "open" : ""}`}
          id="navbarNav"
          aria-hidden={!mobileMenuOpen}
        >
          <div className="mobile-menu-header">
            <span className="mobile-menu-title">Menu</span>
            <button
              type="button"
              className="mobile-menu-close"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              &times;
            </button>
          </div>
          <ul className="navbar-nav ms-auto d-flex align-items-center mobile-menu-links">
            {NAV_ITEMS.map((item) => (
              <li className="nav-item" key={item.id}>
                <a
                  className="nav-link"
                  href={`#${item.id}`}
                  onClick={handleNavClick}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="nav-item d-flex align-items-center ms-2">
              <span
                className="theme-toggle-icon"
                onClick={() => {
                  toggleTheme();
                  setMobileMenuOpen(false);
                }}
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
        <div
          className={`mobile-menu-backdrop ${mobileMenuOpen ? "open" : ""}`}
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden={!mobileMenuOpen}
        />
      </div>
    </nav>
  );
}

export default Header;
