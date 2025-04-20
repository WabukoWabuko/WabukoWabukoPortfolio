import { useContext } from 'react';
       import { ThemeContext } from '../context/ThemeContext';

       function About() {
         const { theme } = useContext(ThemeContext);
         return (
           <div className={`container py-5 ${theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
             <h1>About Me</h1>
             <p>I'm a Kenyan Computer Scientist passionate about creating impactful web applications.</p>
           </div>
         );
       }

       export default About;
