function Footer() {
  return (
    <footer className="theme-footer py-4 mt-auto">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
        <div className="d-flex align-items-center gap-3 footer-links-wrap">
          <a href="https://github.com/NipeshS" target="_blank" rel="noreferrer" className="footer-link">
            GitHub
          </a>
          <a href="https://linkedin.com/in/nipeshs27" target="_blank" rel="noreferrer" className="footer-link">
            LinkedIn
          </a>
          <a href="mailto:nipeshnaresh62@gmail.com" className="footer-link">
            Email
          </a>
        </div>
        <small className="footer-copy">© 2026 Nipesh S</small>
      </div>
    </footer>
  );
}

export default Footer;
