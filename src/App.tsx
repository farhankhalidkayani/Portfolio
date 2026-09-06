import { useState, useEffect } from "react";
import { AnimatePresence, MotionConfig } from "framer-motion";
import "./App.css";

// Layout Components
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ScrollProgress from "./components/ui/ScrollProgress";

// Section Components
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Check user's preferred color scheme
  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setDarkMode(true);
    }
  }, []);

  // Apply dark mode class to html element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <MotionConfig reducedMotion="user">
      <div
        className={`min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 bg-noise ${
          darkMode ? "dark" : ""
        }`}
      >
        <ScrollProgress />
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <main>
          <AnimatePresence>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;
