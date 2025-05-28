import express from 'express';
import { 
  getServices, 
  getServiceBySlug, 
  createService, 
  updateService, 
  deleteService 
} from '../controllers/serviceController.js';
import { protect, isAdmin } from '../middleware/auth.js';

const router = express.Router();

// Public routes
router.get('/', getServices);
router.get('/:slug', getServiceBySlug);

// Protected routes
router.post('/', protect, isAdmin, createService);
router.put('/:id', protect, isAdmin, updateService);
router.delete('/:id', protect, isAdmin, deleteService);

export default router;
