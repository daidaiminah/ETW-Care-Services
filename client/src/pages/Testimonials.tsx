import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

interface TestimonialProps {
  quote: string;
  author: string;
  relation: string;
  image?: string;
  stars?: number;
  location?: string;
}

const TestimonialCard = ({ quote, author, relation, image, stars = 5, location }: TestimonialProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col"
    >
      <div className="p-8 flex-grow">
        <div className="text-primary mb-4">
          <FaQuoteLeft size={32} />
        </div>
        
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className={`${i < stars ? 'text-yellow-400' : 'text-gray-300'} mr-1`} />
          ))}
        </div>
        
        <p className="text-gray-700 italic mb-6">{quote}</p>
        
        <div className="mt-auto">
          <p className="font-bold text-gray-800">{author}</p>
          <p className="text-gray-600">{relation}</p>
          {location && <p className="text-gray-600 text-sm">{location}</p>}
        </div>
      </div>
      
      {image && (
        <div className="h-24 bg-gray-100 flex items-center justify-center border-t border-gray-200">
          <img 
            src={image} 
            alt={`${author}'s family member`} 
            className="h-16 w-16 rounded-full object-cover mx-auto"
            onError={(e) => {
              e.currentTarget.src = "https://placehold.co/200x200/e2e8f0/1e40af?text=Client";
            }}
          />
        </div>
      )}
    </motion.div>
  );
};

const Testimonials = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const testimonials: TestimonialProps[] = [
    {
      quote: "The care provided by ETW for my mother has been exceptional. The caregivers are compassionate, reliable, and truly care about her wellbeing. They've become like family to us.",
      author: "Jennifer S.",
      relation: "Daughter of client",
      image: "/src/assets/images/testimonial-1.jpg",
      stars: 5,
      location: "Rehab"
    },
    {
      quote: "After my surgery, I was worried about managing at home alone. ETW Care Services made the recovery period so much easier with their professional and attentive care.",
      author: "Robert M.",
      relation: "Personal care client",
      image: "/src/assets/images/testimonial-2.jpg",
      stars: 5,
      location: "Lover's Street"
    },
    {
      quote: "Finding quality care for my father with dementia was challenging until we found ETW. Their specialized approach has made such a difference in his quality of life.",
      author: "Michael T.",
      relation: "Son of client",
      image: "/src/assets/images/testimonial-3.jpg",
      stars: 5,
      location: "Thinker's Village"
    },
    {
      quote: "As a veteran, I appreciate the respect and understanding shown by my ETW caregiver. They understand my unique needs and have helped me maintain my independence.",
      author: "James W.",
      relation: "Veteran care client",
      stars: 5,
      location: "Cooper's Farm"
    },
    {
      quote: "The companion care services have been a lifeline for my grandmother who was feeling isolated. Her caregiver brings so much joy and engagement to her days.",
      author: "Sarah L.",
      relation: "Granddaughter of client",
      stars: 5,
      location: "Rehab"
    },
    {
      quote: "The respite care provided by ETW allowed me to take a much-needed break while knowing my wife was in excellent hands. Their flexibility with scheduling was so helpful.",
      author: "David R.",
      relation: "Husband of client",
      stars: 4,
      location: "Thinker's Village"
    },
    {
      quote: "The team at ETW goes above and beyond in their care. They're attentive to even the smallest details and always follow through on commitments.",
      author: "Patricia J.",
      relation: "Daughter of client",
      stars: 5,
      location: "Cooper's Farm"
    },
    {
      quote: "When we needed last-minute care for our father, ETW responded quickly and professionally. Their ability to adapt to our changing needs has been invaluable.",
      author: "Thomas B.",
      relation: "Son of client",
      stars: 5,
      location: "Rehab"
    }
  ];
  
  const filteredTestimonials = activeFilter === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.location === activeFilter);
  
  const locations = ['all', ...new Set(testimonials.map(t => t.location || ''))];

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
            <h1 className="text-4xl font-bold text-primary mb-4">Client Testimonials</h1>
            <p className="text-xl text-gray-700">
              Read what our clients and their families have to say about their experience with ETW Care Services.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">What Our Clients Say</h2>
            
            {/* Filter by location */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {locations.map((location) => (
                <button
                  key={location}
                  onClick={() => setActiveFilter(location)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    activeFilter === location
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {location === 'all' ? 'All Locations' : location}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
          
          {filteredTestimonials.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">No testimonials found for this filter. Please try another location.</p>
            </div>
          )}
        </div>
      </section>

      {/* Share Your Experience */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 bg-primary p-12 text-white">
                <h3 className="text-2xl font-bold mb-4">Share Your Experience</h3>
                <p className="mb-6">
                  We value your feedback. If you've been pleased with our services, we'd love to hear your story.
                  Your testimonial helps others find the care they need.
                </p>
                <a 
                  href="/contact?subject=Testimonial" 
                  className="inline-block bg-white text-primary font-medium px-6 py-3 rounded hover:bg-gray-100 transition duration-300"
                >
                  Submit Your Testimonial
                </a>
              </div>
              <div className="md:w-1/2 p-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Commitment to Care</h3>
                <p className="text-gray-600 mb-4">
                  At ETW Care Services, client satisfaction is our top priority. We continuously strive to improve
                  our services based on your feedback and experiences.
                </p>
                <p className="text-gray-600">
                  All testimonials are shared with permission from our clients and families. We respect your privacy
                  and will never share your personal information without consent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Testimonials;
