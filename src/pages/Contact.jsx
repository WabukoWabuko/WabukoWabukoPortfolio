import { useContext, useState, useEffect, useRef } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

function Contact() {
  const { theme } = useContext(ThemeContext);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});
  const toastRef = useRef(null);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      newErrors.email = 'Valid email is required';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus('success');
          setFormData({ name: '', email: '', message: '' });
          setErrors({});
        },
        () => {
          setStatus('error');
        }
      );
  };

  useEffect(() => {
    if (status && toastRef.current) {
      const toast = new window.bootstrap.Toast(toastRef.current);
      toast.show();
      const timer = setTimeout(() => setStatus(''), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <motion.div
      className={`container py-5 ${theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="mb-4">Contact Me</h1>
      <div className="card">
        <div className="card-body">
          <p className="card-text">Reach out to discuss opportunities or collaborations.</p>
          <form onSubmit={sendEmail} className="p-3">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                aria-describedby="nameHelp"
              />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
              <div id="nameHelp" className="form-text">Enter your full name.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                aria-describedby="emailHelp"
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              <div id="emailHelp" className="form-text">Enter a valid email address.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                aria-describedby="messageHelp"
              ></textarea>
              {errors.message && <div className="invalid-feedback">{errors.message}</div>}
              <div id="messageHelp" className="form-text">Describe your inquiry or opportunity.</div>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
          <div className="toast-container position-fixed bottom-0 end-0 p-3">
            {status && (
              <div
                ref={toastRef}
                className={`toast ${status === 'success' ? 'bg-success' : 'bg-danger'} text-white`}
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
              >
                <div className="toast-header">
                  <strong className="me-auto">{status === 'success' ? 'Success' : 'Error'}</strong>
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    data-bs-dismiss="toast"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="toast-body">
                  {status === 'success'
                    ? 'Message sent successfully!'
                    : 'Failed to send message. Please try again.'}
                </div>
              </div>
            )}
          </div>
          <div className="d-flex justify-content-center gap-3 mt-3">
            <motion.a
              href="https://github.com/yourusername"
              className="btn btn-outline-primary"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my GitHub profile"
            >
              GitHub
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/yourusername"
              className="btn btn-outline-primary"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my LinkedIn profile"
            >
              LinkedIn
            </motion.a>
            <motion.div
              className="btn btn-outline-primary"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              aria-label="View resume"
            >
              <Link to="/resume">Resume</Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
