import { TypeAnimation } from "react-type-animation";

function Home() {
  return (
    <section className="hero-section d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center g-5 w-100 hero-container">
          <div className="col-md-5 text-center text-md-start hero-image">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="img-fluid rounded-circle shadow profile-image hero-avatar"
            />
          </div>
          <div className="col-md-7 hero-content">
            <p className="hero-kicker hero-subtitle text-uppercase mb-2">
              <TypeAnimation
                sequence={[
                  "Java Full Stack Developer",
                  1500,
                  "React Developer",
                  1500,
                  "Backend Developer",
                  1500
                ]}
                speed={70}
                deletionSpeed={40}
                repeat={Infinity}
                cursor={true}
                wrapper="span"
              />
            </p>
            <h1 className="hero-title fw-bold mb-3">
              I build reliable full-stack products with Java, React, and SQL.
            </h1>
            <p className="hero-description mb-4">
              I design and develop clean, scalable web applications with strong backend architecture
              and polished frontend experiences. My focus is maintainable code, performance, and
              intuitive UI that helps users get work done faster.
            </p>
            <div className="d-flex flex-wrap gap-2 gap-md-3 hero-buttons">
              <a href="#projects" className="btn btn-primary btn-lg px-4 hero-cta-btn">
                View Projects
              </a>
              <a href="#contact" className="btn btn-outline-primary btn-lg px-4 hero-cta-btn">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
