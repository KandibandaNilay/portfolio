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
  <section className={`relative py-16 md:py-24 ${className}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  </section>
);

const Home = () => {
  return (
    <main className="min-h-screen text-white overflow-x-hidden">
      
      {/* Background Effects: Now perfectly linked to your tailwind.config.js */}
      <div className="fixed inset-0 -z-10 bg-darkbg">
        
        {/* Animated Ambient Glows using your custom theme colors */}
        <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-primary/30 blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[600px] w-[600px] rounded-full bg-accent/30 blur-[150px] animate-float" />
        <div className="absolute top-[40%] right-[10%] h-[400px] w-[400px] rounded-full bg-secondary/20 blur-[130px]" />
        
        {/* Data Grid Pattern - Tinted slightly lighter to contrast with darkbg */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <Hero />

      {/* Each section is a glass card with customized borders and glows */}
      <Section>
        <div className="glass-card">
          <About />
        </div>
      </Section>

      <Section>
        <div className="glass-card border-l-4 border-accent shadow-[0_0_30px_rgba(53,126,102,0.2)]">
          <Services />
        </div>
      </Section>

      <Section>
        <div className="glass-card border-r-4 border-primary shadow-[0_0_30px_rgba(148,165,109,0.2)]">
          <Skills />
        </div>
      </Section>

      <Section>
        <div className="glass-card border-t-4 border-secondary shadow-[0_0_30px_rgba(20,184,166,0.2)]">
          <Experience />
        </div>
      </Section>

      <Section>
        <div className="glass-card border-b-4 border-accent shadow-[0_0_30px_rgba(53,126,102,0.2)]">
          <Projects />
        </div>
      </Section>

      <Section>
        <div className="glass-card border-l-4 border-primary shadow-[0_0_30px_rgba(148,165,109,0.2)]">
          <Pricing />
        </div>
      </Section>

      <Section>
        <div className="glass-card border-r-4 border-secondary shadow-[0_0_30px_rgba(20,184,166,0.2)]">
          <Testimonials />
        </div>
      </Section>

      <Section>
        <div className="glass-card">
          <FAQ />
        </div>
      </Section>

      <Section className="pb-28">
        <div className="glass-card bg-darkcard/40 border border-white/20">
          <Contact />
        </div>
      </Section>
    </main>
  );
};

export default Home;