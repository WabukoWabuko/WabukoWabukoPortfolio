import { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  const { theme } = useContext(ThemeContext);
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 9; // Display 9 projects per page

  // Fetch all projects from GitHub with pagination
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        let allProjects = [];
        let page = 1;
        const perPage = 100; // Maximum allowed per page
        const token = import.meta.env.VITE_GITHUB_TOKEN; // Updated for Vite

        if (!token) {
          throw new Error('GitHub token not found. Please set VITE_GITHUB_TOKEN in your .env file.');
        }

        while (true) {
          const response = await fetch(
            `https://api.github.com/users/wabukowabuko/repos?sort=pushed&direction=desc&per_page=${perPage}&page=${page}`,
            {
              headers: {
                Authorization: `token ${token}`,
                Accept: 'application/vnd.github.v3+json',
              },
            }
          );

          if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status} - ${response.statusText}`);
          }

          const data = await response.json();
          if (data.length === 0) break; // No more repositories to fetch

          const mappedProjects = data.map((repo) => ({
            id: repo.id,
            title: repo.name,
            description: repo.description || 'No description available.',
            tech: [repo.language || 'Unknown', ...(repo.topics || [])], // Include topics for better tech filtering
          }));

          allProjects = [...allProjects, ...mappedProjects];
          page += 1;
        }

        setProjects(allProjects);
      } catch (error) {
        console.error('Error fetching projects from GitHub:', error.message);
        setProjects([]); // Fallback to empty array
      }
    };
    fetchProjects();
  }, []);

  // Filter projects based on search term
  const filteredProjects = projects.filter((project) =>
    project.tech.some((tech) =>
      tech.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Pagination logic
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

      {/* Search Section */}
      <div className="mb-4">
        <input
          type="text"
          className={`form-control ${theme === 'dark' ? 'bg-dark text-light border-light' : 'bg-light text-dark border-dark'}`}
          placeholder="Search projects by technology (e.g., React, Django)..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1); // Reset to first page on search
          }}
          aria-label="Search projects by technology"
        />
      </div>

      {/* Project Cards */}
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

      {/* Pagination Controls */}
      {filteredProjects.length > projectsPerPage && (
        <div className="d-flex justify-content-between mt-4">
          <button
            className={`btn ${theme === 'dark' ? 'btn-outline-light' : 'btn-outline-dark'}`}
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
            className={`btn ${theme === 'dark' ? 'btn-outline-light' : 'btn-outline-dark'}`}
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
