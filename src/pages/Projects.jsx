import { useContext, useState } from 'react';
       import { ThemeContext } from '../context/ThemeContext';
       import { motion } from 'framer-motion';
       import ProjectCard from '../components/ProjectCard';
       import projectsData from '../data/projects.json';

       function Projects() {
         const { theme } = useContext(ThemeContext);
         const [filter, setFilter] = useState('All');

         const uniqueTech = ['All', ...new Set(projectsData.projects.flatMap(project => project.tech))];
         const filteredProjects = filter === 'All'
           ? projectsData.projects
           : projectsData.projects.filter(project => project.tech.includes(filter));

         return (
           <motion.div
             className={`container py-5 ${theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5 }}
           >
             <h1 className="mb-4">My Projects</h1>
             <div className="mb-4">
               <div className="btn-group" role="group" aria-label="Project filters">
                 {uniqueTech.map(tech => (
                   <button
                     key={tech}
                     type="button"
                     className={`btn ${filter === tech ? 'btn-primary' : 'btn-outline-primary'}`}
                     onClick={() => setFilter(tech)}
                   >
                     {tech}
                   </button>
                 ))}
               </div>
             </div>
             <div className="row row-cols-1 row-cols-md-2 g-4">
               {filteredProjects.map((project, index) => (
                 <div className="col" key={project.id}>
                   <ProjectCard project={project} />
                 </div>
               ))}
             </div>
           </motion.div>
         );
       }

       export default Projects;
