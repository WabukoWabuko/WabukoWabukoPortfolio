import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function Footer() {
  const { theme } = useContext(ThemeContext);

  // Handlers for contact detail actions
  const handlePhoneClick = () => {
    window.open('tel:+254740750403', '_self');
  };

  const handleEmailClick = () => {
    window.open('mailto:basilwabbs@gmail.com', '_self');
  };

  const handleLocationClick = () => {
    window.open('https://www.google.com/maps/place/Nairobi,+Kenya', '_blank');
  };

  const handleGitHubClick = () => {
    window.open('https://github.com/WabukoWabuko', '_blank');
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/wabuko-wabuko-431669209/', '_blank');
  };

  const handleTwitterClick = () => {
    window.open('https://twitter.com/WabukoWabby', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://instagram.com/wabukowabuko', '_blank');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+254740750403', '_self');
  };

  const handleFacebookClick = () => {
    window.open('https://facebook.com/wabukowabuko', '_blank');
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
        <div className="d-flex justify-content-center flex-wrap gap-3">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); handlePhoneClick(); }}
            className="text-decoration-none text-primary"
            style={{ cursor: 'pointer' }}
          >
            Phone: +254 123 456 789
          </a>
          <span>|</span>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); handleEmailClick(); }}
            className="text-decoration-none text-primary"
            style={{ cursor: 'pointer' }}
          >
            Email: wabuko@example.com
          </a>
          <span>|</span>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); handleLocationClick(); }}
            className="text-decoration-none text-primary"
            style={{ cursor: 'pointer' }}
          >
            Location: Nairobi, Kenya
          </a>
          <span>|</span>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); handleGitHubClick(); }}
            className="text-decoration-none text-primary"
            style={{ cursor: 'pointer' }}
          >
            GitHub: WabukoWabuko
          </a>
          <span>|</span>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); handleLinkedInClick(); }}
            className="text-decoration-none text-primary"
            style={{ cursor: 'pointer' }}
          >
            LinkedIn: wabuko-wabuko
          </a>
          <span>|</span>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); handleTwitterClick(); }}
            className="text-decoration-none text-primary"
            style={{ cursor: 'pointer' }}
          >
            Twitter: WabukoWabuko
          </a>
          <span>|</span>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); handleInstagramClick(); }}
            className="text-decoration-none text-primary"
            style={{ cursor: 'pointer' }}
          >
            Instagram: wabuko.wabuko
          </a>
          <span>|</span>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); handleWhatsAppClick(); }}
            className="text-decoration-none text-primary"
            style={{ cursor: 'pointer' }}
          >
            WhatsApp: +254 123 456 789
          </a>
          <span>|</span>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); handleFacebookClick(); }}
            className="text-decoration-none text-primary"
            style={{ cursor: 'pointer' }}
          >
            Facebook: wabukowabuko
          </a>
        </div>
        <div className="mt-2">
          <p className="mb-0" style={{ color: theme === 'dark' ? '#adb5bd' : '#6c757d' }}>
            © 2025 WabukoWabuko. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
