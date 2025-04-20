import { useContext } from 'react';
       import { ThemeContext } from '../context/ThemeContext';
       import { motion } from 'framer-motion';

       function Home() {
         const { theme } = useContext(ThemeContext);
         return (
           <motion.div
             className={`container py-5 ${theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5 }}
           >
             <div className="p-5 mb-4 bg-body-tertiary rounded-3">
               <div className="container-fluid py-5 text-center">
                 <img
                   src="/images/headshot.png"
                   alt="Headshot"
                   className="rounded-circle mb-3"
                   style={{ width: '150px', height: '150px' }}
                 />
                 <h1 className="display-5 fw-bold">[Your Name]</h1>
                 <p className="col-md-8 mx-auto fs-4">
                   Kenyan Computer Scientist building modern web solutions with React.js.
                 </p>
                 <a href="/projects" className="btn btn-primary btn-lg">View Projects</a>
               </div>
             </div>
           </motion.div>
         );
       }

       export default Home;
