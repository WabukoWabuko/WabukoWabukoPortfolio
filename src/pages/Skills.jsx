import { useContext } from 'react';
       import { ThemeContext } from '../context/ThemeContext';

       function Skills() {
         const { theme } = useContext(ThemeContext);
         return (
           <div className={`container py-5 ${theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
             <h1>My Skills</h1>
             <p>Proficient in React.js, Bootstrap, JavaScript, and more.</p>
           </div>
         );
       }

       export default Skills;
