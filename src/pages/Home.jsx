import { useContext } from 'react';
       import { ThemeContext } from '../context/ThemeContext';

       function Home() {
         const { theme } = useContext(ThemeContext);
         return (
           <div className={`container py-5 ${theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
             <h1>Welcome to My Portfolio</h1>
             <p>Kenyan Computer Scientist building modern web solutions.</p>
             <a href="/projects" className="btn btn-primary">View Projects</a>
           </div>
         );
       }

       export default Home;
