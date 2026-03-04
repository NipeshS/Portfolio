import { useEffect, useRef } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProjectsPage from "./pages/Projects";

function App() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const revealItems = Array.from(document.querySelectorAll(".reveal"));
    if (!revealItems.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-active");
          } else {
            entry.target.classList.remove("reveal-active");
          }
        });
      },
      { threshold: 0.2 }
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor || !window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    let rafId = 0;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let targetX = x;
    let targetY = y;

    const tick = () => {
      x += (targetX - x) * 0.22;
      y += (targetY - y) * 0.22;
      cursor.style.transform = `translate3d(${x - 10}px, ${y - 10}px, 0) scale(${cursor.dataset.scale || 1})`;
      rafId = window.requestAnimationFrame(tick);
    };

    const handleMouseMove = (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
    };

    const interactiveNodes = document.querySelectorAll("a, button, .project-card, .tech-stack-item");
    const growCursor = () => {
      cursor.dataset.scale = "1.5";
    };
    const shrinkCursor = () => {
      cursor.dataset.scale = "1";
    };

    window.addEventListener("mousemove", handleMouseMove);
    interactiveNodes.forEach((node) => {
      node.addEventListener("mouseenter", growCursor);
      node.addEventListener("mouseleave", shrinkCursor);
    });

    cursor.dataset.scale = "1";
    tick();

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", handleMouseMove);
      interactiveNodes.forEach((node) => {
        node.removeEventListener("mouseenter", growCursor);
        node.removeEventListener("mouseleave", shrinkCursor);
      });
    };
  }, []);

  return (
    <div className="app-container">
      <div className="cursor-glow" ref={cursorRef} aria-hidden="true"></div>
      <Header />
      <main className="main-content">
        <section id="home" className="page-section home-anchor">
          <Home />
        </section>
        <section id="about" className="page-section">
          <About />
        </section>
        <section id="projects" className="page-section">
          <ProjectsPage />
        </section>
        <section id="contact" className="page-section">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
