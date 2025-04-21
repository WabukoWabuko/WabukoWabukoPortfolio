import { useState, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function ProjectCard({ project }) {
  const { theme } = useContext(ThemeContext);
  const [showModal, setShowModal] = useState(false);

  const handleGitHubClick = (e) => {
    if (project.isPrivate) {
      e.preventDefault();
      setShowModal(true);
    }
  };

  return (
    <>
      <div className={`card h-100 ${theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
        {/* Project Image */}
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="card-img-top"
          style={{ height: '150px', objectFit: 'cover' }}
          loading="lazy"
          onError={(e) => (e.target.src = '/WabukoWabukoPortfolio/images/placeholder.png')} // Fallback image
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{project.title}</h5>
          <p className="card-text flex-grow-1">{project.description}</p>
          <div className="mb-2">
            {project.tech.map((tech) => (
              <span key={tech} className="badge bg-primary me-1">
                {tech}
              </span>
            ))}
          </div>
          {/* Star Count */}
          <div className="mb-2 d-flex align-items-center">
            <i className="bi bi-star-fill text-warning me-2"></i>
            <span>{project.stars}</span>
          </div>
          <div className="d-flex gap-2">
            {/* GitHub Button */}
            <a
              href={project.githubUrl}
              onClick={handleGitHubClick}
              className={`btn btn-outline-secondary ${theme === 'dark' ? 'text-light' : 'text-dark'}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub`}
            >
              <i className="bi bi-github me-1"></i>
              GitHub
            </a>
            {/* Demo Button */}
            <a
              href={project.demoUrl}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View demo of ${project.title}`}
            >
              Demo
            </a>
          </div>
        </div>
      </div>

      {/* Modal for Private Repos */}
      {showModal && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="privateRepoModalLabel"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
        >
          <div className="modal-dialog" role="document">
            <div className={`modal-content ${theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
              <div className="modal-header">
                <h5 className="modal-title" id="privateRepoModalLabel">
                  Private Repository
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p>This repository is private. Please contact the owner for access.</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectCard;
