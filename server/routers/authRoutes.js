import express from 'express';
import { login, getProfile, registerAdmin, updatePassword } from '../controllers/authController.js';
import { protect, isSuperAdmin } from '../middleware/auth.js';

const router = express.Router();

// Public route
router.post('/login', login);

// Protected routes
router.get('/profile', protect, getProfile);
router.put('/update-password', protect, updatePassword);

// SuperAdmin only route
router.post('/register', protect, isSuperAdmin, registerAdmin);

export default router;
