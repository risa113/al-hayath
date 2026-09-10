import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Skills from "../components/Skills.jsx";
import Projects from "../components/Projects.jsx";
import Experience from "../components/Experience.jsx";
import Certifications from "../components/Certifications.jsx";
import Contact from "../components/Contact.jsx";
import Chatbot from "../components/Chatbot.jsx";
import Footer from "../components/Footer.jsx";

export default function Home({ goAdmin }) {
  return (
    <div className="min-h-screen overflow-hidden">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#164e63_0,#050816_35%,#020617_100%)]" />
      <Navbar goAdmin={goAdmin} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
      <Chatbot />
    </div>
  );
}
