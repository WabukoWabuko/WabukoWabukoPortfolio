import React from 'react';
       import ReactDOM from 'react-dom/client';
       import { BrowserRouter } from 'react-router-dom';
       import { ThemeProvider } from './context/ThemeContext.jsx';
       import App from './App.jsx';
       import 'bootstrap/dist/css/bootstrap.min.css';
       import 'bootstrap/dist/js/bootstrap.bundle.min.js';
       import './index.css';

       ReactDOM.createRoot(document.getElementById('root')).render(
         <React.StrictMode>
             <ThemeProvider>
               <App />
             </ThemeProvider>
         </React.StrictMode>,
       );

// End of line
