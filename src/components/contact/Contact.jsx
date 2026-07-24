import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { 
  FaEnvelope, 
  FaLinkedin, 
  FaMapMarkerAlt, 
  FaPaperPlane, 
  FaGlobe, 
  FaCheckCircle, 
  FaExclamationTriangle,
  FaSpinner
} from 'react-icons/fa';

const languages = [
  { name: 'English', level: 'Fluent' },
  { name: 'Hindi', level: 'Fluent' },
  { name: 'Telugu', level: 'Native' },
  { name: 'French', level: 'A2' },
];

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');
    emailjs.sendForm(
      'YOUR_SERVICE_ID',    // Replace with your EmailJS Service ID
      'YOUR_TEMPLATE_ID',   // Replace with your EmailJS Template ID
      form.current,
      'YOUR_PUBLIC_KEY'     // Replace with your EmailJS Public Key
    )
      .then(() => {
        setStatus('success');
        form.current.reset();
        setTimeout(() => setStatus(''), 5000);
      })
      .catch(() => {
        setStatus('error');
        setTimeout(() => setStatus(''), 5000);
      });
  };

  return (
    <section id="contact" className="py-24 bg-lightbg/50 dark:bg-darkbg/50 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">Get In Touch</span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight gradient-text">Contact Me</h2>
          <p className="text-gray-600 dark:text-gray-400 text-base">
            Have a Power BI project, reporting bottleneck, or analytics role in mind? Let's discuss.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column - Details & Languages */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Contact Info Card */}
            <div className="glass-card p-6 md:p-8 rounded-2xl border border-gray-200/60 dark:border-gray-800 shadow-md space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Let's Connect</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Whether you need end-to-end dashboard setup, DAX debugging, or strategic advice, feel free to reach out.
              </p>

              <div className="space-y-4 pt-2">
                <a 
                  href="mailto:nilaykandibanda@gmail.com" 
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-primary/10 transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-primary/10 text-primary text-lg group-hover:bg-primary group-hover:text-white transition-colors">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400">Email Me</p>
                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-primary transition-colors">
                      nilaykandibanda@gmail.com
                    </p>
                  </div>
                </a>

                <a 
                  href="https://linkedin.com/in/nilay-kandibanda" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-primary/10 transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-primary/10 text-primary text-lg group-hover:bg-primary group-hover:text-white transition-colors">
                    <FaLinkedin />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400">LinkedIn</p>
                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-primary transition-colors">
                      linkedin.com/in/nilay-kandibanda
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3 rounded-xl">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary text-lg">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400">Location</p>
                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                      Paris, France
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Languages Card */}
            <div className="glass-card p-6 rounded-2xl border border-gray-200/60 dark:border-gray-800 shadow-md">
              <div className="flex items-center gap-2 mb-4 text-primary">
                <FaGlobe className="text-lg" />
                <h4 className="font-bold text-gray-900 dark:text-white">Languages</h4>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {languages.map((lang) => (
                  <div key={lang.name} className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800/60 flex items-center justify-between text-xs">
                    <span className="font-semibold text-gray-800 dark:text-gray-200">{lang.name}</span>
                    <span className="text-primary font-medium">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card p-6 md:p-8 rounded-2xl border border-gray-200/60 dark:border-gray-800 shadow-lg"
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-2 text-gray-700 dark:text-gray-300">Name *</label>
                  <input 
                    type="text" 
                    name="user_name" 
                    required 
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition text-sm" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-2 text-gray-700 dark:text-gray-300">Email *</label>
                  <input 
                    type="email" 
                    name="user_email" 
                    required 
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition text-sm" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-2 text-gray-700 dark:text-gray-300">Company</label>
                  <input 
                    type="text" 
                    name="company" 
                    placeholder="Acme Corp"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition text-sm" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-2 text-gray-700 dark:text-gray-300">Phone</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    placeholder="+33 6 00 00 00 00"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition text-sm" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-2 text-gray-700 dark:text-gray-300">Project Budget (USD)</label>
                <select 
                  name="budget"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition text-sm text-gray-700 dark:text-gray-300"
                >
                  <option value="">Select a range...</option>
                  <option value="Under $1,000">Under $1,000</option>
                  <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                  <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                  <option value="$5,000+">$5,000+</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-2 text-gray-700 dark:text-gray-300">Project Details *</label>
                <textarea 
                  name="message" 
                  rows="4" 
                  required 
                  placeholder="Describe your data pipeline, dashboard objectives, or scope..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition text-sm"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-3.5 bg-primary text-white font-semibold rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {status === 'sending' ? (
                  <>
                    <FaSpinner className="animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </motion.button>

              {/* Status Notifications */}
              {status === 'success' && (
                <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-sm flex items-center gap-2">
                  <FaCheckCircle className="shrink-0" /> Message sent successfully! I will get back to you shortly.
                </div>
              )}
              {status === 'error' && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-sm flex items-center gap-2">
                  <FaExclamationTriangle className="shrink-0" /> Something went wrong. Please check your connection or email directly.
                </div>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;