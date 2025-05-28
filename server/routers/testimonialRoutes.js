import express from 'express';
import { 
  getTestimonials, 
  getTestimonialById, 
  createTestimonial, 
  updateTestimonial, 
  deleteTestimonial 
} from '../controllers/testimonialController.js';
import { protect, isAdmin } from '../middleware/auth.js';

const router = express.Router();

// Public routes
router.get('/', getTestimonials);
router.get('/:id', getTestimonialById);

// Protected routes
router.post('/', protect, isAdmin, createTestimonial);
router.put('/:id', protect, isAdmin, updateTestimonial);
router.delete('/:id', protect, isAdmin, deleteTestimonial);

export default router;
