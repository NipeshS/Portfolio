import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="hero-section hero-full-height d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center g-4 w-100">
          <div className="col-md-5 text-center">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="img-fluid rounded-circle shadow profile-image"
            />
          </div>
          <div className="col-md-7">
            <h1 className="display-5 fw-bold mb-3">Nipesh S</h1>
            <h2 className="h4 text-primary mb-3">Java Full Stack Developer</h2>
            <p className="lead text-secondary mb-4">
              I build responsive full-stack web applications using Java, SQL, React, and Bootstrap.
              I focus on writing maintainable code and creating clean, user-friendly experiences that deliver efficient and scalable solutions.
            </p>
            <div className="d-flex flex-wrap gap-2">
              <Link to="/projects" className="btn btn-primary btn-lg px-4">
                View Projects
              </Link>
              <Link to="/contact" className="btn btn-outline-primary btn-lg px-4">
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
