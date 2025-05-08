import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// List of locations from the AreasServedSection
const locations = [
  'Charlotte',
  'Huntersville',
  'Pineville',
  'Matthews, NC',
  'Mooresville',
  'Mint Hill'
];

const AwardsSection = () => {
  const [currentLocationIndex, setCurrentLocationIndex] = useState(0);
  
  // Change location every 30 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentLocationIndex((prevIndex) => (prevIndex + 1) % locations.length);
    }, 3000); // 3 seconds for demo purposes, set to 30000 for 30 seconds in production
    
    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Awards & Associations</h2>
          
          {/* Awards logos carousel */}
          <div className="relative overflow-hidden">
            <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex justify-center items-center space-x-8 py-8">
              {/* Award logos */}
              <div className="w-28 h-20 flex items-center justify-center">
                <img src="/src/assets/images/award-logo-1.png" alt="Commerce Choice Award" className="max-h-full" onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/120x80?text=Award+1' }} />
              </div>
              <div className="w-28 h-20 flex items-center justify-center">
                <img src="/src/assets/images/award-logo-2.png" alt="Fast 50 Award" className="max-h-full" onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/120x80?text=Award+2' }} />
              </div>
              <div className="w-28 h-20 flex items-center justify-center">
                <img src="/src/assets/images/award-logo-3.png" alt="Veteran Owned Business" className="max-h-full" onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/120x80?text=Award+3' }} />
              </div>
              <div className="w-28 h-20 flex items-center justify-center">
                <img src="/src/assets/images/award-logo-4.png" alt="Equal Opportunity Employer" className="max-h-full" onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/120x80?text=Award+4' }} />
              </div>
              <div className="w-28 h-20 flex items-center justify-center">
                <img src="/src/assets/images/award-logo-5.png" alt="Care Quality Certification" className="max-h-full" onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/120x80?text=Award+5' }} />
              </div>
            </div>
            
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.div>
        
        {/* Trust banner with changing location */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-[#4B6C80] text-white py-10 px-6 rounded-lg text-center"
        >
          <h2 className="text-3xl font-bold mb-0">Home Care You Can Trust in</h2>
          <motion.div
            key={currentLocationIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mt-2"
          >
            {locations[currentLocationIndex]}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AwardsSection;
