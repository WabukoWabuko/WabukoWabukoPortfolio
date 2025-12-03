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
          Computer Scientist and Software Engineer with over 2 years of experience building scalable full-stack applications, data-driven systems, and production-ready software solutions.
        </p>
      </section>

      {/* Professional Background */}
      <section className="py-5">
        <h2 className="text-center mb-4">My Journey</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <p className="lead text-center">
              I hold a Bachelor of Science in Computer Science from Kisii University, where I developed a strong foundation in software engineering, data science, and problem-solving. My professional experience spans both public-sector and enterprise environments, with a focus on full-stack development, data analytics, and cloud-native engineering.
            </p>

            <p className="text-center">
              I currently serve as a Software Engineer at the Export Processing Zones Authority (EPZA), where I build and maintain full-stack applications that support operations, compliance, and investor services. My work includes developing RESTful APIs, optimizing databases, automating workflows, and implementing CI/CD pipelines and containerized deployments.
            </p>

            <p className="text-center">
              Previously, I worked at the Kenya Civil Aviation Authority (KCAA), contributing to mission-critical systems that support aviation safety, licensing, and digital document management. I built dashboards for real-time analytics, streamlined legacy systems, and supported secure integrations for cloud modernization initiatives.
            </p>

            <p className="text-center">
              My earlier internship periods at KCAA gave me hands-on experience in debugging, testing, system documentation, API documentation, and UI/UX improvements—reinforcing the foundation that shaped my professional trajectory.
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
              I’m based in Nairobi, Kenya, and fluent in English. I thrive in collaborative and fast-paced environments, especially those where problem-solving, continuous learning, and meaningful innovation take center stage. Outside of engineering, I enjoy exploring urban art and community-driven tech initiatives—interests that continue to influence the kind of software solutions I build.
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
                <h5 className="fw-bold">2025 – Present: Software Engineer, Export Processing Zones Authority (EPZA)</h5>
                <p>Building full-stack applications for operations, compliance, and investor services. Implementing CI/CD pipelines, workflow automations, and database optimizations.</p>
              </li>

              <li className="mb-4">
                <h5 className="fw-bold">2024 – 2025: Software Engineer, Kenya Civil Aviation Authority (KCAA)</h5>
                <p>Developed aviation systems, real-time dashboards, and secure integrations while supporting cloud modernization and improving legacy applications.</p>
              </li>

              <li className="mb-4">
                <h5 className="fw-bold">2022 – 2024: Software Engineering Intern, KCAA</h5>
                <p>Supported software development, testing, debugging, UI/UX improvements, and system/API documentation across multiple internship cycles.</p>
              </li>

              <li className="mb-4">
                <h5 className="fw-bold">2024: Graduated from Kisii University</h5>
                <p>Earned a BSc. in Computer Science with strong grounding in software engineering, data science, and machine learning.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-5 text-center">
        <h3>Want to Learn More?</h3>
        <p>Explore my projects, review my technical skills, or reach out to collaborate.</p>
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
