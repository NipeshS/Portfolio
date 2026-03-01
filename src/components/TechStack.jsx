import { FaJava } from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiBootstrap,
  SiNodedotjs,
  SiMysql
} from "react-icons/si";

const techItems = [
  { name: "HTML5", icon: SiHtml5, colorClass: "text-danger" },
  { name: "CSS3", icon: SiCss3, colorClass: "text-primary" },
  { name: "JavaScript", icon: SiJavascript, colorClass: "text-warning" },
  { name: "React", icon: SiReact, colorClass: "text-info" },
  { name: "Bootstrap", icon: SiBootstrap, colorClass: "text-purple" },
  { name: "Java", icon: FaJava, colorClass: "text-danger" },
  { name: "Node.js", icon: SiNodedotjs, colorClass: "text-success" },
  { name: "SQL / MySQL", icon: SiMysql, colorClass: "text-info" }
];

function TechStack() {
  return (
    <section className="mt-4 text-center">
      <div className="tech-stack-modern p-4 p-md-5">
        <h3 className="h4 fw-bold mb-4 tech-stack-heading">Tech Stack</h3>
        <div className="d-flex justify-content-center flex-wrap align-items-center gap-3">
          {techItems.map((item) => {
            const Icon = item.icon;
            return (
              <div className="tech-stack-item text-center" key={item.name}>
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <Icon className={`fs-2 mb-2 ${item.colorClass}`} aria-hidden="true" />
                  <p className="mb-0 fw-semibold tech-item-label">{item.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
