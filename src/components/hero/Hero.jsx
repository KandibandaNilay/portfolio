import { motion } from 'framer-motion';
import useTypewriter from '../../hooks/useTypewriter';   // <-- fixed
import { FaLinkedin, FaFileDownload } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-router-dom';

<div className="bg-red-500 text-white p-4">Test</div>
const Hero = () => {
  const text = useTypewriter('Transforming Raw Data into Powerful Business Insights with Power BI.', 100);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4 relative overflow-hidden"
    >
      {/* Animated blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-poppins font-bold leading-tight">
            Hi, I'm <span className="gradient-text">Nilay Kandibanda</span>
          </h1>
          <div className="text-xl md:text-2xl font-medium text-primary">
            Power BI Consultant
          </div>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            {text}
          </p>
          <p className="text-base text-gray-600 dark:text-gray-400 max-w-lg">
            Freelance Power BI Consultant specializing in Dashboard Development, KPI Reporting, DAX, SQL, Data Modeling, ETL, Excel Automation, and Business Intelligence Solutions.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="px-8 py-3 bg-primary text-white rounded-full font-semibold shadow-lg hover:shadow-primary/50 transition-all hover:scale-105"
            >
              Hire Me
            </a>
            <Link
              to="/#projects"
              className="px-8 py-3 glass rounded-full font-semibold border border-primary/30 hover:border-primary transition-all hover:scale-105"
            >
              View Portfolio
            </Link>
            <a
              href="/resume.pdf"
              download
              className="px-8 py-3 glass rounded-full font-semibold flex items-center gap-2 hover:bg-primary/10 transition-all hover:scale-105"
            >
              <FaFileDownload /> Resume
            </a>
          </div>

          <div className="flex space-x-4 text-2xl text-gray-600 dark:text-gray-400">
            <a href="https://linkedin.com/in/nilay-kandibanda" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <FaLinkedin />
            </a>
            <a href="mailto:nilaykandibanda@gmail.com" className="hover:text-primary transition-colors">
              <HiOutlineMail />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
            <img
              src="https://ui-avatars.com/api/?name=Nilay+Kandibanda&size=300&background=2563EB&color=fff"
              alt="Nilay Kandibanda"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 rounded-full ring-4 ring-primary/20 animate-pulse-slow"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;