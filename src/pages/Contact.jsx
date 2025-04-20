import { useContext, useState } from 'react';
       import { ThemeContext } from '../context/ThemeContext';
       import { motion } from 'framer-motion';
       import emailjs from '@emailjs/browser';

       function Contact() {
         const { theme } = useContext(ThemeContext);
         const [formData, setFormData] = useState({ name: '', email: '', message: '' });
         const [status, setStatus] = useState('');

         const sendEmail = (e) => {
           e.preventDefault();
           emailjs
             .send(
               'service_keh3eya', // Replace with your EmailJS service ID
               'your_template_id', // Replace with your EmailJS template ID
               formData,
               'your_public_key' // Replace with your EmailJS public key
             )
             .then(
               () => {
                 setStatus('Message sent successfully!');
                 setFormData({ name: '', email: '', message: '' });
               },
               () => {
                 setStatus('Failed to send message. Please try again.');
               }
             );
         };

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
                       className="form-control"
                       id="name"
                       value={formData.name}
                       onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                       required
                       aria-describedby="nameHelp"
                     />
                     <div id="nameHelp" className="form-text">Enter your full name.</div>
                   </div>
                   <div className="mb-3">
                     <label htmlFor="email" className="form-label">Email</label>
                     <input
                       type="email"
                       className="form-control"
                       id="email"
                       value={formData.email}
                       onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                       required
                       aria-describedby="emailHelp"
                     />
                     <div id="emailHelp" className="form-text">Enter a valid email address.</div>
                   </div>
                   <div className="mb-3">
                     <label htmlFor="message" className="form-label">Message</label>
                     <textarea
                       className="form-control"
                       id="message"
                       rows="4"
                       value={formData.message}
                       onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                       required
                       aria-describedby="messageHelp"
                     ></textarea>
                     <div id="messageHelp" className="form-text">Describe your inquiry or opportunity.</div>
                   </div>
                   <button type="submit" className="btn btn-primary">Send Message</button>
                   {status && (
                     <p className={`mt-3 ${status.includes('success') ? 'text-success' : 'text-danger'}`}>
                       {status}
                     </p>
                   )}
                 </form>
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
                   <motion.a
                     href="/resume.pdf"
                     className="btn btn-outline-primary"
                     whileHover={{ scale: 1.1 }}
                     transition={{ duration: 0.3 }}
                     download
                     aria-label="Download my resume"
                   >
                     Resume
                   </motion.a>
                 </div>
               </div>
             </div>
           </motion.div>
         );
       }

       export default Contact;
