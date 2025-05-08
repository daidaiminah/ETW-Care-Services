import { motion } from 'framer-motion';
import { FaHandHoldingHeart } from 'react-icons/fa';
import ServiceDetail from '../../components/services/ServiceDetail';

const CompanionCare = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-primary mb-4">Companion Care Services</h1>
            <p className="text-xl text-gray-600">
              Meaningful social interaction and emotional support to combat loneliness and enrich daily life.
            </p>
          </div>
        </div>
      </div>
      
      <ServiceDetail
        title="Companion Care"
        description="ETW Care Services provides compassionate companion care that focuses on meaningful social interaction and emotional wellbeing. Our companion caregivers offer friendship, conversation, and engagement that helps combat isolation and loneliness, which can significantly impact health and quality of life. Through shared activities, outings, and genuine human connection, our companion care services ensure your loved one maintains social ties and continues to find joy and purpose in daily life."
        icon={<FaHandHoldingHeart size={36} color="#fff" />}
        benefits={[
          "Meaningful conversation and emotional connection that reduces feelings of isolation",
          "Engagement in favorite hobbies, games, and activities to maintain interests",
          "Assistance with light household tasks while providing companionship",
          "Accompaniment to social events, religious services, and community activities",
          "Support for letter writing, email, or video calls to stay connected with family",
          "Cognitive stimulation through reading, discussion, and memory activities",
          "Transportation to appointments, shopping, or recreational outings",
          "Monitoring of mood changes or health concerns that might otherwise go unnoticed"
        ]}
        iconBgColor="bg-rose-400"
        image="/src/assets/images/companion-care.jpg"
      />
    </motion.div>
  );
};

export default CompanionCare;
