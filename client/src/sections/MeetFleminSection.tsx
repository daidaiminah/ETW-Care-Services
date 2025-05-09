import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPlay } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import { useState, useRef, useEffect } from 'react';
import OwnerImg from "../assets/images/multi-ethnic-business-team.jpg"

const MeetFleminSection = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLIFrameElement>(null);
  
  const handlePlayVideo = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setIsPlaying(false);
    // Reset video if needed
    if (videoRef.current && videoRef.current.src) {
      videoRef.current.src = videoRef.current.src;
    }
  };

  const handleStartVideo = () => {
    setIsPlaying(true);
  };

  // Close popup with escape key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClosePopup();
      }
    };
    window.addEventListener('keydown', handleEsc);
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

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
              Meet the<br />Daimit
            </h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Nat and Mary Ellen Daimit started ETW Care Services of Rehab based on the 
              experience they had with their son Joe and their love of seniors.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-lg uppercase text-sm tracking-wider transition duration-300"
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
                  src={OwnerImg} 
                  alt="Ken and Mary Ellen Daimit - Owners of ETW Care Services" 
                  className="w-full h-auto"
                />
                
                {/* Caption overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/30 text-white p-4">
                  <p className="text-sm">
                    Mary Ellen and Ken Daimit<br />
                    Owners of ETW Care Services of Rehab
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
                
                {/* Video popup overlay */}
                {showPopup && (
                  <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
                    <div className="relative bg-white rounded-lg w-full max-w-3xl mx-auto">
                      {/* Close button */}
                      <button 
                        onClick={handleClosePopup}
                        className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
                        aria-label="Close video"
                      >
                        <FaTimes size={24} />
                      </button>
                      
                      {/* Video container */}
                      <div className="aspect-video relative overflow-hidden">
                        {!isPlaying ? (
                          <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                            <button 
                              onClick={handleStartVideo}
                              className="bg-primary hover:bg-primary/90 text-white rounded-full w-16 h-16 flex items-center justify-center transition-all duration-300"
                              aria-label="Play video"
                            >
                              <FaPlay className="ml-1" size={20} />
                            </button>
                          </div>
                        ) : (
                          <iframe 
                            ref={videoRef}
                            width="100%" 
                            height="100%" 
                            src="https://www.youtube-nocookie.com/embed/oK8eYmJUt7Y?si=5GzuXhZLdfUpEiL4" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin" 
                            allowFullScreen
                          ></iframe>
                        )}
                      </div>
                    </div>
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
