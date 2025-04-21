import { useContext, useState } from 'react';
     import { ThemeContext } from '../context/ThemeContext';
     import { motion } from 'framer-motion';
     import { Document, Page, pdfjs } from 'react-pdf';
     import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
     import 'react-pdf/dist/esm/Page/TextLayer.css';

     // Set up PDF.js worker
     pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

     function Resume() {
       const { theme } = useContext(ThemeContext);
       const [numPages, setNumPages] = useState(null);

       const onDocumentLoadSuccess = ({ numPages }) => {
         setNumPages(numPages);
       };

       const handlePrint = () => {
         window.print();
       };

       return (
         <motion.div
           className={`container py-5 ${theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
         >
           <h1 className="mb-4">My Resume</h1>
           <div className="card">
             <div className="card-body">
               <div style={{ maxHeight: '600px', overflowY: 'auto', width: '100%' }}>
                 <Document
                   file="/WabukoWabukoPortfolio/resume.pdf"
                   onLoadSuccess={onDocumentLoadSuccess}
                   className="d-flex flex-column align-items-center"
                 >
                   {Array.from(new Array(numPages), (el, index) => (
                     <Page
                       key={`page_${index + 1}`}
                       pageNumber={index + 1}
                       renderTextLayer={true}
                       renderAnnotationLayer={true}
                       width={Math.min(800, window.innerWidth - 40)}
                     />
                   ))}
                 </Document>
               </div>
               <p className="mt-2 text-center">
                 If the resume doesn’t display,{' '}
                 <a href="/WabukoWabukoPortfolio/resume.pdf" target="_blank" rel="noopener noreferrer">
                   view it here
                 </a>.
               </p>
               <div className="d-flex gap-3 mt-3 justify-content-center">
                 <a
                   href="/WabukoWabukoPortfolio/resume.pdf"
                   download="YourName_Resume.pdf"
                   className="btn btn-primary"
                   aria-label="Download resume"
                 >
                   Download Resume
                 </a>
                 <button
                   className="btn btn-outline-primary"
                   onClick={handlePrint}
                   aria-label="Print resume"
                 >
                   Print Resume
                 </button>
               </div>
             </div>
           </div>
         </motion.div>
       );
     }

     export default Resume;
