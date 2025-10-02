import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <main id="home" className="overflow-hidden">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
