import { Outlet, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function Layout() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="d-flex flex-column min-vh-100">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Main navigation">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">My Portfolio</NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" end aria-label="Home page">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="about" aria-label="About page">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="projects" aria-label="Projects page">Projects</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="skills" aria-label="Skills page">Skills</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="contact" aria-label="Contact page">Contact</NavLink>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-outline-light ms-2"
                  onClick={toggleTheme}
                  aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                >
                  {theme === 'dark' ? '☀️' : '🌙'}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main className="flex-grow-1" role="main">
        <Outlet />
      </main>
      <footer className="bg-dark text-light text-center py-3">
        <p>© 2025 WabukoWabuko. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Layout;
