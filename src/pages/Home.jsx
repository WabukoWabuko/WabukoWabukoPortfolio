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
      <div className="row align-items-center">
        <div className="col-lg-6 mb-4 mb-lg-0">
          <h1 className="display-4 fw-bold">Welcome to Wabuko's Portfolio</h1>
          <p className="lead">
            Hi, I'm Basil Wabuko, a passionate Full-Stack Developer specializing in React.js, Django, and modern web technologies.
          </p>
          <div className="d-flex gap-3">
            <Link to="/projects" className="btn btn-primary btn-lg">
              View Projects
            </Link>
            <Link to="/resume" className="btn btn-outline-primary btn-lg">
              Resume
            </Link>
          </div>
        </div>
        <div className="col-lg-6">
          <img
            src="/WabukoWabukoPortfolio/images/headshot.png"
            alt="Headshot of [Your Name]"
            className="img-fluid rounded-circle"
            style={{ maxWidth: '300px' }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
