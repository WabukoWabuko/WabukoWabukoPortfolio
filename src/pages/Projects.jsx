import { useContext } from 'react';
       import { ThemeContext } from '../context/ThemeContext';
       import { motion } from 'framer-motion';

       function Projects() {
         const { theme } = useContext(ThemeContext);
         return (
           <motion.div
             className={`container py-5 ${theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5 }}
           >
             <h1 className="mb-4">My Projects</h1>
             <div className="row row-cols-1 row-cols-md-2 g-4">
               <div className="col">
                 <motion.div
                   className="card h-100"
                   whileHover={{ scale: 1.05 }}
                   transition={{ duration: 0.3 }}
                 >
                   <img src="/images/task-manager.png" className="card-img-top" alt="Task Manager" />
                   <div className="card-body">
                     <h5 className="card-title">Task Manager App</h5>
                     <p className="card-text">Placeholder for Task Manager project.</p>
                   </div>
                 </motion.div>
               </div>
               <div className="col">
                 <motion.div
                   className="card h-100"
                   whileHover={{ scale: 1.05 }}
                   transition={{ duration: 0.3 }}
                 >
                   <img src="/images/dashboard.png" className="card-img-top" alt="Dashboard" />
                   <div className="card-body">
                     <h5 className="card-title">Data Visualization Dashboard</h5>
                     <p className="card-text">Placeholder for Dashboard project.</p>
                   </div>
                 </motion.div>
               </div>
             </div>
           </motion.div>
         );
       }

       export default Projects;
