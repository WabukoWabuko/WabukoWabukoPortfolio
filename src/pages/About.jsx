import { useContext } from 'react';
     import { ThemeContext } from '../context/ThemeContext';
     import { Link } from 'react-router-dom';
     import { motion } from 'framer-motion';

     function About() {
       const { theme } = useContext(ThemeContext);

       return (
         <motion.div
           className={`container py-5 ${theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 0.5 }}
         >
           {/* Hero Section */}
           <section className="text-center py-5">
             <h1 className="display-4 fw-bold">About Basil Wabuko</h1>
             <p className="lead">
               A Computer Scientist and Full-Stack Developer from Nairobi, Kenya, passionate about crafting impactful software solutions.
             </p>
           </section>

           {/* Professional Background */}
           <section className="py-5">
             <h2 className="text-center mb-4">My Journey</h2>
             <div className="row justify-content-center">
               <div className="col-md-8">
                 <p className="lead text-center">
                   I graduated with a Bachelor of Science in Computer Science from Kisii University in 2024, equipping me with a strong foundation in software engineering and data science. During my internship at Kenya Civil Aviation Authority in 2022, I developed a diagnostic model for breast cancer detection, enhancing early decision-making in clinical settings.
                 </p>
                 <p className="text-center">
                   Since 2022, I’ve been freelancing, where I designed and built a niche e-commerce platform for urban artists to buy, sell, and showcase their artwork. This project reflects my ability to deliver production-ready solutions that solve real-world problems in fast-paced environments.
                 </p>
               </div>
             </div>
           </section>

           {/* Personal Story */}
           <section className="py-5">
             <h2 className="text-center mb-4">A Bit More About Me</h2>
             <div className="row justify-content-center">
               <div className="col-md-8">
                 <p className="lead text-center">
                   I’m based in Nairobi, Kenya, and I’m fluent in both English and Swahili, which helps me collaborate effectively in diverse teams. I thrive in fast-paced environments where I can tackle challenges and innovate. Outside of coding, I’m deeply inspired by the urban art scene—my freelance project for artists is a testament to that passion.
                 </p>
               </div>
             </div>
           </section>

           {/* Journey Timeline */}
           <section className={`py-5 ${theme === 'dark' ? 'bg-secondary text-light' : 'bg-light text-dark'} rounded`}>
             <h2 className="text-center mb-4">My Journey Timeline</h2>
             <div className="row justify-content-center">
               <div className="col-md-8">
                 <ul className="list-unstyled">
                   <li className="mb-4">
                     <h5 className="fw-bold">2024: Graduated from Kisii University</h5>
                     <p>Earned a Bachelor of Science in Computer Science, building a strong foundation in software engineering and data science.</p>
                   </li>
                   <li className="mb-4">
                     <h5 className="fw-bold">2022: Internship at Kenya Civil Aviation Authority</h5>
                     <p>Developed a diagnostic model for breast cancer detection, contributing to improved clinical decision-making.</p>
                   </li>
                   <li className="mb-4">
                     <h5 className="fw-bold">2022 - Present: Freelance Developer</h5>
                     <p>Designed and built an e-commerce platform for urban artists, showcasing my ability to deliver impactful solutions.</p>
                   </li>
                 </ul>
               </div>
             </div>
           </section>

           {/* Call-to-Action */}
           <section className="py-5 text-center">
             <h3>Want to Learn More?</h3>
             <p>Explore my projects, skills, or get in touch to collaborate!</p>
             <div className="d-flex gap-3 justify-content-center">
               <Link to="/projects" className="btn btn-primary btn-lg">
                 View Projects
               </Link>
               <Link to="/skills" className="btn btn-outline-primary btn-lg">
                 View Skills
               </Link>
               <Link to="/contact" className="btn btn-outline-primary btn-lg">
                 Contact Me
               </Link>
             </div>
           </section>
         </motion.div>
       );
     }

     export default About;
