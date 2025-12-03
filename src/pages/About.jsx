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
          A Computer Scientist and Full-Stack Developer with 2+ years of hands-on experience crafting scalable, impactful software solutions.
        </p>
      </section>

      {/* Professional Background */}
      <section className="py-5">
        <h2 className="text-center mb-4">My Journey</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <p className="lead text-center">
              I graduated with a Bachelor of Science in Computer Science from Kisii University in 2024, where I built a strong foundation in software engineering, modern web development, and data science. During my internship at the Kenya Civil Aviation Authority in 2022, I developed a machine-learning–powered diagnostic model for early breast cancer detection, improving clinical decision-making processes.
            </p>
            <p className="text-center">
              Since 2022, I’ve worked as a freelance Full-Stack Developer, delivering production-ready solutions across different sectors. One of my highlight projects is a niche e-commerce platform tailored for urban artists—an application that showcases my ability to design, architect, and deploy scalable systems that solve real-world problems.
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
              I’m based in Nairobi, Kenya, and fluent in both English and Swahili—skills that help me collaborate seamlessly in diverse, fast-paced environments. I’m driven by problem-solving, innovation, and the pursuit of meaningful digital experiences. Beyond development, I’m inspired by the urban art scene, which directly influenced my work in building dedicated platforms for local creatives.
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
                <p>Earned a BSc. in Computer Science, laying the groundwork for strong analytical, engineering, and data-driven problem-solving skills.</p>
              </li>
              <li className="mb-4">
                <h5 className="fw-bold">2022: Internship at Kenya Civil Aviation Authority</h5>
                <p>Built a machine-learning diagnostic system for breast cancer detection, contributing to improved healthcare decision-making.</p>
              </li>
              <li className="mb-4">
                <h5 className="fw-bold">2022 – Present: Freelance Full-Stack Developer</h5>
                <p>Designed and developed a niche e-commerce platform for urban artists and delivered multiple client-focused software solutions—cementing my 2+ years of practical, real-world experience.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-5 text-center">
        <h3>Want to Learn More?</h3>
        <p>Explore my work, review my skill set, or reach out to collaborate on your next project.</p>
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
