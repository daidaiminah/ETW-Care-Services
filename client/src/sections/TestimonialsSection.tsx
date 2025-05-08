import { motion } from 'framer-motion';

// Define testimonial data
const testimonials = [
  {
    id: 1,
    quote: "The care provided by ETW for my mother has been exceptional. The caregivers are compassionate, reliable, and truly care about her wellbeing.",
    author: "Jennifer S.",
    relation: "Daughter of client",
    image: "/src/assets/images/testimonial-1.jpg"
  },
  {
    id: 2,
    quote: "After my surgery, I was worried about managing at home alone. ETW Care Services made the recovery period so much easier with their professional and attentive care.",
    author: "Robert M.",
    relation: "Personal care client",
    image: "/src/assets/images/testimonial-2.jpg"
  },
  {
    id: 3,
    quote: "Finding quality care for my father with dementia was challenging until we found ETW. Their specialized approach has made such a difference in his quality of life.",
    author: "Michael T.",
    relation: "Son of client",
    image: "/src/assets/images/testimonial-3.jpg"
  }
];

const TestimonialsSection = () => {
  return (
    <motion.section className="py-20 bg-gray-50">
      <motion.div 
        className="container mx-auto px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2 
          className="text-4xl font-bold text-center mb-2 text-primary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What Our Clients Say
        </motion.h2>
        <motion.p 
          className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          We're proud to make a positive difference in our clients' lives. Here are some kind words from families we've had the privilege to serve.
        </motion.p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-lg p-8 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="mb-6">
                <svg className="w-8 h-8 text-primary-light" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-700 mb-6 flex-grow italic">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-200 mr-4 overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/src/assets/images/placeholder-avatar.jpg';
                    }}
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-primary">{testimonial.author}</h4>
                  <p className="text-sm text-gray-600">{testimonial.relation}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default TestimonialsSection;
