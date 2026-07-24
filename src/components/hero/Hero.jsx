import { motion } from 'framer-motion';
import useTypewriter from '../../hooks/useTypewriter'; // Adjust import path if needed
import { FaLinkedin, FaFileDownload, FaChartBar } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Hero = () => {
  const text = useTypewriter('Transforming Raw Data into Powerful Business Insights with Power BI.', 80);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24 pb-16 px-4 md:px-8 relative overflow-hidden"
    >
      {/* Background Decorative Blur Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float delay-1000 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Text & Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 space-y-6 text-left"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
            Available for Consulting & Projects
          </div>

          <h1 className="text-4xl md:text-6xl font-poppins font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
            Hi, I'm <span className="gradient-text">Nilay Kandibanda</span>
          </h1>

          <div className="text-xl md:text-2xl font-semibold text-primary">
            Power BI Consultant
          </div>

          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed min-h-[3.5rem]">
            {text}
          </p>

          <p className="text-base text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
            Freelance Power BI Consultant specializing in Dashboard Development, KPI Reporting, DAX, SQL, Data Modeling, ETL, Excel Automation, and Business Intelligence Solutions.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href="#contact"
              className="px-8 py-3.5 bg-primary text-white rounded-full font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow"
            >
              Hire Me
            </motion.a>

            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Link
                to="/#projects"
                className="px-8 py-3.5 glass rounded-full font-semibold border border-gray-300 dark:border-primary/30 hover:border-primary transition-colors inline-block"
              >
                View Portfolio
              </Link>
            </motion.div>

            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href="/resume.pdf"
              download
              className="px-6 py-3.5 glass rounded-full font-semibold flex items-center gap-2 hover:bg-primary/10 transition-colors border border-gray-200 dark:border-gray-800"
            >
              <FaFileDownload className="text-primary" /> Resume
            </motion.a>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-5 text-2xl pt-2 text-gray-600 dark:text-gray-400">
            <motion.a
              whileHover={{ y: -3 }}
              href="https://linkedin.com/in/nilay-kandibanda"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="hover:text-primary transition-colors"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              whileHover={{ y: -3 }}
              href="mailto:nilaykandibanda@gmail.com"
              aria-label="Email Contact"
              className="hover:text-primary transition-colors"
            >
              <HiOutlineMail />
            </motion.a>
          </div>
        </motion.div>

        {/* Right Column: Avatar & Visual Accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center relative"
        >
          <div className="relative">
            {/* Glowing Ring Backplate */}
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary to-secondary opacity-30 blur-xl animate-pulse" />

            {/* Profile Image Frame */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzcSlvfH7kNPc1PjwvgMBo563v7M9hF45jNU5NhCnKxg&s"
                alt="Nilay Kandibanda - Power BI Consultant"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Highlight Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute -bottom-4 -right-2 md:bottom-2 md:-right-6 glass border border-white/20 dark:border-gray-700/50 p-3 rounded-2xl shadow-xl flex items-center gap-3 backdrop-blur-md"
            >
              <div className="p-2.5 bg-primary/10 rounded-xl text-primary">
                <FaChartBar className="text-xl" />
              </div>
              <div>
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400">Specialization</p>
                <p className="text-sm font-bold text-gray-900 dark:text-white">Data & Analytics</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;