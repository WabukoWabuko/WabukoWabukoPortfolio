import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function Footer() {
  const { theme } = useContext(ThemeContext);

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
          <span>📞 +254 740 750 403</span>
          <span>✉️ basilwabbs@gmail.com</span>
          <span>📍 Nairobi, Kenya</span>
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

