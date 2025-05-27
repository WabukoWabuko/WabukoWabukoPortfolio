import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function Footer() {
  const { theme } = useContext(ThemeContext);

  const handlePhoneClick = () => {
    window.open('tel:+254740750403', '_self');
  };

  const handleEmailClick = () => {
    window.open('mailto:basilwabbs@gmail.com', '_self');
  };

  const handleLocationClick = () => {
    window.open('https://www.google.com/maps/place/Nairobi,+Kenya', '_blank');
  };

  return (
    <footer
      className={`py-4 ${theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}
      style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        fontSize: '0.9rem',
      }}
    >
      <div className="container text-center">
        <div className="d-flex justify-content-center flex-wrap gap-4">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); handlePhoneClick(); }}
            className="text-decoration-none text-primary"
            style={{ cursor: 'pointer' }}
          >
            📞 +254 740 750 403
          </a>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); handleEmailClick(); }}
            className="text-decoration-none text-primary"
            style={{ cursor: 'pointer' }}
          >
            ✉️ basilwabbs@gmail.com
          </a>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); handleLocationClick(); }}
            className="text-decoration-none text-primary"
            style={{ cursor: 'pointer' }}
          >
            📍 Nairobi, Kenya
          </a>
        </div>
        <div className="mt-3">
          <p className="mb-0" style={{ color: theme === 'dark' ? '#adb5bd' : '#6c757d' }}>
            © 2025 WabukoWabuko. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

