import { FaGithub, FaJava } from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiMysql,
  SiApachetomcat,
  SiNodedotjs
} from "react-icons/si";

const techItems = [
  { name: "HTML", icon: SiHtml5, colorClass: "text-danger" },
  { name: "CSS", icon: SiCss3, colorClass: "text-primary" },
  { name: "JavaScript", icon: SiJavascript, colorClass: "text-warning" },
  { name: "Bootstrap", icon: SiBootstrap, colorClass: "text-purple" },
  { name: "Java", icon: FaJava, colorClass: "text-danger" },
  { name: "Node.js", icon: SiNodedotjs, colorClass: "text-success" },
  { name: "MySQL", icon: SiMysql, colorClass: "text-info" },
  { name: "Tomcat", icon: SiApachetomcat, colorClass: "text-warning" }
];

const features = [
  "Add tasks",
  "Edit tasks",
  "Delete tasks",
  "Mark tasks as completed",
  "Search and filter tasks"
];

function ProjectCard() {
  return (
    <article className="card border-0 shadow-sm project-card h-100">
      <div className="card-body p-4 p-md-5">
        <h3 className="h4 fw-bold mb-2 project-title">To-Do List Web Application</h3>
        <p className="mb-4 project-description">
          A full-stack task management app with CRUD operations, status tracking, and validation, built
          for smooth user workflows and maintainable backend logic.
        </p>

        <h4 className="h6 text-uppercase text-muted mb-2">Features</h4>
        <ul className="project-feature-list mb-4">
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>

        <h4 className="h6 text-uppercase text-muted mb-3">Tech Stack</h4>
        <div className="d-flex flex-wrap gap-2 mb-4">
          {techItems.map((item) => {
            const Icon = item.icon;
            return (
              <span className="tech-badge" key={item.name}>
                <Icon className={item.colorClass} aria-hidden="true" />
                {item.name}
              </span>
            );
          })}
        </div>

        <div className="d-flex justify-content-start">
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
    </article>
  );
}

export default ProjectCard;
