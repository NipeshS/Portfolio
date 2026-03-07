import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: "todo",
    title: "To-Do List Web Application",
    description:
      "A full-stack task management app with CRUD operations, status tracking, and validation, built for smooth user workflows and maintainable backend logic.",
    features: [
      "Add tasks",
      "Edit tasks",
      "Delete tasks",
      "Mark tasks as completed",
      "Search and filter tasks"
    ],
    techStack: ["HTML", "CSS", "JavaScript", "Bootstrap", "Java", "Node.js", "MySQL", "Tomcat"],
    githubUrl: "https://github.com/NipeshS/To-Do"
  },
  {
    id: "shopsphere",
    title: "ShopSphere - E-commerce Web Application",
    description:
      "A full-stack e-commerce web application built using React, Java Servlets, and MySQL. The platform supports role-based authentication, product management, and a complete shopping cart workflow.",
    features: [
      "User and Admin role-based authentication",
      "Session-based login using Java Servlets",
      "Product catalog with search and filtering",
      "Product details page",
      "Add-to-cart workflow with login redirect",
      "Persistent cart stored in MySQL database",
      "Admin dashboard for product management",
      "Import products from JSON",
      "Inventory management system"
    ],
    architecture: "React -> Java Servlet API -> MySQL Database",
    techStack: ["React", "React Router", "CSS", "Java Servlets", "JDBC", "MySQL", "Tomcat"],
    githubUrl: "https://github.com/NipeshS/E-Commerce-Website"
  }
];

function Projects() {
  return (
    <section className="project-section reveal">
      <div className="container">
        <div className="section-heading-wrap">
          <h2 className="section-title fw-bold mb-3">Projects</h2>
        </div>
        <div className="row g-4">
          {projects.map((project) => (
            <div className="col-12 col-lg-10 mx-auto" key={project.id}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
