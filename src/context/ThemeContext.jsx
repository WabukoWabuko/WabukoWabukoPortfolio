import { createContext, useState, useEffect } from 'react';

       export const ThemeContext = createContext();

       export function ThemeProvider({ children }) {
         const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

         useEffect(() => {
           document.documentElement.setAttribute('data-bs-theme', theme);
           localStorage.setItem('theme', theme);
         }, [theme]);

         const toggleTheme = () => {
           setTheme(theme === 'dark' ? 'light' : 'dark');
         };

         return (
           <ThemeContext.Provider value={{ theme, toggleTheme }}>
             {children}
           </ThemeContext.Provider>
         );
       }
