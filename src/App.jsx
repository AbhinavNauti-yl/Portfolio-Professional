import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";

import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";

function App() {
  const [activeSection, setActiveSection] = useState();
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-[#151616] transition-colors duration-300">
          <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
          {/* <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/certifications" element={<Certifications />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main> */}
          {/* <Home />
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Contact /> */}

          <section id="home">
            <Home />
          </section>

          <section id="about">
            <About />
          </section>

          <section id="skills">
            <Skills />
          </section>

          <section id="projects">
            <Projects />
          </section>

          <section id="certifications">
            <Certifications />
          </section>

          <section id="contact">
            <Contact />
          </section>
          
        </div>
      </Router>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
