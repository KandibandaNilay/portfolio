import Hero from '../components/hero/Hero';
import About from '../components/about/About';
import Services from '../components/services/Services';
import Skills from '../components/skills/Skills';
import Experience from '../components/experience/Experience';
import Projects from '../components/projects/Projects';
import Pricing from '../components/pricing/Pricing';
import Testimonials from '../components/testimonials/Testimonials';
import FAQ from '../components/faq/FAQ';
import Contact from '../components/contact/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Skills />
      <Experience />
      <Projects />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
};

export default Home;