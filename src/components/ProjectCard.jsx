import { FaGithub, FaJava, FaDatabase } from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiJavascript,
  SiMysql,
  SiApachetomcat
} from "react-icons/si";

const techGroups = [
  {
    title: "Frontend",
    items: [
      { name: "HTML5", icon: SiHtml5, colorClass: "text-danger" },
      { name: "CSS3", icon: SiCss3, colorClass: "text-primary" },
      { name: "Bootstrap 5", icon: SiBootstrap, colorClass: "text-purple" },
      { name: "JavaScript", icon: SiJavascript, colorClass: "text-warning" }
    ]
  },
  {
    title: "Backend",
    items: [
      { name: "Java Servlets", icon: FaJava, colorClass: "text-danger" },
      { name: "JDBC", icon: FaDatabase, colorClass: "text-secondary" }
    ]
  },
  {
    title: "Database",
    items: [{ name: "MySQL", icon: SiMysql, colorClass: "text-info" }]
  },
  {
    title: "Server",
    items: [{ name: "Apache Tomcat 9+", icon: SiApachetomcat, colorClass: "text-warning" }]
  }
];

const features = [
  "Add new tasks (title, description, due date, status)",
  "View all tasks in responsive Bootstrap table",
  "Edit tasks",
  "Delete tasks",
  "Mark tasks as completed",
  "Search and filter tasks",
  "Client-side and server-side validation"
];

function ProjectCard() {
  return (
    <div className="card border-0 shadow-sm project-card h-100">
      <div className="card-body p-4 p-md-5">
        <h3 className="h4 fw-bold mb-2 project-title">To-Do List Web Application (Java Servlets + JDBC + MySQL)</h3>
        <p className="mb-4 project-description">
          A beginner-friendly Full Stack Development mini project with complete CRUD functionality.
        </p>

        <h4 className="h6 text-uppercase text-muted mb-3">Tech Stack</h4>
        <div className="row g-3 mb-4">
          {techGroups.map((group) => (
            <div className="col-12 col-md-6" key={group.title}>
              <div className="tech-group-card h-100">
                <p className="small text-uppercase fw-semibold text-muted mb-2">{group.title}</p>
                <div className="d-flex flex-wrap gap-2">
                  {group.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <span className="tech-badge" key={item.name}>
                        <Icon className={item.colorClass} aria-hidden="true" />
                        {item.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        <h4 className="h6 text-uppercase text-muted mb-2">Features</h4>
        <ul className="project-feature-list mb-4">
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>

        <div className="d-flex justify-content-center">
          <a
            className="btn btn-primary d-inline-flex align-items-center gap-2 project-github-btn"
            href="https://github.com/NipeshS/To-Do"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub aria-hidden="true" />
            GitHub Repository
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
