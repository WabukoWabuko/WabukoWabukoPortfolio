import { Outlet, NavLink } from 'react-router-dom';
       import { useContext } from 'react';
       import { ThemeContext } from '../context/ThemeContext';

       function Layout() {
         const { theme, toggleTheme } = useContext(ThemeContext);

         return (
           <div className="d-flex flex-column min-vh-100">
             {/* Navbar */}
             <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
                       <NavLink className="nav-link" activeClassName="active" to="/" end>Home</NavLink>
                     </li>
                     <li className="nav-item">
                       <NavLink className="nav-link" activeClassName="active" to="/about">About</NavLink>
                     </li>
                     <li className="nav-item">
                       <NavLink className="nav-link" activeClassName="active" to="/projects">Projects</NavLink>
                     </li>
                     <li className="nav-item">
                       <NavLink className="nav-link" activeClassName="active" to="/skills">Skills</NavLink>
                     </li>
                     <li className="nav-item">
                       <NavLink className="nav-link" activeClassName="active" to="/contact">Contact</NavLink>
                     </li>
                     <li className="nav-item">
                       <button
                         className="btn btn-outline-light ms-2"
                         onClick={toggleTheme}
                         aria-label="Toggle theme"
                       >
                         {theme === 'dark' ? '☀️' : '🌙'}
                       </button>
                     </li>
                   </ul>
                 </div>
               </div>
             </nav>

             {/* Main Content */}
             <main className="flex-grow-1">
               <Outlet />
             </main>

             {/* Footer */}
             <footer className="bg-dark text-light text-center py-3">
               <p>&copy; 2025 WabukoWabuko. All rights reserved.</p>
             </footer>
           </div>
         );
       }

       export default Layout;
