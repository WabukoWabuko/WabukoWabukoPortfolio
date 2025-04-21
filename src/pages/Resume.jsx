import { useContext } from 'react';
       import { ThemeContext } from '../context/ThemeContext';
       import { motion } from 'framer-motion';

       function Resume() {
         const { theme } = useContext(ThemeContext);

         const handlePrint = () => {
           window.print();
         };

         return (
           <motion.div
             className={`container py-5 ${theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5 }}
           >
             <h1 className="mb-4">My Resume</h1>
             <div className="card">
               <div className="card-body">
                 <iframe
                   src="/WabukoWabukoPortfolio/resume.pdf"
                   title="Resume"
                   style={{ width: '100%', height: '600px', border: 'none' }}
                   aria-label="Resume preview"
                 ></iframe>
                 <p className="mt-2">
                   If the resume doesn’t display,{' '}
                   <a href="/WabukoWabukoPortfolio/resume.pdf" target="_blank" rel="noopener noreferrer">
                     view it here
                   </a>.
                 </p>
                 <div className="d-flex gap-3 mt-3 justify-content-center">
                   <a
                     href="/WabukoWabukoPortfolio/resume.pdf"
                     download="YourName_Resume.pdf"
                     className="btn btn-primary"
                     aria-label="Download resume"
                   >
                     Download Resume
                   </a>
                   <button
                     className="btn btn-outline-primary"
                     onClick={handlePrint}
                     aria-label="Print resume"
                   >
                     Print Resume
                   </button>
                 </div>
               </div>
             </div>
           </motion.div>
         );
       }

       export default Resume;
