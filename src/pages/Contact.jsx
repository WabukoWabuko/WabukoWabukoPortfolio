import { useContext } from 'react';
       import { ThemeContext } from '../context/ThemeContext';

       function Contact() {
         const { theme } = useContext(ThemeContext);
         return (
           <div className={`container py-5 ${theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
             <h1>Contact Me</h1>
             <p>Reach out via GitHub, LinkedIn, or email.</p>
           </div>
         );
       }

       export default Contact;
