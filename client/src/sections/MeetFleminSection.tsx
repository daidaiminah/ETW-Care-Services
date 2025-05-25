import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPlay } from 'react-icons/fa';
import { FaTimes, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { useState, useRef, useEffect } from 'react';
import OwnerImg from "../assets/images/multi-ethnic-business-team.jpg"
import seniorWoman from "../assets/images/senior-women.jpg"
import careGiver1 from "../assets/images/male-social-worker-taking-care-old-woman.jpg"


const MeetFleminSection = () => {
  const slides = [
    {
      image: OwnerImg,
      title: "Meet the<br /> Daimit",
      description: "Nat and Mary Ellen Daimit started ETW Care Services of Rehab based on the experience they had with their son Joe and their love of seniors.",
      video: "https://www.youtube-nocookie.com/embed/oK8eYmJUt7Y?si=5GzuXhZLdfUpEiL4",
      captionLine1: "Mary Ellen and Ken Daimit",
      captionLine2: "Owners of ETW Care Services of Rehab"
    },
    {
      image: seniorWoman,
      title: "Meet Our<br /> Caregivers",
      description: "Our caregivers are compassionate, experienced, and dedicated to providing the best care possible for your loved ones.",
      video: "https://www.youtube-nocookie.com/embed/oK8eYmJUt7Y?si=5GzuXhZLdfUpEiL4",
      captionLine1: "ETW Care Services Team",
      captionLine2: "Providing compassionate care for seniors"
    },
    {
      image: careGiver1,
      title: "Meet Our<br /> Caregivers",
      description: "Meet John, one of our best caregivers. John has been with ETW Care Services of Rehab for over 10 years and has a passion for helping seniors live their best lives.",
      video: "https://www.youtube-nocookie.com/embed/oK8eYmJUt7Y?si=5GzuXhZLdfUpEiL4",
      captionLine1: "John Smith",
      captionLine2: "Senior Caregiver at ETW Care Services"
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
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
            <h2 className="text-4xl font-bold text-gray-800 mb-6" dangerouslySetInnerHTML={{ __html: slides[currentSlide].title }} />
            <p className="text-gray-700 mb-8 leading-relaxed">
              {slides[currentSlide].description}
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
                  src={slides[currentSlide].image} 
                  alt={`Slide ${currentSlide + 1} - ETW Care Services`} 
                  className="w-full h-auto"
                />
                
                {/* Caption overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/30 text-white p-4">
                  <p className="text-sm">
                    {slides[currentSlide].captionLine1}<br />
                    {slides[currentSlide].captionLine2}
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
                            src={`${slides[currentSlide].video}${isPlaying ? '&autoplay=1' : ''}`}
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
              <button 
                onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
                className="w-8 h-8 rounded-full bg-white hover:bg-gray-100 text-primary flex items-center justify-center transition-colors duration-300"
                aria-label="Previous slide"
              >
                <FaArrowLeft />
              </button>
              <div className="flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${index === currentSlide ? 'bg-primary' : 'bg-gray-300 hover:bg-primary/50'}`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              <button 
                onClick={() => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))}
                className="w-8 h-8 rounded-full bg-white hover:bg-gray-100 text-primary flex items-center justify-center transition-colors duration-300"
                aria-label="Next slide"
              >
                <FaArrowRight />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MeetFleminSection;
