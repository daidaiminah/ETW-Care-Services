import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Import all award images
import award1 from '../assets/images/awards/award1.png';
import award2 from '../assets/images/awards/award2.png';
import award3 from '../assets/images/awards/award3.png';
import award4 from '../assets/images/awards/award4.png';
import award5 from '../assets/images/awards/award5.png';
import award6 from '../assets/images/awards/award6.png';
import award7 from '../assets/images/awards/award7.png';
import award8 from '../assets/images/awards/award8.png';
import award9 from '../assets/images/awards/award9.png';
import award10 from '../assets/images/awards/award10.jpg';
import award11 from '../assets/images/awards/award11.png';
import award12 from '../assets/images/awards/award12.jpg';
import award13 from '../assets/images/awards/award13.png';
import award14 from '../assets/images/awards/award14.jpeg';
import award15 from '../assets/images/awards/award15.jpeg';

// List of locations from the AreasServedSection
const locations = [
  'Rehab',
  'Huntersville',
  'Pineville',
  'Matthews, NC',
  'Mooresville',
  'Mint Hill'
];

const AwardsSection = () => {
  const [currentLocationIndex, setCurrentLocationIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  
  // Array of all award images
  const allAwards = [
    { src: award1, alt: "Commerce Choice Award" },
    { src: award2, alt: "Fast 50 Award" },
    { src: award3, alt: "Veteran Owned Business" },
    { src: award4, alt: "Equal Opportunity Employer" },
    { src: award5, alt: "Care Quality Certification" },
    { src: award6, alt: "Excellence in Care Award" },
    { src: award7, alt: "Top Rated Service Award" },
    { src: award8, alt: "Customer Satisfaction Award" },
    { src: award9, alt: "Community Service Award" },
    { src: award10, alt: "Best in Industry Award" },
    { src: award11, alt: "Professional Care Certification" },
    { src: award12, alt: "Healthcare Excellence Award" },
    { src: award13, alt: "Quality Service Award" },
    { src: award14, alt: "Best Care Provider Award" },
    { src: award15, alt: "Outstanding Service Award" },
  ];
  
  // Number of awards to display at once
  const awardsPerPage = 5;
  
  // Calculate total number of pages
  const totalPages = Math.ceil(allAwards.length / awardsPerPage);
  
  // Function to navigate to previous page
  const prevPage = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };
  
  // Function to navigate to next page
  const nextPage = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };
  
  // Get current awards to display
  const getCurrentAwards = () => {
    const startIndex = currentPage * awardsPerPage;
    return allAwards.slice(startIndex, startIndex + awardsPerPage);
  };
  
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
            <button 
              onClick={prevPage}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-100 transition-colors"
              aria-label="Previous awards"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex justify-center items-center space-x-8 py-8">
              {/* Map through current page of awards */}
              {getCurrentAwards().map((award, index) => (
                <motion.div 
                  key={`award-${currentPage}-${index}`}
                  className="w-32 h-24 flex items-center justify-center"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <img 
                    src={award.src} 
                    alt={award.alt} 
                    className="max-h-full max-w-full object-contain" 
                  />
                </motion.div>
              ))}
            </div>
            
            <button 
              onClick={nextPage}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-100 transition-colors"
              aria-label="Next awards"
            >
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
          className="bg-primary text-white py-10 px-6 rounded-lg text-center"
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
