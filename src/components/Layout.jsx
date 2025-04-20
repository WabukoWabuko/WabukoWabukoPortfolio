import { Outlet, NavLink } from 'react-router-dom';
       import { useContext, useEffect, useRef } from 'react';
       import { ThemeContext } from '../context/ThemeContext';

       function Layout() {
         const { theme, toggleTheme } = useContext(ThemeContext);
         const navbarRef = useRef(null);

         const closeNavbar = () => {
           const navbarCollapse = document.querySelector('#navbarNav');
           if (navbarCollapse?.classList.contains('show')) {
             navbarCollapse.classList.remove('show');
           }
         };

         useEffect(() => {
           const handleOutsideClick = (event) => {
             if (navbarRef.current && !navbarRef.current.contains(event.target)) {
               closeNavbar();
             }
           };

           document.addEventListener('click', handleOutsideClick);
           return () => document.removeEventListener('click', handleOutsideClick);
         }, []);

         return (
           <div className="d-flex flex-column min-vh-100">
             <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Main navigation" ref={navbarRef}>
               <div className="container-fluid">
                 <NavLink className="navbar-brand" to="/" onClick={closeNavbar}>
                   My Portfolio
                 </NavLink>
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
                       <NavLink
                         className="nav-link"
                         to="/"
                         end
                         aria-label="Home page"
                         onClick={closeNavbar}
                       >
                         Home
                       </NavLink>
                     </li>
                     <li className="nav-item">
                       <NavLink
                         className="nav-link"
                         to="about"
                         aria-label="About page"
                         onClick={closeNavbar}
                       >
                         About
                       </NavLink>
                     </li>
                     <li className="nav-item">
                       <NavLink
                         className="nav-link"
                         to="projects"
                         aria-label="Projects page"
                         onClick={closeNavbar}
                       >
                         Projects
                       </NavLink>
                     </li>
                     <li className="nav-item">
                       <NavLink
                         className="nav-link"
                         to="skills"
                         aria-label="Skills page"
                         onClick={closeNavbar}
                       >
                         Skills
                       </NavLink>
                     </li>
                     <li className="nav-item">
                       <NavLink
                         className="nav-link"
                         to="contact"
                         aria-label="Contact page"
                         onClick={closeNavbar}
                       >
                         Contact
                       </NavLink>
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
