import express from 'express';
import { 
  submitContact, 
  getContacts, 
  getContactById, 
  updateContactStatus, 
  deleteContact 
} from '../controllers/contactController.js';
import { protect, isAdmin } from '../middleware/auth.js';

const router = express.Router();

// Public route
router.post('/', submitContact);

// Protected routes
router.get('/', protect, isAdmin, getContacts);
router.get('/:id', protect, isAdmin, getContactById);
router.put('/:id', protect, isAdmin, updateContactStatus);
router.delete('/:id', protect, isAdmin, deleteContact);

export default router;
