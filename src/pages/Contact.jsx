import { useContext } from 'react';
     import { ThemeContext } from '../context/ThemeContext';
     import { motion } from 'framer-motion';

     function Contact() {
       const { theme } = useContext(ThemeContext);
       return (
         <motion.div
           className={`container py-5 ${theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
         >
           <h1 className="mb-4">Contact Me</h1>
           <div className="card">
             <div className="card-body text-center">
               <p className="card-text">Reach out to discuss opportunities or collaborations.</p>
               <div className="d-flex justify-content-center gap-3">
                 <motion.a
                   href="https://github.com/yourusername"
                   className="btn btn-outline-primary"
                   whileHover={{ scale: 1.1 }}
                   transition={{ duration: 0.3 }}
                 >
                   GitHub
                 </motion.a>
                 <motion.a
                   href="https://linkedin.com/in/yourusername"
                   className="btn btn-outline-primary"
                   whileHover={{ scale: 1.1 }}
                   transition={{ duration: 0.3 }}
                 >
                   LinkedIn
                 </motion.a>
                 <motion.a
                   href="mailto:your.email@example.com"
                   className="btn btn-outline-primary"
                   whileHover={{ scale: 1.1 }}
                   transition={{ duration: 0.3 }}
                 >
                   Email
                 </motion.a>
                 <motion.a
                   href="/resume.pdf"
                   className="btn btn-outline-primary"
                   whileHover={{ scale: 1.1 }}
                   transition={{ duration: 0.3 }}
                 >
                   Resume
                 </motion.a>
               </div>
             </div>
           </div>
         </motion.div>
       );
     }

     export default Contact;
