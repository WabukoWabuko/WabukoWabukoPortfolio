import { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import certificatesData from '../data/certificates.json';
import './Certifications.css';

function Certifications() {
  const { theme } = useContext(ThemeContext);
  const [certificates, setCertificates] = useState([]);
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    // Load certificates from the single JSON file
    const certs = certificatesData.map((cert, index) => ({
      id: `cert-${index}`,
      ...cert,
    }));
    setCertificates(certs);

    // Disable right-click (context menu)
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener('contextmenu', handleContextMenu);

    // Attempt to disable Print Screen and common screenshot shortcuts
    const handleKeyDown = (e) => {
      // Disable Print Screen (keyCode 44 is for Print Screen in some browsers)
      if (e.key === 'PrintScreen' || e.keyCode === 44) {
        e.preventDefault();
        alert('Screenshots are disabled for security reasons.');
      }
      // Disable common screenshot shortcuts (e.g., Ctrl+Shift+S, Alt+PrintScreen)
      if ((e.ctrlKey && e.shiftKey && e.key === 'S') || (e.altKey && e.keyCode === 44)) {
        e.preventDefault();
        alert('Screenshots are disabled for security reasons.');
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleCardClick = (cert) => {
    setSelectedCert(selectedCert?.id === cert.id ? null : cert);
  };

  return (
    <motion.div
      className={`container-certifications py-5 ${theme === 'dark' ? 'text-light' : 'text-dark'}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-center mb-4" style={{ color: '#e9ecef', fontWeight: 700 }}>
        My Certifications
      </h1>
      <div className="row g-4">
        {certificates.map((cert) => (
          <div key={cert.id} className="col-md-4 position-relative">
            <div
              className={`card card-certification ${theme === 'dark' ? 'bg-dark' : 'bg-light'} ${selectedCert?.id === cert.id ? 'expanded' : ''}`}
              onClick={() => handleCardClick(cert)}
              style={{ cursor: 'pointer', transition: 'all 0.3s' }}
            >
              <div className="card-body">
                <h5 className="card-title">{cert.title || 'Certificate'}</h5>
                <p className="card-text">
                  {cert.issuer || 'Issuer'} - {cert.date || 'Date'}
                </p>
                {selectedCert?.id === cert.id && (
                  <div className="cert-details position-relative">
                    <p><strong>Description:</strong> {cert.description || 'No description'}</p>
                    <p><strong>Issued:</strong> {cert.date || 'N/A'}</p>
                    <p><strong>Issuer:</strong> {cert.issuer || 'N/A'}</p>
                    <p><strong>Credential ID:</strong> {cert.credentialId || 'N/A'}</p>
                    <a href={cert.link} target="_blank" rel="noopener noreferrer">
                      View Full Certificate Online
                    </a>
                    {/* Watermark overlay */}
                    <div className="watermark-overlay">
                      Confidential - Do Not Copy
                    </div>
                  </div>
                )}
              </div>
              {/* Transparent overlay to block print screen */}
              <div className="screenshot-blocker"></div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Certifications;
