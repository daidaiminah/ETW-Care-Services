import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPlay } from 'react-icons/fa';
import { useState } from 'react';

const MeetFleminSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsPlaying(true);
    // In a real implementation, you would trigger the video player here
  };

  return (
    <section className="py-20 bg-[#d7e5ea]">
      <div className="container mx-auto px-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Meet the<br />Flemings
            </h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Ken and Mary Ellen started FirstLight Home Care of Charlotte based on the 
              experience they had with their son Joe and their love of seniors.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-lg uppercase text-sm tracking-wider transition duration-300"
            >
              FIND HOME CARE NEAR YOU
            </Link>
          </motion.div>
          
          {/* Right video content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-lg overflow-hidden shadow-xl">
              <div className="relative">
                <img 
                  src="/src/assets/images/multi-ethnic-business-team.jpg" 
                  alt="Ken and Mary Ellen Fleming - Owners of ETW Care Services" 
                  className="w-full h-auto"
                />
                
                {/* Caption overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/30 text-white p-4">
                  <p className="text-sm">
                    Mary Ellen and Ken Fleming<br />
                    Owners of FirstLight Home Care of Charlotte, N.C.
                  </p>
                </div>
                
                {/* Play button */}
                <button
                  onClick={handlePlayVideo}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full w-16 h-16 flex items-center justify-center transition-all duration-300"
                  aria-label="Play video"
                >
                  <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center">
                    <FaPlay className="text-primary ml-1" size={20} />
                  </div>
                </button>
                
                {/* Video overlay - would be displayed when isPlaying is true */}
                {isPlaying && (
                  <div className="absolute inset-0 bg-black">
                    {/* In a real implementation, you would embed the actual video player here */}
                    <iframe 
                      width="100%" 
                      height="100%" 
                      src="about:blank" 
                      title="Owners of ETW Care Services" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
              </div>
            </div>
            
            {/* Navigation dots */}
            <div className="flex justify-center mt-6 space-x-2">
              <button className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="sr-only">Slide 1</span>
              </button>
              <button className="w-8 h-8 rounded-full border border-primary flex items-center justify-center">
                <span className="sr-only">Slide 2</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MeetFleminSection;
