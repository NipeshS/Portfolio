import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section className="py-5 project-section">
      <div className="container py-4">
        <h2 className="fw-bold mb-4">Projects</h2>
        <div className="row g-4">
          <div className="col-12">
            <ProjectCard />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
