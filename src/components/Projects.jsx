import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section className="project-section reveal">
      <div className="container">
        <div className="section-heading-wrap">
          <h2 className="section-title fw-bold mb-3">Projects</h2>
        </div>
        <div className="row g-4">
          <div className="col-12 col-lg-10 mx-auto">
            <ProjectCard />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
