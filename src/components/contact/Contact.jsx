import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from 'emailjs-com';   // <-- fixed import
import { FaEnvelope, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');
    emailjs.sendForm(
      'YOUR_SERVICE_ID',    // replace
      'YOUR_TEMPLATE_ID',   // replace
      form.current,
      'YOUR_PUBLIC_KEY'     // replace
    )
      .then(() => {
        setStatus('success');
        form.current.reset();
      })
      .catch(() => setStatus('error'));
  };

  return (
    <section id="contact" className="py-20 bg-lightbg/50 dark:bg-darkbg/50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="section-title gradient-text">Contact Me</h2>
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="space-y-6"
          >
            <div className="glass-card">
              <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Have a project in mind or need a Power BI solution? Reach out and let's talk.
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-primary text-xl" />
                  <a href="mailto:nilaykandibanda@gmail.com" className="hover:text-primary transition-colors">
                    nilaykandibanda@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <FaLinkedin className="text-primary text-xl" />
                  <a href="https://linkedin.com/in/nilay-kandibanda" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    linkedin.com/in/nilay-kandibanda
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-primary text-xl" />
                  <span>Paris, France</span>
                </div>
              </div>
            </div>
            <div className="glass-card">
              <h4 className="font-semibold">Languages</h4>
              <ul className="mt-2 space-y-1 text-sm">
                <li>English (Fluent)</li>
                <li>Hindi (Fluent)</li>
                <li>Telugu (Native)</li>
                <li>French (A2)</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="glass-card"
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input type="text" name="user_name" required className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-primary outline-none transition" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input type="email" name="user_email" required className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-primary outline-none transition" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Company</label>
                <input type="text" name="company" className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-primary outline-none transition" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone</label>
                <input type="tel" name="phone" className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-primary outline-none transition" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Project Details</label>
                <textarea name="message" rows="4" required className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-primary outline-none transition"></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Budget (USD)</label>
                <input type="text" name="budget" className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-primary outline-none transition" />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-primary text-white font-semibold rounded-full hover:shadow-lg transition-all disabled:opacity-50"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'success' && <p className="text-green-500 text-sm">Message sent! I'll get back soon.</p>}
              {status === 'error' && <p className="text-red-500 text-sm">Oops, something went wrong. Please try again.</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;