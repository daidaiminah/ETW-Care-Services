import { motion } from 'framer-motion';
import { useState, FormEvent } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import api from '../../utils/api';

const CareerApplication = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: 'General Application',
    experience: '',
    education: '',
    certifications: '',
    availability: '',
    coverLetter: ''
  });
  
  // Get position from URL if available
  useState(() => {
    const searchParams = new URLSearchParams(location.search);
    const positionParam = searchParams.get('position');
    
    if (positionParam) {
      setFormData(prev => ({ ...prev, position: positionParam }));
    }
  }, [location.search]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // For now, we'll use the contact form endpoint with a special subject
      // In a real implementation, you'd have a dedicated careers API endpoint
      const applicationData = {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        subject: `Job Application: ${formData.position}`,
        message: `Position: ${formData.position}
Experience: ${formData.experience}
Education: ${formData.education}
Certifications: ${formData.certifications}
Availability: ${formData.availability}

Cover Letter:
${formData.coverLetter}`
      };
      
      // Send form data to the contact API endpoint
      const response = await api.post('/contacts', applicationData);
      
      if (response.status === 201) {
        // Show success and redirect
        alert('Your application has been submitted successfully!');
        navigate('/careers');
      } else {
        throw new Error('Failed to submit application');
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('There was an error submitting your application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-16"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8 text-center">Career Application</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Personal Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-gray-700 mb-2">First Name*</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-gray-700 mb-2">Last Name*</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email Address*</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number*</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                </div>
              </div>
              
              {/* Job Details */}
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Position Details</h2>
                <div>
                  <label htmlFor="position" className="block text-gray-700 mb-2">Position Applied For*</label>
                  <select
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  >
                    <option value="General Application">General Application</option>
                    <option value="Caregiver - Full Time">Caregiver - Full Time</option>
                    <option value="Caregiver - Part Time">Caregiver - Part Time</option>
                    <option value="Care Coordinator">Care Coordinator</option>
                    <option value="Registered Nurse">Registered Nurse</option>
                    <option value="Overnight Caregiver">Overnight Caregiver</option>
                  </select>
                </div>
                
                <div className="mt-4">
                  <label htmlFor="availability" className="block text-gray-700 mb-2">Availability*</label>
                  <input
                    type="text"
                    id="availability"
                    name="availability"
                    value={formData.availability}
                    onChange={handleChange}
                    placeholder="E.g., Weekdays 9-5, Weekends, Evenings only, etc."
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
              </div>
              
              {/* Qualifications */}
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Qualifications</h2>
                
                <div className="mb-4">
                  <label htmlFor="experience" className="block text-gray-700 mb-2">Relevant Experience*</label>
                  <textarea
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Please describe your caregiving experience"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  ></textarea>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="education" className="block text-gray-700 mb-2">Education</label>
                  <textarea
                    id="education"
                    name="education"
                    value={formData.education}
                    onChange={handleChange}
                    rows={2}
                    placeholder="Relevant educational background"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  ></textarea>
                </div>
                
                <div>
                  <label htmlFor="certifications" className="block text-gray-700 mb-2">Certifications</label>
                  <textarea
                    id="certifications"
                    name="certifications"
                    value={formData.certifications}
                    onChange={handleChange}
                    rows={2}
                    placeholder="CPR, First Aid, CNA, etc."
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  ></textarea>
                </div>
              </div>
              
              {/* Cover Letter */}
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Additional Information</h2>
                
                <div>
                  <label htmlFor="coverLetter" className="block text-gray-700 mb-2">Cover Letter / Additional Information</label>
                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us why you're interested in working with ETW Care Services..."
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  ></textarea>
                </div>
              </div>
              
              {/* Submit Button */}
              <div className="pt-4">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary text-white py-3 px-6 rounded-lg font-medium transition duration-300 hover:bg-primary-dark disabled:opacity-70"
                >
                  {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
                </motion.button>
                
                <p className="text-sm text-gray-500 mt-4 text-center">
                  By submitting this application, you agree to our terms and conditions regarding the processing of your personal information.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CareerApplication;
