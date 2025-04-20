import { useContext } from 'react';
     import { ThemeContext } from '../context/ThemeContext';
     import { motion } from 'framer-motion';

     const cardVariants = {
       hidden: { opacity: 0, y: 20 },
       visible: { opacity: 1, y: 0 },
     };

     function Skills() {
       const { theme } = useContext(ThemeContext);
       return (
         <motion.div
           className={`container py-5 ${theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
         >
           <h1 className="mb-4">My Skills</h1>
           <div className="row row-cols-1 row-cols-md-3 g-4">
             <div className="col">
               <motion.div
                 className="card h-100 text-center"
                 variants={cardVariants}
                 initial="hidden"
                 animate="visible"
                 transition={{ duration: 0.5, delay: 0.2 }}
                 whileHover={{ scale: 1.05 }}
               >
                 <img src="/images/react.svg" className="card-img-top mx-auto mt-3" alt="React" style={{ width: '50px' }} />
                 <div className="card-body">
                   <h5 className="card-title">React.js</h5>
                   <p className="card-text">Building dynamic UIs with React.</p>
                 </div>
               </motion.div>
             </div>
             <div className="col">
               <motion.div
                 className="card h-100 text-center"
                 variants={cardVariants}
                 initial="hidden"
                 animate="visible"
                 transition={{ duration: 0.5, delay: 0.4 }}
                 whileHover={{ scale: 1.05 }}
               >
                 <img src="/images/javascript.svg" className="card-img-top mx-auto mt-3" alt="JavaScript" style={{ width: '50px' }} />
                 <div className="card-body">
                   <h5 className="card-title">JavaScript</h5>
                   <p className="card-text">Core programming for web apps.</p>
                 </div>
               </motion.div>
             </div>
             <div className="col">
               <motion.div
                 className="card h-100 text-center"
                 variants={cardVariants}
                 initial="hidden"
                 animate="visible"
                 transition={{ duration: 0.5, delay: 0.6 }}
                 whileHover={{ scale: 1.05 }}
               >
                 <img src="/images/bootstrap.svg" className="card-img-top mx-auto mt-3" alt="Bootstrap" style={{ width: '50px' }} />
                 <div className="card-body">
                   <h5 className="card-title">Bootstrap</h5>
                   <p className="card-text">Responsive styling framework.</p>
                 </div>
               </motion.div>
             </div>
           </div>
         </motion.div>
       );
     }

     export default Skills;
