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
          <h1 className="display-4 fw-bold">Hello, I’m Basil Wabuko</h1>
          <p className="lead">
            I’m a Computer Scientist and Full-Stack Software Engineer with 2+ years of professional experience delivering scalable, production-ready web applications and data-driven solutions. My expertise spans full-stack development, cloud-native systems, data science, and DevOps practices, allowing me to transform complex challenges into efficient, reliable, and user-centered software.
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
        <div className="col-lg-6 text-center">
          <img
            src="images/headshot3.png"
            alt="Headshot of Basil Wabuko"
            className="img-fluid rounded-circle"
            style={{ maxWidth: '300px' }}
          />
        </div>
      </div>

      {/* Teaser / Why Work With Me Section */}
      <section className="py-5">
        <h2 className="text-center mb-4">Why Work With Me?</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <p className="lead text-center">
              I bring a unique blend of technical expertise and practical experience, having developed impactful solutions such as a niche e-commerce platform for urban artists. My skill set covers modern web technologies, data analysis, machine learning, cloud deployment, and CI/CD pipelines, enabling me to deliver solutions that solve real-world problems efficiently.
            </p>
            <p className="text-center">
              Whether it’s building scalable systems, optimizing workflows, or creating intuitive user experiences, I focus on creating software that drives measurable impact.
            </p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-5 text-center">
        <h3>Explore My Work</h3>
        <p>Check out my skills, projects, or get in touch to collaborate on your next project!</p>
        <div className="d-flex gap-3 justify-content-center">
          <Link to="/skills" className="btn btn-outline-primary btn-lg">
            View Skills
          </Link>
          <Link to="/projects" className="btn btn-primary btn-lg">
            View Projects
          </Link>
          <Link to="/contact" className="btn btn-success btn-lg">
            Contact Me
          </Link>
        </div>
      </section>
    </motion.div>
  );
}

export default Home;
