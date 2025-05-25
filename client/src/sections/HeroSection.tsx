import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import HeroImage from '../assets/videos/5411347_Coll_wavebreak_People_3840x2160.mp4'

const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Only set up the initial autoplay once
  useEffect(() => {
    // We don't need to do anything programmatically after initial setup
    // The video will autoplay due to the autoPlay attribute
    // and loop due to the loop attribute
  }, []);

  return (
    <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
      <div className="container mx-auto px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-lg"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Compassionate Care for Your Loved Ones
            </h1>
            <p className="text-lg mb-8">
              Professional care services tailored to meet the unique needs of your family members,
              delivered with dignity and respect in the comfort of their own home.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/services" 
                className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition duration-300"
              >
                Our Services
              </Link>
              <Link 
                to="/contact" 
                className="bg-transparent hover:bg-white/10 border-2 border-white px-6 py-3 rounded-lg font-medium transition duration-300"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-xl bg-white border-4 border-white">
              {/* Video thumbnail with play button */}
              <div className="relative">
                {!isPlaying ? (
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <button 
                      onClick={handlePlayVideo}
                      aria-label="Play video"
                      className="group relative"
                    >
                      {/* Outer pulse animation */}
                      <span className="absolute inset-0 rounded-full bg-white/30 animate-ping group-hover:bg-white/40 opacity-75" style={{ animationDuration: '2s' }}></span>
                      {/* Inner pulse animation */}
                      <span className="absolute inset-0 rounded-full bg-white/50 animate-ping group-hover:bg-white/60 opacity-75" style={{ animationDuration: '2s', animationDelay: '0.5s' }}></span>
                      {/* Play button */}
                      <span className="relative flex items-center justify-center h-16 w-16 rounded-full bg-white text-primary shadow-lg transform transition-transform group-hover:scale-110">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                      </span>
                    </button>
                  </div>
                ) : null}
                <video 
                  ref={videoRef}
                  className="w-full h-auto rounded-lg" 
                  onClick={handlePlayVideo}
                  controls={isPlaying}
                  preload="auto"
                  autoPlay
                  muted
                  playsInline
                  loop
                >
                  <source src={HeroImage} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
