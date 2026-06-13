import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import BackgroundEffects from "./components/BackgroundEffects";
import CursorGlow from "./components/CursorGlow";
import ScrollProgress from "./components/ScrollProgress";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <BackgroundEffects />
      <CursorGlow />
      <ScrollProgress />

      <Navbar />

      <main>
        <Hero />

        <Experience />

        <Projects />

        <Skills />

        <Education />

        <Certifications />

        <About />

        <Contact />

        <Footer />
      </main>
    </>
  );
}

export default App;