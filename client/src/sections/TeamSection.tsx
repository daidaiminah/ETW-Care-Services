import { motion } from 'framer-motion';

// Team member data - this could be moved to a data file later
const teamMembers = [
  {
    id: 1,
    name: 'Dr. Emily Thompson',
    role: 'Medical Director',
    bio: 'Dr. Thompson brings over 15 years of geriatric medicine experience to our team. She oversees our medical protocols and ensures our care meets the highest standards.',
    image: '/src/assets/images/team-1.jpg'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'Care Coordinator',
    bio: 'With a background in nursing and healthcare administration, Sarah expertly matches clients with the perfect caregivers and ensures seamless care delivery.',
    image: '/src/assets/images/team-2.jpg'
  },
  {
    id: 3,
    name: 'Michael Chen',
    role: 'Head of Caregiver Training',
    bio: 'Michael develops our comprehensive training programs, ensuring every caregiver is equipped with the skills and knowledge to provide exceptional care.',
    image: '/src/assets/images/team-3.jpg'
  },
  {
    id: 4,
    name: 'Rebecca Martinez',
    role: 'Client Services Director',
    bio: 'Rebecca is dedicated to client satisfaction and oversees all aspects of the client experience, from initial consultations to ongoing care management.',
    image: '/src/assets/images/team-4.jpg'
  },
  {
    id: 5,
    name: 'David Wilson',
    role: 'Operations Manager',
    bio: 'David ensures the smooth daily operation of our services, managing scheduling, logistics, and resource allocation to deliver reliable care.',
    image: '/src/assets/images/team-5.jpg'
  },
  {
    id: 6,
    name: 'Jennifer Lee',
    role: 'Family Support Specialist',
    bio: 'Jennifer works closely with families to provide resources, education, and emotional support throughout their care journey.',
    image: '/src/assets/images/team-6.jpg'
  }
];

const TeamSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-primary mb-4">Our Leadership Team</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated professionals who guide our organization and ensure we deliver exceptional care.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className="bg-light rounded-lg overflow-hidden shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/src/assets/images/placeholder-avatar.jpg';
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-1">{member.name}</h3>
                <p className="text-accent font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
