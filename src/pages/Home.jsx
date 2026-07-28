import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Services from "../components/services/Services";
import Skills from "../components/skills/Skills";
import Experience from "../components/experience/Experience";
import Projects from "../components/projects/Projects";
import Pricing from "../components/pricing/Pricing";
import Testimonials from "../components/testimonials/Testimonials";
import FAQ from "../components/faq/FAQ";
import Contact from "../components/contact/Contact";

const Section = ({ children, className = "" }) => (
  <section className={`relative py-20 md:py-28 ${className}`}>
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      {children}
    </div>
  </section>
);

const Home = () => {
  return (
    <main className="min-h-screen bg-darkbg text-white overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10">
        {/* Animated gradient blobs using your accent colour */}
        <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-accent/20 blur-[150px] animate-float" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-primary/30 blur-[150px] animate-float delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-secondary/10 blur-[200px]" />

        {/* Subtle grid for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[length:32px_32px]" />

        {/* Dark base */}
        <div className="absolute inset-0 bg-gradient-to-b from-darkbg via-darkbg/95 to-darkbg" />
      </div>

      <Hero />

      {/* Each section is a glass card with border and glow */}
      <Section className="px-4">
        <div className="glass-card">
          <About />
        </div>
      </Section>

      <Section className="px-4">
        <div className="glass-card border-l-4 border-accent shadow-accent/20 shadow-2xl">
          <Services />
        </div>
      </Section>

      <Section className="px-4">
        <div className="glass-card">
          <Skills />
        </div>
      </Section>

      <Section className="px-4">
        <div className="glass-card border-r-4 border-primary shadow-primary/20 shadow-2xl">
          <Experience />
        </div>
      </Section>

      <Section className="px-4">
        <div className="glass-card">
          <Projects />
        </div>
      </Section>

      <Section className="px-4">
        <div className="glass-card border-t-4 border-secondary shadow-secondary/20 shadow-2xl">
          <Pricing />
        </div>
      </Section>

      <Section className="px-4">
        <div className="glass-card">
          <Testimonials />
        </div>
      </Section>

      <Section className="px-4">
        <div className="glass-card border-b-4 border-accent shadow-accent/20 shadow-2xl">
          <FAQ />
        </div>
      </Section>

      <Section className="px-4 pb-28">
        <div className="glass-card bg-darkcard/90">
          <Contact />
        </div>
      </Section>
    </main>
  );
};

export default Home;