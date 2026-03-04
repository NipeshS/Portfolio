import TechStack from "../components/TechStack";

function About() {
  return (
    <section className="section-block">
      <div className="container">
        <div className="row g-4 g-lg-5 align-items-stretch about-layout-row reveal">
          <div className="col-lg-7">
            <h2 className="section-title fw-bold mb-3">About Me</h2>
            <p className="text-secondary mb-0 about-description">
              I am a Java Full Stack Developer passionate about building scalable backend services and polished frontend experiences. I enjoy transforming ideas and requirements into practical, production-ready web applications that are efficient, reliable, and user-friendly.
              With experience in Java, SQL, React, Bootstrap, and modern web technologies, I focus on writing clean, maintainable code while creating responsive and intuitive user interfaces. I continuously explore new technologies and best practices to improve performance, scalability, and overall user experience.
              I am motivated by solving real-world problems through technology and building applications that deliver meaningful value to users and businesses.
            </p>
          </div>
          <div className="col-lg-5">
            <div className="card border-0 shadow-sm h-100 hover-lift">
              <div className="card-body p-4">
                <h3 className="h5 mb-3">Education & Experience</h3>
                <p className="mb-2">
                  <strong>B.Com with Computer Application</strong> - Bharathiar University (2020 - 2023)
                </p>
                <p className="mb-2">
                  <strong>Process Associate</strong> - Tata Consultancy Services (Aug 2023 - Dec 2024)
                </p>
                <p className="mb-0">
                  <strong>Pursuing Java Full Stack Development</strong> - Internz Learn (Jan 2025 - Present)
                </p>
              </div>
            </div>
          </div>
        </div>

        <TechStack />
      </div>
    </section>
  );
}

export default About;
