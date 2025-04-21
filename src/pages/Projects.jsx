import { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projects.json'; // Import static projects

function Projects() {
  const { theme } = useContext(ThemeContext);
  const [projects] = useState(projectsData); // Use static data
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 9;

  const filteredProjects = projects.filter((project) =>
    project.tech.some((tech) =>
      tech.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const paginatedProjects = filteredProjects.slice(startIndex, startIndex + projectsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <motion.div
      className={`container py-5 ${theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="mb-4">My Projects</h1>

      <div className="mb-4">
        <input
          type="text"
          className={`form-control ${theme === 'dark' ? 'bg-dark text-light border-light' : 'bg-light text-dark border-dark'}`}
          placeholder="Search projects by technology (e.g., React, Django)..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
          aria-label="Search projects by technology"
        />
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4" role="region" aria-label="Project cards">
        {paginatedProjects.length > 0 ? (
          paginatedProjects.map((project) => (
            <div className="col" key={project.id}>
              <ProjectCard project={project} />
            </div>
          ))
        ) : (
          <div className="col-12 text-center">
            <p>No projects found matching your search.</p>
          </div>
        )}
      </div>

      {filteredProjects.length > projectsPerPage && (
        <div className="d-flex justify-content-between mt-4">
          <button
            className={`btn ${theme === 'dark' ? 'bg-dark text-light border-light' : 'bg-light text-dark border-dark'}`}
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            aria-label="Previous page"
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            className={`btn ${theme === 'dark' ? 'bg-dark text-light border-light' : 'bg-light text-dark border-dark'}`}
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            aria-label="Next page"
          >
            Next
          </button>
        </div>
      )}
    </motion.div>
  );
}

export default Projects;
