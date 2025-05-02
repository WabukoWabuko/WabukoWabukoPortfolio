import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <motion.div
      className={`container py-5 ${theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <div className="row align-items-center">
        <div className="col-lg-6 mb-4 mb-lg-0">
          <h1 className="display-4 fw-bold">Welcome to Wabuko's Portfolio</h1>
          <p className="lead">
            Hi, I’m Basil Wabuko, a passionate Full-Stack Developer and Computer Scientist specializing in Software Development and modern web technologies. I’m driven to build scalable solutions that solve real-world problems.
          </p>
          <div className="d-flex gap-3">
            <Link to="/projects" className="btn btn-primary btn-lg">
              View Projects
            </Link>
            <Link to="/resume" className="btn btn-outline-primary btn-lg">
              Resume
            </Link>
            <Link to="/certifications" className="btn btn-success btn-lg">
              Certifications
            </Link>
          </div>
        </div>
        <div className="col-lg-6">
          <img
            src="images/headshot.jpeg"
            alt="Headshot of Basil Wabuko"
            className="img-fluid rounded-circle"
            style={{ maxWidth: '300px' }}
          />
        </div>
      </div>

      {/* Teaser Section */}
      <section className="py-5">
        <h2 className="text-center mb-4">Why Work With Me?</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <p className="lead text-center">
              With a strong foundation in full-stack development and a knack for problem-solving, I’ve built impactful solutions like an e-commerce platform for urban artists. My skills span web technologies, data science, and cloud-native development.
            </p>
            <p className="text-center">
              Want to see more? Check out my skills or explore other sections!
            </p>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-5 text-center">
        <div className="d-flex gap-3 justify-content-center">
          <Link to="/skills" className="btn btn-outline-primary btn-lg">
            View Skills
          </Link>
        </div>
      </section>
    </motion.div>
  );
}

export default Home;
