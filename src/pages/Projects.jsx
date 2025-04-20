import { useContext } from 'react';
       import { ThemeContext } from '../context/ThemeContext';

       function Projects() {
         const { theme } = useContext(ThemeContext);
         return (
           <div className={`container py-5 ${theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
             <h1>My Projects</h1>
             <p>Explore my work, including React apps and 3D visualizations.</p>
           </div>
         );
       }

       export default Projects;
