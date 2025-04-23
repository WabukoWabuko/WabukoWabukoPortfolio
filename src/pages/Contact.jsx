import { useContext, useState, useEffect, useRef } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import './Contact.css';

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
      className={`container-contact py-5 ${theme === 'dark' ? 'text-light' : 'text-dark'}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="mb-5 text-center" style={{ color: '#e9ecef', fontWeight: 700 }}>
        Contact Me
      </h1>
      {/* Row 1: Contact Form (now full width) */}
      <div className="row g-4 mb-4">
        <div className="col-12">
          <div className="card card-contact bg-dark">
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
            </div>
          </div>
        </div>
      </div>

      {/* Row 2: Google Map */}
      <div className="row g-4">
        <div className="col-12">
          <div className="card card-contact map-card bg-dark">
            <div className="card-body">
              <a
                href="https://www.google.com/maps/place/Nairobi,+Kenya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <h5 className="card-title mb-3">My Location</h5>
              </a>
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.225966751752!2d36.817106!3d-1.286389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13 Tennyson!1s0x0%3A0x0!2zMcKwMTcnMTEuMCJTIDM2wrA0OScwMi4zIkU!5e0!3m2!1sen!2s!4v1633052490000!5m2!1sen!2s"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Map of Nairobi, Kenya"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
