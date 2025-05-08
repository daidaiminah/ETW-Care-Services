import { motion } from 'framer-motion';
import AboutHeroSection from '../sections/AboutHeroSection';
import TeamSection from '../sections/TeamSection';
import ValuesSection from '../sections/ValuesSection';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full"
    >
      <AboutHeroSection />
      <ValuesSection />
      <TeamSection />
    </motion.div>
  );
};

export default About;
