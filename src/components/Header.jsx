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
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(Boolean);
    const visibilityMap = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibilityMap.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        });

        let nextActive = activeSection;
        let maxRatio = 0;

        NAV_ITEMS.forEach((item) => {
          const ratio = visibilityMap.get(item.id) || 0;
          if (ratio > maxRatio) {
            maxRatio = ratio;
            nextActive = item.id;
          }
        });

        if (maxRatio > 0) {
          setActiveSection((prev) => (prev === nextActive ? prev : nextActive));
        }
      },
      {
        threshold: 0.5
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, []);

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
            {NAV_ITEMS.map((item) => (
              <li className="nav-item" key={item.id}>
                <a
                  className={`nav-link ${activeSection === item.id ? "active" : ""}`}
                  href={`#${item.id}`}
                  aria-current={activeSection === item.id ? "page" : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
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
