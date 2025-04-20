import { useContext } from 'react';
     import { ThemeContext } from '../context/ThemeContext';
     import { motion } from 'framer-motion';

     function About() {
       const { theme } = useContext(ThemeContext);
       return (
         <motion.div
           className={`container py-5 ${theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
         >
           <h1 className="mb-4">About Me</h1>
           <motion.div
             className="card mb-3"
             whileHover={{ scale: 1.05 }}
             transition={{ duration: 0.3 }}
           >
             <div className="row g-0">
               <div className="col-md-4">
                 <img
                   src="/images/headshot.png"
                   alt="Headshot"
                   className="img-fluid rounded-start"
                   style={{ maxHeight: '300px', objectFit: 'cover' }}
                 />
               </div>
               <div className="col-md-8">
                 <div className="card-body">
                   <h5 className="card-title">Kenyan Computer Scientist</h5>
                   <p className="card-text">
                     I’m a passionate developer from Kenya, skilled in React.js, JavaScript, and Bootstrap. My goal is to build impactful web applications that solve real-world problems, inspired by Kenya’s growing tech ecosystem.
                   </p>
                 </div>
               </div>
             </div>
           </motion.div>
         </motion.div>
       );
     }

     export default About;
