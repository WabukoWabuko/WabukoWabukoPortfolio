import { useContext, lazy, Suspense } from 'react';
       import { useParams } from 'react-router-dom';
       import { ThemeContext } from '../context/ThemeContext';
       import { motion } from 'framer-motion';
       import projectsData from '../data/projects.json';

       const ThreeDModel = lazy(() => import('../components/ThreeDModel'));

       function ProjectDetail() {
         const { theme } = useContext(ThemeContext);
         const { id } = useParams();
         const project = projectsData.projects.find(p => p.id === parseInt(id));

         if (!project) {
           return <div className="container py-5">Project not found</div>;
         }

         return (
           <motion.div
             className={`container py-5 ${theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5 }}
           >
             <h1 className="mb-4">{project.title}</h1>
             <div className="card">
               <div className="card-body">
                 <p className="card-text">{project.description}</p>
                 <p className="card-text">
                   <small className="text-muted">Tech: {project.tech.join(', ')}</small>
                 </p>
                 {project.title === '3D AI Model Viewer' && (
                   <Suspense fallback={<div>Loading 3D Model...</div>}>
                     <ThreeDModel />
                   </Suspense>
                 )}
                 <div className="mt-3">
                   <a href={project.github} className="btn btn-outline-primary me-2" target="_blank" rel="noopener noreferrer">
                     GitHub
                   </a>
                   <a href={project.demo} className="btn btn-outline-primary" target="_blank" rel="noopener noreferrer">
                     Demo
                   </a>
                 </div>
               </div>
             </div>
           </motion.div>
         );
       }

       export default ProjectDetail;
