import { motion } from 'framer-motion';
import { FaHeart, FaHandshake, FaUserShield, FaUserFriends, FaRegLightbulb, FaClipboardCheck } from 'react-icons/fa';

const ValueCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full border-t-4 border-primary"
    >
      <div className="text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const Values = () => {
  const values = [
    {
      icon: <FaHeart size={40} />,
      title: "Compassion",
      description: "We lead with empathy and kindness in every interaction, understanding that caring for others is both a privilege and a responsibility."
    },
    {
      icon: <FaUserShield size={40} />,
      title: "Dignity",
      description: "We respect the individuality, autonomy, and privacy of each client, ensuring they maintain their dignity throughout our care relationship."
    },
    {
      icon: <FaHandshake size={40} />,
      title: "Integrity",
      description: "We uphold the highest ethical standards, being honest, trustworthy, and accountable in all our actions and decisions."
    },
    {
      icon: <FaUserFriends size={40} />,
      title: "Relationships",
      description: "We believe in building meaningful connections with our clients and their families, fostering trust and open communication."
    },
    {
      icon: <FaRegLightbulb size={40} />,
      title: "Innovation",
      description: "We continuously seek better ways to provide care, embracing new approaches and technologies that enhance quality of life."
    },
    {
      icon: <FaClipboardCheck size={40} />,
      title: "Excellence",
      description: "We are committed to delivering exceptional care through thorough training, ongoing education, and attention to detail."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Section */}
      <section className="bg-primary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-primary mb-4">Our Core Values</h1>
            <p className="text-xl text-gray-700">
              The principles that guide every decision we make and every service we provide at ETW Care Services.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">What Defines Us</h2>
            <p className="text-lg text-gray-600">
              At ETW Care Services, our values aren't just words on a page—they're the foundation of our company 
              culture and the standards we live by every day. These core principles shape how we interact with 
              clients, families, and each other.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ValueCard {...value} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 bg-primary p-12 text-white">
                  <h3 className="text-2xl font-bold mb-6">Our Commitment to Quality</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="mr-2 mt-1">✓</span>
                      <span>Thorough screening and background checks for all caregivers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1">✓</span>
                      <span>Comprehensive training and continuing education programs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1">✓</span>
                      <span>Regular supervision and quality assurance checks</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1">✓</span>
                      <span>Client-centered care plans that adapt to changing needs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1">✓</span>
                      <span>Open communication with clients and families</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1">✓</span>
                      <span>24/7 availability for questions and concerns</span>
                    </li>
                  </ul>
                </div>
                <div className="md:w-1/2 p-12">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Care Philosophy</h3>
                  <p className="text-gray-600 mb-6">
                    We believe that exceptional care is built on relationships. By taking the time to truly 
                    understand each client's unique story, preferences, and needs, we can provide personalized 
                    care that goes beyond physical assistance to nurture emotional and social wellbeing.
                  </p>
                  <p className="text-gray-600 mb-6">
                    Our approach is holistic, recognizing that every aspect of a person's life contributes 
                    to their overall health and happiness. We work collaboratively with clients, families, 
                    and healthcare providers to ensure comprehensive support that enhances quality of life.
                  </p>
                  <p className="text-gray-600">
                    Above all, we honor the dignity, autonomy, and individuality of every client, providing 
                    care that respects their choices and celebrates their unique journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Values;
