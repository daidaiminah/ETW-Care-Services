import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/services/ServiceCard';

// Import icons from react-icons
import { FaHeartbeat, FaBed, FaHandHoldingHeart } from 'react-icons/fa';
import { MdOutlinePersonalInjury } from 'react-icons/md';
import { GiHealthNormal } from 'react-icons/gi';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const ServicesSection = () => {
  const services = [
    {
      id: 'personal',
      title: 'PERSONAL CARE',
      description: 'Assistance with daily living activities like bathing, dressing, and medication management.',
      icon: <MdOutlinePersonalInjury size={36} color="#fff" />,
      bgColor: 'bg-green-600'
    },
    {
      id: 'companion',
      title: 'COMPANION CARE',
      description: 'Meaningful companionship and social interaction for emotional wellbeing and mental stimulation.',
      icon: <FaHandHoldingHeart size={36} color="#fff" />,
      bgColor: 'bg-rose-400'
    },
    {
      id: 'respite',
      title: 'RESPITE CARE',
      description: 'Temporary relief for primary caregivers, ensuring your loved one remains well-cared for.',
      icon: <GiHealthNormal size={36} color="#fff" />,
      bgColor: 'bg-yellow-400'
    },
    {
      id: 'dementia',
      title: 'DEMENTIA CARE',
      description: "Personalized support for those with dementia or Alzheimer's, focusing on dignity and comfort.",
      icon: <FaHeartbeat size={36} color="#fff" />,
      bgColor: 'bg-orange-400'
    },
    {
      id: 'hospice',
      title: 'HOSPICE CARE',
      description: 'Compassionate end-of-life care focused on comfort, dignity, and quality of life.',
      icon: <FaBed size={36} color="#fff" />,
      bgColor: 'bg-blue-300'
    },
    {
      id: 'veteran',
      title: 'VETERAN CARE',
      description: 'Specialized care services for veterans, with knowledge of VA benefits and military experience.',
      icon: <FaBed size={36} color="#fff" />,
      bgColor: 'bg-yellow-400'
    }
  ];

  return (
    <section className="py-20 bg-light">
      <div className="container mx-auto px-12">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-primary mb-4"
          >
            Our Care Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-black/80 max-w-2xl mx-auto"
          >
            We offer a comprehensive range of professional care services tailored to meet the unique needs of your loved ones.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <ServiceCard 
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              id={service.id}
              bgColor={service.bgColor}
            />
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Link 
            to="/pricing" 
            className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded uppercase tracking-wider font-medium transition duration-300"
          >
            REQUEST PRICING
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
