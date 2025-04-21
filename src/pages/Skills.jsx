import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import skillsData from '../data/skills.json'; // Import static skills

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function Skills() {
  const { theme } = useContext(ThemeContext);

  return (
    <motion.div
      className={`container py-5 ${theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="mb-4">My Skills</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {skillsData.map((skill, index) => (
          <div className="col" key={skill.id}>
            <motion.div
              className="card h-100 text-center"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={skill.image}
                className="card-img-top mx-auto mt-3"
                alt={skill.title}
                style={{ width: '50px' }}
              />
              <div className="card-body">
                <h5 className="card-title">{skill.title}</h5>
                <p className="card-text">{skill.description}</p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
