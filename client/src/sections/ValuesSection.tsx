import { motion } from 'framer-motion';

const values = [
  {
    id: 1,
    title: 'Compassion',
    description: 'We approach each client with genuine empathy and understanding, recognizing their unique needs and preferences.',
    icon: '/src/assets/icons/compassion.svg',
  },
  {
    id: 2,
    title: 'Excellence',
    description: 'We are committed to providing the highest standard of care through continuous training and best practices.',
    icon: '/src/assets/icons/excellence.svg',
  },
  {
    id: 3,
    title: 'Dignity',
    description: 'We respect the individuality and autonomy of each client, preserving their dignity in all interactions.',
    icon: '/src/assets/icons/dignity.svg',
  },
  {
    id: 4,
    title: 'Reliability',
    description: 'Our clients and their families can depend on our consistent, trustworthy care and support.',
    icon: '/src/assets/icons/reliability.svg',
  },
  {
    id: 5,
    title: 'Integrity',
    description: 'We operate with honesty, transparency, and ethical practices in all aspects of our business.',
    icon: '/src/assets/icons/integrity.svg',
  },
  {
    id: 6,
    title: 'Community',
    description: 'We believe in fostering meaningful connections between caregivers, clients, and families.',
    icon: '/src/assets/icons/community.svg',
  }
];

const ValuesSection = () => {
  return (
    <section className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-primary mb-4">Our Core Values</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            These principles guide our approach to care and define our commitment to those we serve.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.id}
              className="bg-white rounded-lg shadow-md p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="bg-primary-light w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <img 
                  src={value.icon} 
                  alt={value.title} 
                  className="w-8 h-8"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/src/assets/icons/placeholder.svg';
                  }}
                />
              </div>
              <h3 className="text-xl font-semibold text-primary text-center mb-3">{value.title}</h3>
              <p className="text-gray-600 text-center">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
