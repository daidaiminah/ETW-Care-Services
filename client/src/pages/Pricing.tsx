import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaCheck, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface PricingPlanProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText?: string;
  ctaLink?: string;
  hourRange: string;
}

const PricingPlan = ({ 
  title, 
  price, 
  description, 
  features, 
  isPopular = false,
  ctaText = "Request Service",
  ctaLink = "/contact",
  hourRange
}: PricingPlanProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`bg-white rounded-lg shadow-md overflow-hidden border ${isPopular ? 'border-primary' : 'border-gray-200'} h-full flex flex-col`}
    >
      {isPopular && (
        <div className="bg-primary text-white text-center py-2 text-sm font-medium">
          Most Popular
        </div>
      )}
      
      <div className="p-8 flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="mb-6">
          <span className="text-3xl font-bold text-gray-800">{price}</span>
          <span className="text-gray-600 ml-1">/hour</span>
          <p className="text-sm text-gray-500 mt-1">{hourRange}</p>
        </div>
        
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <FaCheck className="text-primary mt-1 mr-2 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="p-8 border-t border-gray-200">
        <Link
          to={ctaLink}
          className={`w-full block text-center py-3 rounded font-medium ${
            isPopular 
              ? 'bg-primary hover:bg-primary/80 text-white' 
              : 'bg-white hover:bg-gray-50 text-primary border border-primary'
          } transition duration-300`}
        >
          {ctaText}
        </Link>
      </div>
    </motion.div>
  );
};

const Pricing = () => {
  const [showMonthly, setShowMonthly] = useState(true);
  
  const pricingPlans: PricingPlanProps[] = [
    {
      title: "Companion Care",
      price: showMonthly ? "$25" : "$23",
      description: "Social interaction and basic assistance for independent seniors",
      hourRange: showMonthly ? "20+ hours monthly" : "100+ hours monthly",
      features: [
        "Companionship and conversation",
        "Light housekeeping",
        "Meal preparation",
        "Medication reminders",
        "Transportation and errands",
        "Shopping assistance",
        "Cognitive stimulation activities"
      ]
    },
    {
      title: "Personal Care",
      price: showMonthly ? "$28" : "$26",
      description: "Comprehensive assistance with activities of daily living",
      hourRange: showMonthly ? "20+ hours monthly" : "100+ hours monthly",
      features: [
        "All Companion Care services",
        "Bathing and hygiene assistance",
        "Dressing assistance",
        "Toileting and incontinence care",
        "Mobility assistance",
        "Feeding assistance",
        "Care plan coordination"
      ],
      isPopular: true
    },
    {
      title: "Specialized Care",
      price: showMonthly ? "$32" : "$30",
      description: "Advanced care for complex needs including dementia and post-hospital",
      hourRange: showMonthly ? "20+ hours monthly" : "100+ hours monthly",
      features: [
        "All Personal Care services",
        "Dementia care expertise",
        "Post-hospitalization care",
        "Complex medical needs",
        "Chronic disease management",
        "End-of-life care support",
        "Registered Nurse supervision"
      ]
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
            <h1 className="text-4xl font-bold text-primary mb-4">Transparent Pricing</h1>
            <p className="text-xl text-gray-700">
              Flexible care options to meet your needs and budget
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Care Service Rates</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              We offer competitive rates for high-quality care. Our transparent pricing ensures 
              no surprises, and we work with you to find the best care solution for your budget.
            </p>
            
            {/* Toggle Monthly/Long-term */}
            <div className="inline-flex items-center bg-gray-100 rounded-full p-1 mb-8">
              <button
                onClick={() => setShowMonthly(true)}
                className={`py-2 px-4 rounded-full text-sm font-medium transition ${
                  showMonthly 
                    ? 'bg-primary text-white' 
                    : 'bg-transparent text-gray-700 hover:text-gray-900'
                }`}
              >
                Standard
              </button>
              <button
                onClick={() => setShowMonthly(false)}
                className={`py-2 px-4 rounded-full text-sm font-medium transition ${
                  !showMonthly 
                    ? 'bg-primary text-white' 
                    : 'bg-transparent text-gray-700 hover:text-gray-900'
                }`}
              >
                Long-Term
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <PricingPlan key={index} {...plan} />
            ))}
          </div>
        </div>
      </section>

      {/* Custom Quote & Insurance */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Request a Custom Quote</h3>
                <p className="text-gray-600 mb-6">
                  Every care situation is unique. Contact us for a personalized care assessment 
                  and quote tailored to your specific needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="tel:+17045952220" 
                    className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/80 text-white font-medium px-6 py-3 rounded transition duration-300"
                  >
                    <FaPhoneAlt />
                    <span>(704) 595-2220</span>
                  </a>
                  <Link
                    to="/contact"
                    className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-primary border border-primary font-medium px-6 py-3 rounded transition duration-300"
                  >
                    <FaEnvelope />
                    <span>Email Us</span>
                  </Link>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Payment Options</h3>
                <p className="text-gray-600 mb-4">
                  We accept various payment methods to make our services accessible:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <FaCheck className="text-primary mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Long-term care insurance</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-primary mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Veterans Aid & Attendance benefits</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-primary mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Private pay (credit cards, checks, electronic transfers)</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-primary mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Assistance with insurance claims</span>
                  </li>
                </ul>
                <Link
                  to="/contact?subject=Insurance"
                  className="text-primary hover:underline inline-flex items-center"
                >
                  <span>Ask about insurance coverage</span>
                  <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs About Pricing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Common Questions About Pricing</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Is there a minimum number of hours required?</h3>
                <p className="text-gray-600">
                  Yes, we typically require a minimum of 4 hours per visit for most services. This ensures our caregivers 
                  have adequate time to provide quality care and complete necessary tasks. For ongoing care, we offer 
                  discounted rates for clients who need 20+ hours per week or 100+ hours per month.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Does insurance cover your services?</h3>
                <p className="text-gray-600">
                  Many long-term care insurance policies cover our services. We can help you determine if your 
                  policy covers home care and assist with documentation for claims. Medicare typically does not 
                  cover non-medical home care, but there may be exceptions for certain Medicare Advantage plans.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Are there additional fees beyond the hourly rate?</h3>
                <p className="text-gray-600">
                  Our hourly rates include caregiver compensation, insurance, taxes, and administrative costs. 
                  There may be additional fees for holiday coverage, overnight care, or specialized services. 
                  We clearly disclose all fees before service begins, and there are no hidden costs or long-term contracts.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Do you offer any discounts?</h3>
                <p className="text-gray-600">
                  Yes, we offer discounted rates for long-term care (100+ hours monthly) as shown in our pricing table. 
                  We also offer special considerations for veterans and may have occasional promotional rates for new clients. 
                  Please contact us to discuss your specific situation and explore possible discounts.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link
                to="/contact"
                className="bg-primary hover:bg-primary/80 text-white font-medium px-8 py-3 rounded transition duration-300 inline-block"
              >
                Schedule a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Pricing;
