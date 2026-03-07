import { FaGithub, FaJava } from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiReactrouter,
  SiBootstrap,
  SiMysql,
  SiApachetomcat,
  SiNodedotjs
} from "react-icons/si";

const techIconMap = {
  HTML: { icon: SiHtml5, colorClass: "text-danger" },
  CSS: { icon: SiCss3, colorClass: "text-primary" },
  JavaScript: { icon: SiJavascript, colorClass: "text-warning" },
  React: { icon: SiReact, colorClass: "text-info" },
  "React Router": { icon: SiReactrouter, colorClass: "text-info" },
  Bootstrap: { icon: SiBootstrap, colorClass: "text-purple" },
  Java: { icon: FaJava, colorClass: "text-danger" },
  "Java Servlets": { icon: FaJava, colorClass: "text-danger" },
  "Node.js": { icon: SiNodedotjs, colorClass: "text-success" },
  MySQL: { icon: SiMysql, colorClass: "text-info" },
  Tomcat: { icon: SiApachetomcat, colorClass: "text-warning" }
};

function ProjectCard({ project }) {
  const {
    title,
    description,
    features,
    techStack,
    architecture,
    githubUrl
  } = project;

  return (
    <article className="card border-0 shadow-sm project-card h-100">
      <div className="card-body p-4 p-md-5">
        <h3 className="h4 fw-bold mb-2 project-title">{title}</h3>
        <p className="mb-4 project-description">{description}</p>

        <h4 className="h6 text-uppercase text-muted mb-2">Features</h4>
        <ul className="project-feature-list mb-4">
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>

        {architecture ? (
          <>
            <h4 className="h6 text-uppercase text-muted mb-2">Architecture</h4>
            <p className="mb-4 project-description">{architecture}</p>
          </>
        ) : null}

        <h4 className="h6 text-uppercase text-muted mb-3">Tech Stack</h4>
        <div className="d-flex flex-wrap gap-2 mb-4">
          {techStack.map((tech) => {
            const config = techIconMap[tech] || {};
            const Icon = config.icon;
            return (
              <span className="tech-badge" key={tech}>
                {Icon ? <Icon className={config.colorClass} aria-hidden="true" /> : null}
                {tech}
              </span>
            );
          })}
        </div>

        <div className="d-flex justify-content-start">
          <a
            className="btn btn-primary d-inline-flex align-items-center gap-2 project-github-btn"
            href={githubUrl}
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
