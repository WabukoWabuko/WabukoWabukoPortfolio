import { motion } from 'framer-motion';
       import { Link } from 'react-router-dom';

       function ProjectCard({ project }) {
         return (
           <motion.div
             className="card h-100"
             variants={{
               hidden: { opacity: 0, y: 20 },
               visible: { opacity: 1, y: 0 },
             }}
             initial="hidden"
             animate="visible"
             transition={{ duration: 0.5 }}
             whileHover={{ scale: 1.05 }}
           >
             <img
               src={project.image}
               className="card-img-top"
               alt={project.title}
               style={{ height: '200px', objectFit: 'cover' }}
               loading="lazy"
             />
             <div className="card-body">
               <h5 className="card-title">{project.title}</h5>
               <p className="card-text">{project.description}</p>
               <p className="card-text">
                 <small className="text-muted">Tech: {project.tech.join(', ')}</small>
               </p>
             </div>
             <div className="card-footer">
               <a href={project.github} className="btn btn-outline-primary btn-sm me-2" target="_blank" rel="noopener noreferrer">
                 GitHub
               </a>
               <Link to={`/projects/${project.id}`} className="btn btn-outline-primary btn-sm">
                 Details
               </Link>
             </div>
           </motion.div>
         );
       }

       export default ProjectCard;
